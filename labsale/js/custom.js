'use strict';

// Dropdown language menu
const container = document.querySelector('.dropdown');
const dropMenu = document.querySelector('.menu');
const dropItem = document.querySelector('.menu > li');
container.addEventListener('click', (e) => {
  dropMenu.classList.toggle('showMenu');
  dropItem.addEventListener('click', (e) => {
    container.innerHTML = dropItem.innerHTML;
    dropMenu.classList.remove('showMenu');
  });
});
// End Dropdown language menu