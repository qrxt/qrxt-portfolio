const TOP_OF_PAGE = 0;
const Y_POSITION_TO_SHOW = 500;

const backToTopBtn = document.querySelector(".back-to-top");

const getOffsetFromTop = function () {
  return document.documentElement.scrollTop;
};

const isShown = function () {
  return backToTopBtn.classList.contains("back-to-top--show");
};

window.addEventListener("scroll", function () {
  if (getOffsetFromTop() >= Y_POSITION_TO_SHOW && !isShown()) {
    backToTopBtn.classList.add("back-to-top--show");
  }
  if (getOffsetFromTop() < Y_POSITION_TO_SHOW) {
    backToTopBtn.classList.remove("back-to-top--show");
  }
});

backToTopBtn.addEventListener("click", function () {
  document.documentElement.scrollTop = TOP_OF_PAGE;
});
