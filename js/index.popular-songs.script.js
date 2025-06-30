document.addEventListener('DOMContentLoaded', function () {
  const description = document.querySelector('.popular-songs__description');

  description.addEventListener('click', function () {
    if (description.textContent.includes('Explore our')) {
      description.innerHTML =
        'New hits <strong class="popular-songs__highlight">every Monday</strong>. Stay tuned!';
    } else {
      description.innerHTML =
        'Explore our <strong class="popular-songs__highlight">best songs</strong> of the week, from rap to jazz. Work, dance, and dream with us.';
    }
  });
});
