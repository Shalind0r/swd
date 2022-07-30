let element = document.querySelectorAll('.arrow')
element.forEach(item => {
   item.addEventListener('click', (e) => {
      item.classList.toggle('rotate')
   })
})