let toggle = document.querySelector('.slider__toggle');
let itemBefore = document.querySelector('.slider__item--before');
let itemAfter = document.querySelector('.slider__item--after');

toggle.addEventListener('change', function() {
  if (this.checked) {
    itemBefore.classList.remove("shown");
    itemBefore.classList.add("hidden");
    itemAfter.classList.remove("hidden");
    itemAfter.classList.add("shown");
  } else {
    itemAfter.classList.remove("shown");
    itemAfter.classList.add("hidden");
    itemBefore.classList.remove("hidden");
    itemBefore.classList.add("shown");
  }
});
