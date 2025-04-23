// 讓「作品介紹」按鈕跳轉到精選作品上方多留 100px

document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.btn-main[href="#featured-artwork-carousel"]');
    if (!btn) return;
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.getElementById('featured-artwork-carousel');
        if (!target) return;
        const rect = target.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        // 跳轉到區塊上方多留 100px
        window.scrollTo({
            top: rect.top + scrollTop - 120,
            behavior: 'smooth'
        });
    });
});
