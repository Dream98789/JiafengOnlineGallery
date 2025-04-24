// 讓.artwork卡片在進入視窗時，圖片先淡入，然後文字再淡入
(function() {
  function onVisibilityChange(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // 只觸發一次
        observer.unobserve(entry.target);
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    var artworks = document.querySelectorAll('.artwork');
    var observer = new window.IntersectionObserver(onVisibilityChange, {
      threshold: 0.12
    });
    artworks.forEach(function(card) {
      observer.observe(card);
    });
  });
})();
