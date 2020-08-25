const dropDownContainer = document.querySelector("header");
const showMoreButton = document.getElementById("close-submenu");

showMoreButton.addEventListener("click", (event) => {
  dropDownContainer.classList.toggle("hide-dropdown");
  event.stopPropagation();
});

document.querySelectorAll(".nav-menu h2").forEach((h2) => {
  h2.addEventListener("click", () => {
    dropDownContainer.classList.toggle("hide-dropdown");
  });
});
