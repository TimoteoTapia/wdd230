// This is another way I can do it through then and catch
// fetch(url)
//   .then((response) => response.json())// I can't add any additional
//   .then((data) => {
//     console.log(data);
//     displayDirectory(data.directory);
//   })
//   .catch((err) => {
//     console.log("rejected", err);
//   });

// It is better do it by async and await
const url = "scripts/data.json";
async function getDirectoryData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayDirectory(data.directory);
  } catch (error) {
    console.log(error);
  }
}
getDirectoryData(url);

const displayDirectory = (data) => {
  const cards = document.querySelector("div.grid"); // select the output container element

  data.forEach((directory) => {
    // Create elements to add to the div.grid element
    let card = document.createElement("section");
    let portrait = document.createElement("img");
    let name = document.createElement("p");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let url = document.createElement("a");

    // Build the p content to show the business name
    name.textContent = directory.name;

    // Build the p content to show the business address
    address.textContent = directory.address;

    // Build the p content to show the phone
    phone.textContent = directory.phone;

    // Build the p content to show the website url
    url.textContent = directory.website;

    // Build the image portrait by setting all the relevant attribute
    portrait.setAttribute("src", directory.image);
    portrait.setAttribute("alt", `Portait of ${directory.name}`);
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "100");
    portrait.setAttribute("height", "100");

    // Build the link by setting all the relevant attribute
    url.setAttribute("href", directory.website);
    url.setAttribute("target", "_blank");

    // Append the section(card) with the created elements
    card.appendChild(portrait);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(url);

    cards.appendChild(card);
  }); // end of forEach loop
}; // end of function expression

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".grid");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
  // example using arrow function
  display.classList.add("grid");
  display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
}
