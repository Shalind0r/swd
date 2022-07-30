function onEntry(entry) {
   entry.forEach(change => {
      if (change.isIntersecting) {
         change.target.classList.add('active');
      } else {
         change.target.classList.remove('active');
      }
   });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.anim-items');

for (let elm of elements) {
   observer.observe(elm);
}