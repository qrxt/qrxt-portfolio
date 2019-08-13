const ESCAPE_KEYCODE = 27;

const burgerMenuToggleButton = document.querySelector(".main-nav__menu-btn");
const siteList = document.querySelector(".site-list");
const burgerMenuToggleButtons = document.querySelectorAll(".site-list__link");
const overlay = document.querySelector(".overlay");

const closeBurgerMenu = function () {
  if (siteList.classList.contains("site-list--opened")) {
    siteList.classList.remove("site-list--opened");
  }
  overlay.classList.remove("overlay--show");
  burgerMenuToggleButton.classList.remove("burger-menu--opened");
};

const onEscapeKeydown = function (evt) {
  if (evt.keyCode === ESCAPE_KEYCODE) {
    closeBurgerMenu();
    burgerMenuToggleButton.classList.remove("burger-menu--opened");
  }
};

const onOverlayClick = function () {
  closeBurgerMenu();
  overlay.classList.remove("overlay--show");
  overlay.removeEventListener("click", onOverlayClick);
  burgerMenuToggleButton.classList.remove("burger-menu--opened");
};

const toggleOverlay = function () {
  overlay.classList.toggle("overlay--show");
  if (overlay.classList.contains("overlay--show")) {
    overlay.addEventListener("click", onOverlayClick);
  }
};

const toggleBurgerMenu = function () {
  siteList.classList.toggle("site-list--opened");
  toggleOverlay();
  burgerMenuToggleButton.classList.toggle("burger-menu--opened");

  if (siteList.classList.contains("site-list--opened")) {
    document.addEventListener("keydown", onEscapeKeydown);
    burgerMenuToggleButton.setAttribute("aria-label", "Закрыть главное меню");
  } else {
    document.removeEventListener("keydown", onEscapeKeydown);
    burgerMenuToggleButton.setAttribute("aria-label", "Открыть главное меню");
  }
};

burgerMenuToggleButton.addEventListener("click", function () {
  toggleBurgerMenu();
});

burgerMenuToggleButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    closeBurgerMenu();
  });
});
