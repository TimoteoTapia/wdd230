//Announcement on Mondays and Tuesdays
const announcement = document.querySelector("#banner");
const today = new Date();
if (today.getDay() == 1 || today.getDay() == 2) {
  announcement.style.display = "block";
}

const closeBanner = document.getElementById("close_banner");
closeBanner.addEventListener("click", () => {
  closeBanner.parentNode.parentNode.remove();
});

// document.getElementById("closeBanner").onclick = function () {
//   this.parentNode.parentNode.remove();
// };
