let sliderItemBefore = document.querySelector('.slider__item--before');
let sliderItemAfter = document.querySelector('.slider__item--after');
let rangeSlider = document.querySelector('.slider__range');
let beforeToggleTablet = document.querySelector('.slider__legend-button--before-tablet');
let afterToggleTablet = document.querySelector('.slider__legend-button--after-tablet');

function moveSlider() {
    sliderItemBefore.style.width = 100 - rangeSlider.value + "%";
    sliderItemAfter.style.width = rangeSlider.value + "%";
}

beforeToggleTablet.addEventListener('click', function() {
  rangeSlider.value = rangeSlider.min;
  moveSlider();
});

afterToggleTablet.addEventListener('click', function() {
  rangeSlider.value = rangeSlider.max;
  moveSlider();
});
