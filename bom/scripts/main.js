const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  if (input.value !== "") {
    const listItem = document.createElement("li");
    const listBtn = document.createElement("button");

    listItem.innerHTML = input.value;
    listBtn.innerHTML = "❌";
    listBtn.setAttribute("ariaLabel", "Close");
    // listBtn.ariaLabel = "close" It is the same as above

    list.appendChild(listItem);
    listItem.appendChild(listBtn);

    listBtn.addEventListener("click", function () {
      list.removeChild(listItem);
    });

    input.focus();
    input.value = "";
  }
});
