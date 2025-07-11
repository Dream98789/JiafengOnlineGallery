// featured-carousel.js
// 從 window.images 隨機取五個作品，生成橫向輪播卡片，支援自動輪播、懸停暫停、拖曳加速/減速

(function(){
    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    function createCard(item) {
        return `
        <div class="carousel-card">
            <img src="${item.src}" alt="${item.title}" class="carousel-img">
            <div class="carousel-info">
                <div class="carousel-title">${item.title}</div>
                <div class="carousel-meta">${item.size || ''} ${item.year || ''}</div>
                <div class="carousel-desc">${item.description || ''}</div>
            </div>
        </div>`;
    }

    // 取得全部資料
    function getAll(arr) {
        return arr;
    }

    function getFeaturedData() {
        // 從 window.images 取資料
        if (window.images && window.images.length) {
            // 轉換欄位名稱
            return window.images.map(img => ({
                src: img.src,
                title: img.title || img.name || '',
                size: img.size || '',
                year: img.year || img.年份 || '',
                description: img.description || img.創作理念 || ''
            }));
        }
        return [];
    }

    function setupCarousel() {
        const track = document.getElementById('carousel-track');
        if (!track) return;
        const allData = getFeaturedData();
        const featured = getAll(allData);
        // 只渲染五個卡片，不複製
        track.innerHTML = featured.map((item, index) => {
            // 為每個作品創建唯一ID
            const itemId = `artwork-${index}`;
            // 添加 data-id 屬性用於滾動定位
            return `<div class="carousel-card" data-id="${itemId}" style="cursor: pointer;">
<img src="${item.src}" alt="${item.title}" class="carousel-img" loading="lazy">
<div class="carousel-info">
<div class="carousel-title">${item.title}</div>
<div class="carousel-meta">${item.year || ''}</div>
</div>
</div>`;
        }).join('');
        let cardWidth = 0;
        // 只抓一次卡片寬度
        const firstCard = track.querySelector('.carousel-card');
        if (firstCard) cardWidth = firstCard.offsetWidth + 22; // gap

        // 創建漣漪效果
        function createRipple(event) {
            const card = event.currentTarget;
            const rect = card.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${event.clientX - rect.left - size/2}px`;
            ripple.style.top = `${event.clientY - rect.top - size/2}px`;
            
            card.appendChild(ripple);
            
            // 動畫結束後移除漣漪元素
            ripple.addEventListener('animationend', () => {
                ripple.remove();
            });
        }

        // 創建音效
        const clickSound = new Audio('sounds/door-open.mp3');
        clickSound.volume = 0.4; // 設置音量為40%
        
        // 點擊卡片滾動到對應作品
        track.addEventListener('click', (e) => {
            const card = e.target.closest('.carousel-card');
            if (!card) return;
            
            // 播放點擊音效
            clickSound.currentTime = 0; // 重設音效
            clickSound.play().catch(e => console.log('無法播放音效:', e));
            
            // 添加點擊動畫效果
            card.classList.add('click-flip');
            
            // 創建漣漪效果
            createRipple(e);
            
            // 獲取目標作品ID
            const artworkId = card.getAttribute('data-id');
            
            // 延遲執行滾動，讓動畫完成
            setTimeout(() => {
                const targetElement = document.getElementById(artworkId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                    
                    // 添加高亮效果
                    targetElement.classList.add('highlighted');
                    setTimeout(() => {
                        targetElement.classList.remove('highlighted');
                    }, 2000);
                }
                
                // 動畫結束後移除動畫類
                setTimeout(() => {
                    card.classList.remove('click-flip');
                }, 200);
            }, 1000); // 延遲1秒執行滾動，確保動畫完成
        });

        // 輪播參數
        let speed = 0.7; // px/frame，讓滾動更細膩
        let playing = true;
        let rafId = null;
        let lastX = null;
        let velocity = 0;
        let isDragging = false;
        let pauseTimeout = null;
        // 計算總寬度
        function getMaxScroll() {
            return track.scrollWidth - track.clientWidth;
        }
        // 輪播動畫
        function animate() {
            if (playing || Math.abs(velocity) > 0.1) {
                track.scrollLeft += playing ? speed : velocity;
                velocity *= 0.93; // 慣性減速
                // 滾到最右邊就跳回頭
                if (track.scrollLeft >= getMaxScroll()) {
                    track.scrollLeft = 0;
                }
                if (track.scrollLeft < 0) {
                    track.scrollLeft = getMaxScroll();
                }
            }
            rafId = requestAnimationFrame(animate);
        }

        // 滑鼠懸停/觸控暫停
        track.addEventListener('mouseenter', () => playing = false);
        track.addEventListener('mouseleave', () => playing = true);
        track.addEventListener('mousedown', e => {
            isDragging = true;
            lastX = e.pageX;
            velocity = 0;
            playing = false;
        });
        window.addEventListener('mouseup', () => {
            isDragging = false;
            playing = true; // 立刻恢復自動滾動
        });
        track.addEventListener('mousemove', e => {
            if (isDragging) {
                const dx = e.pageX - lastX;
                track.scrollLeft -= dx;
                velocity = dx * 0.7;
                lastX = e.pageX;
            }
        });
        track.addEventListener('click', e => playing = false);
        // 移除觸控事件，讓手機直接用原生橫向滑動，不用 JS 處理拖曳


        // 移除自動輪播動畫，僅保留原生滑動
    // 不再自動啟動 animate

    // ====== 磁吸置中功能 ======
    const frame = document.querySelector('.carousel-frame');
    if (track && frame) {
        let scrollTimeout = null;
        track.addEventListener('scroll', () => {
            if (scrollTimeout) clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                // 取得所有卡片
                const cards = Array.from(track.querySelectorAll('.carousel-card'));
                if (!cards.length) return;
                // 計算中央位置（以 frame 為基準）
                const frameRect = frame.getBoundingClientRect();
                const frameCenter = frameRect.left + frameRect.width / 2;
                // 找出最接近中央的卡片
                let minDist = Infinity, targetCard = null;
                for (const card of cards) {
                    const cardRect = card.getBoundingClientRect();
                    const cardCenter = cardRect.left + cardRect.width / 2;
                    const dist = Math.abs(cardCenter - frameCenter);
                    if (dist < minDist) {
                        minDist = dist;
                        targetCard = card;
                    }
                }
                if (targetCard) {
                    // 平滑滾動讓卡片中心對齊框線中心
                    const cardRect = targetCard.getBoundingClientRect();
                    const cardCenter = cardRect.left + cardRect.width / 2;
                    const delta = cardCenter - frameCenter;
                    track.scrollBy({ left: delta, behavior: 'smooth' });
                }
            }, 90); // 停止滑動 90ms 後觸發
        });
    }
}

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupCarousel);
    } else {
        setupCarousel();
    }
})();
