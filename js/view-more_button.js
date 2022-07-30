const contents = document.querySelectorAll(".content--visible");

document.addEventListener("click", ({ target }) => {
   if (!target.closest(".btn")) return;
   contents.forEach(content => (
      (target.textContent = ["Показать ещё", "Скрыть"][+content.classList.contains("content--hidden")]),
      content.classList.toggle("content--hidden")
   ))
});