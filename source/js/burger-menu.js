const burgerMenuBtn = document.querySelector(".main-nav__menu-btn");
const siteList = document.querySelector(".site-list");

burgerMenuBtn.addEventListener("click", function () {
  siteList.classList.toggle("site-list--opened");
  burgerMenuBtn.classList.toggle("burger-menu--opened");
});
