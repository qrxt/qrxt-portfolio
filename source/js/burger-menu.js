const ESCAPE_KEYCODE = 27;

const burgerMenuToggleButton = document.querySelector(".main-nav__menu-btn");
const siteList = document.querySelector(".site-list");

const closeBurgerMenu = function () {
  if (siteList.classList.contains("site-list--opened")) {
    siteList.classList.remove("site-list--opened");
  }
};

const onEscapeKeydown = function (evt) {
  if (evt.keyCode === ESCAPE_KEYCODE) {
    closeBurgerMenu();
    burgerMenuToggleButton.classList.toggle("burger-menu--opened");
  }
};

const toggleBurgerMenu = function () {
  siteList.classList.toggle("site-list--opened");
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
