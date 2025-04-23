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
        track.innerHTML = featured.map(item => {
            // lazyload 圖片
            return `<div class="carousel-card">
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
            playing = false;
            // 慣性繼續滑動
            setTimeout(() => playing = true, 1800);
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
        // 觸控事件
        track.addEventListener('touchstart', e => {
            isDragging = true;
            lastX = e.touches[0].pageX;
            velocity = 0;
            playing = false;
        });
        track.addEventListener('touchend', () => {
            isDragging = false;
            playing = false;
            setTimeout(() => playing = true, 1800);
        });
        track.addEventListener('touchmove', e => {
            if (isDragging) {
                const dx = e.touches[0].pageX - lastX;
                track.scrollLeft -= dx;
                velocity = dx * 0.7;
                lastX = e.touches[0].pageX;
            }
        });

        // 只在頁面可見時啟動動畫
        let pageVisible = true;
        document.addEventListener('visibilitychange', () => {
            pageVisible = !document.hidden;
        });
        function animateIfVisible() {
            if (pageVisible) animate();
            else rafId = requestAnimationFrame(animateIfVisible);
        }
        animateIfVisible();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupCarousel);
    } else {
        setupCarousel();
    }
})();
