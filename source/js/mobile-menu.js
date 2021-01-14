const menuToggle = document.querySelector('.main-navigation__toggle');
const menu = document.querySelector('.main-navigation__list');

menu.classList.add("hide");
menuToggle.classList.remove("hide");
menuToggle.classList.add("show");

menuToggle.addEventListener('change', function(){
  menu.classList.toggle("hide");
  menu.classList.toggle("show");
});
