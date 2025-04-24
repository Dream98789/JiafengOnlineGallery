// 打字機效果 for .about h2
window.addEventListener('DOMContentLoaded', function() {
  var el = document.querySelector('.about h2');
  if (!el) return;
  var text = el.getAttribute('data-typing') || el.textContent;
  el.textContent = '';
  el.classList.add('typing-effect');
  var i = 0;
  function type() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(type, 90);
    }
  }
  type();
});
