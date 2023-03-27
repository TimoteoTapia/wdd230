const json = "scripts/data.json";

async function getDirectoryData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    displayDirectory(data.directory);
  } catch (error) {
    console.log(error);
  }
}
getDirectoryData(json);

var counter = 0;
const displayDirectory = (data) => {
  const test = data.filter((item) =>
    ["Gold", "Silver"].includes(item.membership)
  );
  // make the random selection
  const businesses = [];
  const random1 = getRandomInt(test.length);
  businesses[0] = test[random1];

  let random2 = getRandomInt(test.length);
  if (random2 != random1) {
    businesses[1] = test[random2];
  } else {
    while (random2 == random1) {
      random2 = getRandomInt(test.length);
    }
    businesses[1] = test[random2];
  }

  let random3 = getRandomInt(test.length);
  if (random3 != random2 && random3 != random1) {
    businesses[2] = test[random3];
  } else {
    while (random3 == random1 || random3 == random2) {
      random3 = getRandomInt(test.length);
    }
    businesses[2] = test[random3];
  }

  const cards = document.querySelector(".spotlights"); // select the output container element

  businesses.forEach((directory) => {
    counter++;
    // Create elements to add to the div.grid element
    let card = document.createElement("div");
    let name = document.createElement("h2");
    let portrait = document.createElement("img");
    let phone = document.createElement("p");
    let link = document.createElement("a");

    // Build the p content to show the business name
    name.textContent = directory.name;

    // Build the p content to show the phone
    phone.textContent = `Phone: ${directory.phone}`;

    // Build the p content to show the website url
    link.href = directory.website;
    link.target = "_blank";
    var link2 = document.createTextNode("Click here");
    link.appendChild(link2);

    if (counter == 1) {
      card.classList.add("delivery");
    } else if (counter == 2) {
      card.classList.add("fix");
    } else if (counter == 3) {
      card.classList.add("web");
    }

    // Build the image portrait by setting all the relevant attribute
    portrait.setAttribute("src", directory.image);
    portrait.setAttribute("alt", `Portait of ${directory.name}`);
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "70");
    portrait.setAttribute("height", "70");

    // Append the section(card) with the created elements
    card.appendChild(name);
    card.appendChild(portrait);
    card.appendChild(phone);
    card.appendChild(link);
    cards.appendChild(card);
  }); // end of forEach loop
}; // end of function expression

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
