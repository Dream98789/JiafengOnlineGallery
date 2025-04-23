// 購物車功能

// 初始化 EmailJS
emailjs.init('djoCxb0sRajSB5mxC');

window.cart = {
    // 刪除購物車商品
    removeItem: function(productSrc) {
        const cartData = JSON.parse(localStorage.getItem('cart')) || [];
        const newCart = cartData.filter(item => item.src !== productSrc);
        localStorage.setItem('cart', JSON.stringify(newCart));
        this.updateCartCount();
    },
    // 初始化購物車
    init: function() {
        this.updateCartCount();
        this.setupCartButton();
    },
    // 打開購物車
    openCart: function() {
        // 建立購物車彈窗
        const cartOverlay = document.createElement('div');
        cartOverlay.className = 'cart-overlay';
        cartOverlay.innerHTML = `
            <div class="cart-content">
                <div class="cart-header">
                    <h2>精選收藏</h2>
                    <button class="close-cart">×</button>
                </div>
                <div class="cart-items"></div>
                <div class="cart-footer">
                    <div class="cart-total">總計估價：NT$ <span class="total-amount">0</span></div>
                    <button class="checkout-btn">作品收藏洽詢</button>
                </div>
            </div>
        `;
        document.body.appendChild(cartOverlay);
        // 關閉按鈕
        cartOverlay.querySelector('.close-cart').onclick = () => cartOverlay.remove();
        // 點擊遮罩關閉
        cartOverlay.onclick = e => { if (e.target === cartOverlay) cartOverlay.remove(); };
        // 防止點擊內容區關閉
        cartOverlay.querySelector('.cart-content').onclick = e => e.stopPropagation();
        // 結帳按鈕（顯示訂單表單）
        cartOverlay.querySelector('.checkout-btn').onclick = () => {
            // 建立訂單表單
            const formOverlay = document.createElement('div');
            formOverlay.className = 'cart-overlay';
            formOverlay.innerHTML = `
                <div class="cart-content">
                    <div class="cart-header">
                        <h2>請填入您的洽詢資訊</h2>
                        <p class="cart-inquiry-info">將有專人與您聯絡</p>
                        <p class="cart-privacy-link"><a href="privacy_policy.html" target="_blank">隱私權政策</a></p>
                        <button class="close-cart">×</button>
                    </div>
                    <form class="order-form">
                        <label>姓名：<input type="text" name="name" required></label><br>
                        <label>電話：<input type="tel" name="phone" required></label><br>
                        <label>Email：<input type="email" name="email" required></label><br>
                        <label>地區：
                            <select name="address" required style="font-size:1rem;padding:0.3em 0.7em;border-radius:6px;border:1px solid #bbb;">
                                <option value="">請選擇地區</option>
                                <option value="台北市">台北市</option>
                                <option value="新北市">新北市</option>
                                <option value="基隆市">基隆市</option>
                                <option value="桃園市">桃園市</option>
                                <option value="新竹市">新竹市</option>
                                <option value="新竹縣">新竹縣</option>
                                <option value="苗栗縣">苗栗縣</option>
                                <option value="台中市">台中市</option>
                                <option value="彰化縣">彰化縣</option>
                                <option value="南投縣">南投縣</option>
                                <option value="雲林縣">雲林縣</option>
                                <option value="嘉義市">嘉義市</option>
                                <option value="嘉義縣">嘉義縣</option>
                                <option value="台南市">台南市</option>
                                <option value="高雄市">高雄市</option>
                                <option value="屏東縣">屏東縣</option>
                                <option value="宜蘭縣">宜蘭縣</option>
                                <option value="花蓮縣">花蓮縣</option>
                                <option value="台東縣">台東縣</option>
                                <option value="澎湖縣">澎湖縣</option>
                                <option value="金門縣">金門縣</option>
                                <option value="連江縣">連江縣</option>
                                <option value="其他">其他</option>
                            </select>
                        </label><br>
                        <label>備註：<textarea name="note" rows="2" style="resize:vertical;"></textarea></label><br>
                        <div class="order-form-btn-row">
                            <button type="submit" class="submit-order-btn">確認資訊送出</button>
                        </div>
                    </form>
                </div>
            `;
            document.body.appendChild(formOverlay);
            // 關閉按鈕
            formOverlay.querySelector('.close-cart').onclick = () => formOverlay.remove();
            // 點擊遮罩關閉
            formOverlay.onclick = e => { if (e.target === formOverlay) formOverlay.remove(); };
            // 防止點擊內容區關閉
            formOverlay.querySelector('.cart-content').onclick = e => e.stopPropagation();
            // 表單送出事件
            formOverlay.querySelector('.order-form').onsubmit = (e) => {
                e.preventDefault();
                // Email 格式驗證
                const emailVal = formOverlay.querySelector('input[name="email"]').value.trim();
                const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
                if (!emailPattern.test(emailVal)) {
                    alert('請輸入正確的 Email 格式');
                    return;
                }
                // 防止重複送出
                const submitBtn = formOverlay.querySelector('.submit-order-btn');
                submitBtn.disabled = true;
                submitBtn.textContent = '送出中...';
                formOverlay.querySelector('.order-form').style.pointerEvents = 'none';
                // 收集資料
                const formData = new FormData(e.target);
                const orderInfo = {
                    name: formData.get('name'),
                    phone: formData.get('phone'),
                    email: formData.get('email'),
                    address: formData.get('address'),
                    note: formData.get('note'),
                    cart: (JSON.parse(localStorage.getItem('cart')) || []).map(item => `${item.title} x${item.quantity}（參考價：NT$${item.price}）`).join('\n')
                };

                // 洽詢次數防護
                const email = orderInfo.email;
                const now = Date.now();
                let inquiryLimit = JSON.parse(localStorage.getItem('inquiryLimit') || '{}');
                if (!inquiryLimit[email]) inquiryLimit[email] = [];
                // 過濾24小時內紀錄
                inquiryLimit[email] = inquiryLimit[email].filter(ts => now - ts < 24*60*60*1000);
                if (inquiryLimit[email].length >= 2) {
                    alert('此 Email 24 小時內已洽詢超過 2 次，請稍後再試，或改用其他聯絡方式。');
                    submitBtn.disabled = false;
                    submitBtn.textContent = '確認資訊送出';
                    formOverlay.querySelector('.order-form').style.pointerEvents = '';
                    return;
                }
                // 記錄這次洽詢
                inquiryLimit[email].push(now);
                localStorage.setItem('inquiryLimit', JSON.stringify(inquiryLimit));

                // 送出訂單
                emailjs.send('service_lfsjrh9', 'template_q77py4d', orderInfo)
                    .then(function(response) {
                        formOverlay.innerHTML = `<div class='cart-content'><div class='cart-header'><h2>洽詢資訊已送出</h2></div><div style='padding:24px;text-align:center;'>感謝您，將有專人與您聯絡進行後續服務！日安</div></div>`;
                        // 清空購物車
                        localStorage.removeItem('cart');
                        window.cart.updateCartCount();
                        setTimeout(()=>formOverlay.remove(), 5000);
                    }, function(error) {
                        alert('訂單送出失敗，請稍後再試！');
                        console.error('Email failed:', error);
                        // 恢復按鈕
                        const submitBtn = formOverlay.querySelector('.submit-order-btn');
                        if(submitBtn) {
                            submitBtn.disabled = false;
                            submitBtn.textContent = '確認資訊送出';
                        }
                        formOverlay.querySelector('.order-form').style.pointerEvents = '';
                    });
            };
        };
        // 顯示購物車內容
        this.updateCartItems(cartOverlay);
    },
    // 更新購物車內容
    updateCartItems: function(cartOverlay) {
        const cartData = JSON.parse(localStorage.getItem('cart')) || [];
        const cartItems = cartOverlay.querySelector('.cart-items');
        const totalAmount = cartOverlay.querySelector('.total-amount');
        if (cartData.length === 0) {
            cartItems.innerHTML = '<div class="empty-cart-message">購物車是空的</div>';
            totalAmount.textContent = '0';
            return;
        }
        let total = 0;
        cartItems.innerHTML = cartData.map(item => {
            total += item.price * item.quantity;
            return `
                <div class="cart-item">
                    <img src="${item.src}" alt="${item.title}" class="cart-item-image">
                    <div class="cart-item-info">
                        <h3>${item.title}</h3>
                        <div class="cart-item-price">NT$ ${item.price}</div>
                        <div class="cart-item-quantity">
                            數量：${item.quantity}
                            <button class="delete-btn" data-src="${item.src}">刪除</button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        totalAmount.textContent = total;
        // 動態綁定刪除按鈕事件，刪除後更新商品列表而非重新開啟購物車
        cartOverlay.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const src = btn.dataset.src;
                this.removeItem(src);
                this.updateCartItems(cartOverlay);
            });
        });
    },
    // 設置購物車按鈕事件
    setupCartButton: function() {
        const cartButton = document.querySelector('.cart-btn');
        if (cartButton) {
            cartButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.openCart();
            });
        }
    },
    // 添加商品到購物車
    addItem: function(productSrc) {
        const cartData = JSON.parse(localStorage.getItem('cart')) || [];
        const product = window.images && window.images.find(img => img.src === productSrc);
        if (product) {
            const existingItem = cartData.find(item => item.src === productSrc);
            if (existingItem) {
                // 已經加入過，數量永遠為 1，不再重複加入
                return false;
            } else {
                cartData.push({
                    src: productSrc,
                    title: product.title,
                    price: product.price,
                    quantity: 1
                });
                localStorage.setItem('cart', JSON.stringify(cartData));
                this.updateCartCount();
                return true;
            }
        }
        return false;
    },
    // 更新購物車數量顯示
    updateCartCount: function() {
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            const cartData = JSON.parse(localStorage.getItem('cart')) || [];
            const totalItems = cartData.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
        }
    }
};

// 初始化購物車
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        window.cart.init();
    });
} else {
    window.cart.init();
}
