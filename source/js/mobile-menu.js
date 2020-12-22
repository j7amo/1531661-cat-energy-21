let menuToggle = document.querySelector('.main-navigation__toggle');
let menu = document.querySelector('.main-navigation__list');

menu.classList.add("hide");
menuToggle.classList.remove("hide");
menuToggle.classList.add("show");

menuToggle.addEventListener('click', function(){
  menu.classList.toggle("hide");
  menu.classList.toggle("show");
});
