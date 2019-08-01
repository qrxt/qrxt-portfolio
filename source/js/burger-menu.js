const burgerMenuToggleButton = document.querySelector(".main-nav__menu-btn");
const siteList = document.querySelector(".site-list");

const burgerMenuButtons = document.querySelectorAll(".site-list__link");

const toggleBurgerMenu = function () {
  siteList.classList.toggle("site-list--opened");
  burgerMenuToggleButton.classList.toggle("burger-menu--opened");

  if(siteList.classList.contains("site-list--opened")) {
    burgerMenuToggleButton.setAttribute("aria-label", "Закрыть главное меню");
  } else {
    burgerMenuToggleButton.setAttribute("aria-label", "Открыть главное меню");
  }
};

burgerMenuToggleButton.addEventListener("click", function () {
  toggleBurgerMenu();
});

burgerMenuButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    toggleBurgerMenu();
  });
});
