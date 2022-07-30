document.querySelectorAll('.tabs-triggers__item').forEach((item) =>
   item.addEventListener('click', function (e) {
      e.preventDefault();
      const id = e.target.getAttribute('href').replace('#', '');


      document.querySelectorAll('.tabs-triggers__item').forEach(
         (child) => child.classList.remove('tabs-triggers-item--active')

      );
      document.querySelectorAll('.tabs-content__item').forEach(
         (child) => child.classList.remove('tabs-content-item--active')

      );

      item.classList.add('tabs-triggers-item--active');
      document.getElementById(id).classList.add('tabs-content-item--active');
   })
);
document.querySelector('.tabs-triggers__item').click();