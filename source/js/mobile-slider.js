let hiddenCheckbox = document.querySelector('.slider__toggle');
let beforeToggle = document.querySelector('.slider__legend-button--before-mobile');
let afterToggle = document.querySelector('.slider__legend-button--after-mobile');
let beforeAfterToggle = document.querySelector('.slider__track');
let itemBefore = document.querySelector('.slider__item--before');
let itemAfter = document.querySelector('.slider__item--after');

let showItemBefore = function () {
  hiddenCheckbox.checked = true;
  itemAfter.classList.remove("shown");
  itemAfter.classList.add("hidden");
  itemBefore.classList.remove("hidden");
  itemBefore.classList.add("shown");
};

let showItemAfter = function () {
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
