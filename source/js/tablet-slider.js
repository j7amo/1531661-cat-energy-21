const sliderItemBefore = slider.querySelector('.slider__item--before');
const sliderItemAfter = slider.querySelector('.slider__item--after');
const rangeSlider = slider.querySelector('.slider__range');
const beforeToggleTablet = slider.querySelector('.slider__legend-button--before-tablet');
const afterToggleTablet = slider.querySelector('.slider__legend-button--after-tablet');

function moveSlider() {
    sliderItemBefore.style.width = 100 - rangeSlider.value + '%';
    sliderItemAfter.style.width = rangeSlider.value + '%';
}

beforeToggleTablet.addEventListener('click', function() {
  rangeSlider.value = rangeSlider.min;
  moveSlider();
});

afterToggleTablet.addEventListener('click', function() {
  rangeSlider.value = rangeSlider.max;
  moveSlider();
});
