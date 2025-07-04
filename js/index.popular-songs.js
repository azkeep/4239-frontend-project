document.addEventListener('DOMContentLoaded', function () {
  const description = document.querySelector('.popular-songs__description');

  function fadeText(element, newHtml) {
    element.style.opacity = 0;
    setTimeout(() => {
      element.innerHTML = newHtml;
      element.style.opacity = 1;
      makeHighlightClickable(); 
    }, 300);
  }

  function makeHighlightClickable() {
    const highlight = document.querySelector('.popular-songs__highlight');
    if (highlight) {
      highlight.style.cursor = 'pointer';
      highlight.addEventListener('click', (e) => {
        e.stopPropagation(); 
        alert('Opening best songs playlist!');
      });
    }
  }

  // ⬇️ Повертаємо відновлення з localStorage
  const saved = localStorage.getItem('popularSongsText');
  if (saved) {
    description.innerHTML = saved;
  }

  makeHighlightClickable();

  description.addEventListener('click', function () {
    const isDefault = description.textContent.includes('Explore our');
    const newHtml = isDefault
      ? 'New hits <strong class="popular-songs__highlight">every Monday</strong>. Stay tuned!'
      : 'Explore our <strong class="popular-songs__highlight">best songs</strong> of the week, from rap to jazz. Work, dance, and dream with us.';

    fadeText(description, newHtml);
    localStorage.setItem('popularSongsText', newHtml);
  });

  let isAlt = false;
  setInterval(() => {
    const newHtml = isAlt
      ? 'Explore our <strong class="popular-songs__highlight">best songs</strong> of the week, from rap to jazz. Work, dance, and dream with us.'
      : 'New hits <strong class="popular-songs__highlight">every Monday</strong>. Stay tuned!';
    fadeText(description, newHtml);
    localStorage.setItem('popularSongsText', newHtml);
    isAlt = !isAlt;
  }, 10000);
});
