const slider = document.querySelector('.slider');
const hiddenCheckbox = slider.querySelector('.slider__toggle');
const itemBefore = slider.querySelector('.slider__item--before');
const itemAfter = slider.querySelector('.slider__item--after');
const beforeToggle = slider.querySelector('.slider__legend-button--before-mobile');
const afterToggle = slider.querySelector('.slider__legend-button--after-mobile');
const beforeAfterToggle = slider.querySelector('.slider__track');

const showItemBefore = function () {
  hiddenCheckbox.checked = true;
  itemAfter.classList.remove("shown");
  itemAfter.classList.add("hidden");
  itemBefore.classList.remove("hidden");
  itemBefore.classList.add("shown");
};

const showItemAfter = function () {
  hiddenCheckbox.checked = false;
  itemBefore.classList.remove("shown");
  itemBefore.classList.add("hidden");
  itemAfter.classList.remove("hidden");
  itemAfter.classList.add("shown");
};

hiddenCheckbox.addEventListener('change', function() {
  if (hiddenCheckbox.checked) {
    itemAfter.classList.remove("shown");
    itemAfter.classList.add("hidden");
    itemBefore.classList.remove("hidden");
    itemBefore.classList.add("shown");
  } else {
    itemBefore.classList.remove("shown");
    itemBefore.classList.add("hidden");
    itemAfter.classList.remove("hidden");
    itemAfter.classList.add("shown");
  }
});

beforeToggle.addEventListener('click', function() {
  showItemBefore();
});

afterToggle.addEventListener('click', function() {
  showItemAfter()
});

beforeAfterToggle.addEventListener('click', function() {
  if (hiddenCheckbox.checked) {
    showItemAfter();
  } else {
    showItemBefore();
  }
});
