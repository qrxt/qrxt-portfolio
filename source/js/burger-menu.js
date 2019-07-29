const burgerMenuBtn = document.querySelector(".main-nav__menu-btn");
const siteList = document.querySelector(".site-list");

burgerMenuBtn.addEventListener("click", () => {
  if(siteList.classList.contains("site-list--opened")) {
    siteList.classList.remove("site-list--opened");
  } else {
    siteList.classList.add("site-list--opened");
  }
});
