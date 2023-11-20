const dropdownButtons = document.querySelectorAll('.drp__btn');
const subMenu = document.querySelectorAll('.mobile__submenu');
const imagesDropdownBtns = document.querySelectorAll('#img__drp');

dropdownButtons.forEach(dropdownButton => {
   dropdownButton.addEventListener('click', e => {
      const menu = e.currentTarget.dataset.dropdownBtnId;
      subMenu.forEach(e => {
         let activeSubMenu = document.querySelector(`[data-dropdown-id=${menu}]`);
         if (activeSubMenu.classList.contains('close')) {
            activeSubMenu.classList.remove('close')
         } else {
            activeSubMenu.classList.add('close')
         }
      });
      imagesDropdownBtns.forEach(imagesDropdownBtn => {
         let activeimagesDropdown = document.querySelector(`[data-dropdown-img-id=${menu}]`);
         if (!activeimagesDropdown.classList.contains('transform')) {
            activeimagesDropdown.classList.add('transform')
         } else { activeimagesDropdown.classList.remove('transform') }
      })
   });

});



const iframe = document.getElementById('iframe');
const previewImage = document.getElementById('previewImage');

iframe.onerror = (e) => {
   iframe.style.display = 'none';
   previewImage.style.display = 'block';
};
