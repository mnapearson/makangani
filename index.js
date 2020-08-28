const dropDownContainer = document.querySelector("header");
const showMoreButton = document.getElementById("close-submenu");
let timeLeft = 10800;

showMoreButton.addEventListener("click", (event) => {
  dropDownContainer.classList.toggle("hide-dropdown");
  event.stopPropagation();
});

document.querySelectorAll(".nav-menu h2").forEach((h2) => {
  h2.addEventListener("click", () => {
    dropDownContainer.classList.toggle("hide-dropdown");
  });

  var deadline = new Date("aug 28, 2020, 14:00:00").getTime();
  var x = setInterval(function () {
    var now = new Date().getTime();
    var t = deadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    if (t < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "NEW RELEASE!";
    }
  }, 1000);
});
