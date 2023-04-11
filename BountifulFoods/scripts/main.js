//Hamburger
// Store the selected elements that we are going to use.
const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");
const nav = document.querySelector("#nav");

// Add a simple arrow function that listens for the <li> hamburger button click event.
// When clicked, the <ul class="navigation">'s class list toggle'hambutton.addEventListener(
hambutton.addEventListener(
  "click",
  () => {
    mainnav.classList.toggle("responsive");
    hambutton.classList.toggle("responsive");
  },
  false //the last default element in listener
);

document.querySelector(
  "#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;
