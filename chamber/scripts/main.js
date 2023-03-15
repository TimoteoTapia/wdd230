// Store the selected elements that we are going to use.
const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");
const nav = document.querySelector("#nav");

// Add a simple arrow function that listens for the <li> hamburger button click event.
// When clicked, the <ul class="navigation">'s class list toggle'
hambutton.addEventListener(
  "click",
  () => {
    mainnav.classList.toggle("responsive");
    nav.classList.toggle("responsive");
  },
  false //the last default element in listener
);

// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
  dateStyle: "full",
}).format(now);
// long, medium, short options ... try them

// datefield.innerHTML = `<em>${fulldate}</em>`;
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

// Select the HTML element to manipulate
// const date1 = document.querySelector("#date1");
const date2 = document.querySelector("#date2");
// Try to complete the method with options
try {
  const year = {
    year: "numeric",
  };
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  // date1.innerHTML = `<span class="highlight">${new Date().toLocaleDateString(
  //   "en-US",
  //   options
  // )}</span>`;
  date2.innerHTML = ` © ${new Date().toLocaleDateString(
    "en-US",
    year
  )} Business City Chamber</span>`;
} catch (e) {
  console.log("Error with code or your browser does not support Locale");
}

document.querySelector(
  "#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;
