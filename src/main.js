// BURGER MENU - Open / Close

let menuBtn = document.querySelector('.header-burger-button');
let menu = document.querySelector('.backdrop-mobal');
let modalBtnClose = document.querySelector('.button-burger');
let modaBackground = document.querySelector('.background-burger');

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
  modaBackground.classList.toggle('active');
});
modalBtnClose.addEventListener('click', function () {
  modalBtnClose.classList.toggle('active');
  menu.classList.toggle('active');
  modaBackground.classList.toggle('active');
});