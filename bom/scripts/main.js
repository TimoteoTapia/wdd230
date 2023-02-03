const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

// if input.value != "";
button.addEventListener("click", () => {
  const listItem = document.createElement("li");
  const listBtn = document.createElement("button");

  listItem.innerHTML = input.value;
  listBtn.innerHTML = "❌";

  list.appendChild(listItem);
  listItem.appendChild(listBtn);

  listBtn.addEventListener("click", () => {
    list.removeChild(listItem);
  });

  input.focus();
  input.value = "";
});
