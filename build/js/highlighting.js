const HIGHLIGHT_ANIMATION_DURATION = 1000;

const siteListItemLinks = document.querySelectorAll(".site-list__link");

if (siteListItemLinks) {
  siteListItemLinks.forEach(function (siteListLink) {
    const currentSectionLink = siteListLink.getAttribute("href");
    const currentSectionElement = document.querySelector(currentSectionLink);

    siteListLink.addEventListener("click", function () {
      currentSectionElement.classList.add("highlighted");

      setTimeout(function () {
        currentSectionElement.classList.remove("highlighted");
      }, HIGHLIGHT_ANIMATION_DURATION);
    });
  });
}
