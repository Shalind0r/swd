const CLASS_LIST = {
   MODAL: 'modal',
   MODAL_ACTIVE: 'modal--active',
   TRIGGER_OPEN: 'modal--open',
   TRIGGER_CLOSE: 'modal--close'
};

document.addEventListener('click', (event) => {
   //open
   if (event.target.closest(`.${CLASS_LIST.TRIGGER_OPEN}`)) {
      console.log('open');
      event.preventDefault();

      const target = event.target.closest(`.${CLASS_LIST.TRIGGER_OPEN}`);
      const modalId = target.getAttribute('href').replace('#', '');
      const modal = document.getElementById(modalId);

      document.body.style.overflow = 'hidden';

      modal.classList.add(CLASS_LIST.MODAL_ACTIVE);
   }
   //close
   if (
      event.target.closest(`.${CLASS_LIST.TRIGGER_CLOSE}`) ||
      event.target.classList.contains(CLASS_LIST.MODAL_ACTIVE)
   ) {
      console.log('close');
      event.preventDefault();
      const modal = event.target.closest(`.${CLASS_LIST.MODAL}`);
      modal.classList.remove(CLASS_LIST.MODAL_ACTIVE);
      document.body.style.overflow = '';
   }

});

