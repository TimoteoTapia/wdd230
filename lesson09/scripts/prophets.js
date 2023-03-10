const time = new Date();
const timeTwo = time.getTime(); // Milisegundos
console.log(timeTwo);
const displayProphets = (prophets) => {
  const cards = document.querySelector("div.cards"); // select the output container element

  prophets.forEach((prophet) => {
    // Create elements to add to the div.cards element
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let portrait = document.createElement("img");
    let birthdate = document.createElement("p");
    let birthplace = document.createElement("p");
    let children = document.createElement("p");
    let period = document.createElement("p");
    let death = document.createElement("p");
    let age = document.createElement("p");

    // Build the h2 content out to show the prophet's full name - finish the template string
    h2.textContent = `${prophet.name} ${prophet.lastname}`;

    // Build the p content to show the birthdate
    birthdate.textContent = `Date of birth: ${prophet.birthdate}`;

    // Build the p content to show the birthdate
    birthplace.textContent = `Place of birth: ${prophet.birthplace}`;
    children.textContent = `Children: ${prophet.numofchildren}`;
    period.textContent = `Years in Charge: ${prophet.length}`;
    if (prophet.death != null) {
      dateDeath = prophet.death;
    } else {
      dateDeath = "Alive";
    }
    death.textContent = `Death: ${dateDeath}`;
    age.textContent = `Age: ${GetAge(prophet.birthdate, prophet.death)}`;

    // Build the image portrait by setting all the relevant attribute
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute(
      "alt",
      `Portait of ${prophet.name} ${prophet.lastname}- ${prophet.order}`
    );
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");

    // Append the section(card) with the created elements
    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(birthdate);
    card.appendChild(children);
    card.appendChild(period);
    card.appendChild(death);
    card.appendChild(age);

    cards.appendChild(card);
  }); // end of forEach loop
}; // end of function expression

const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data.prophets); // note that we reference the prophet array of the data object given the structure of the json file
  displayProphets(data.prophets);
}

getProphetData();

const yearDate = (date) => {
  let dateStr = date; // "27 June 1844"
  let formatDate = new Date(dateStr); // Thu Jun 1844 00:00:00 GMT-0636 (Central Standard Time)
  dateNew = formatDate.getFullYear(); // 1844
  return dateNew;
};
const GetAge = (birthdate, deathDate) => {
  if (deathDate) {
    let dateOne = new Date(yearDate(deathDate)).getTime();
    let dateTwo = new Date(yearDate(birthdate)).getTime();
    return dateOne - dateTwo;
    // return (
    //   new Date(yearDate(deathDate)).getTime() -
    //   new Date(yearDate(birthdate)).getTime()
    // ); This is another option to get it
  } else {
    return new Date().getFullYear() - new Date(yearDate(birthdate)).getTime();
  }
};
