const KEYCODE_SPACE = 32;

const techButtons = document.querySelectorAll(".tech__btn");
const descriptions = document.querySelectorAll(".descriptions__item");

const cardSelectorsForModifiers = {
  "tech__btn--js": ".descriptions__item--js",
  "tech__btn--html": ".descriptions__item--html",
  "tech__btn--css": ".descriptions__item--css",
  "tech__btn--gulp": ".descriptions__item--gulp",
  "tech__btn--sass": ".descriptions__item--sass"
};

const removeActiveFromAllBtns = function () {
  techButtons.forEach(function (btn) {
    btn.classList.remove("tech__btn--active");
  });
};

const hideActiveDescriptionCards = function () {
  descriptions.forEach(function (description) {
    description.classList.remove("descriptions__item--active");
  });
};

techButtons.forEach(function (btn) {
  btn.addEventListener("click", function (evt) {
    evt.preventDefault();

    removeActiveFromAllBtns();
    btn.classList.add("tech__btn--active");

    const currentBtnModifierClassname = btn.classList[1];
    const fittingCardClassname = cardSelectorsForModifiers[currentBtnModifierClassname];
    const fittingCardElement = document.querySelector(fittingCardClassname);

    hideActiveDescriptionCards();
    fittingCardElement.classList.add("descriptions__item--active");
  });

  btn.addEventListener("keydown", function (evt) {
    if(evt.keyCode === KEYCODE_SPACE) {
      btn.click();
    }
  });
});

techButtons[1].click();
