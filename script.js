var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var item = document.getElementById("test");
var del = document.getElementsByClassName("delete");
for (var i = 0; i < del.length; i++) {
  del[i].addEventListener("click", deletListElement);
}

function removeParent(evt) {
  evt.target.removeEventListener("click", removeParent, false);
  evt.target.parentNode.remove();
}

function inputlength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  var deleteButton = document.createElement("Button");
  deleteButton.appendChild(document.createTextNode("Delete"));
  deleteButton.className = "delete";
  deleteButton.onclick = removeParent;
  li.appendChild(deleteButton);
  ul.appendChild(li);
}
function addListAfterClick() {
  if (inputlength() > 0) {
    createListElement();
  }
}
function addListAfterKeypress(event) {
  if (inputlength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}
function markAsDone(i) {
  if (i.target.tagName === "LI") {
    i.target.classList.toggle("done");
  }
}
function deletListElement() {
  this.parentElement.remove();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", markAsDone);

// Using the Shopping List files from the previous videos update the shopping list app to do the following:

// 1. If you click on the list item, it toggles the .done  class on and off.

// 2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.

// 3. BONUS: When adding a new list item, it automatically adds the delete button next to it (hint: be sure to check if new items are clickable too!)

// Good Luck
