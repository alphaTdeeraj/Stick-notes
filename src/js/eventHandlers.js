//modules import
const { ipcRenderer, BrowserWindow } = require("electron");
const addIcon = document.getElementById("add-icon");
const settingsIcon = document.getElementById("settings-icon");
const addButton = document.getElementById("add-item-button");
const newItemContainer = document.getElementById("new-item-container");

addIcon.addEventListener("click", () => {
  newItemContainer.classList.add("show");
});

settingsIcon.addEventListener("click", () => {
  console.log("settings icon was clicked");
});

//for new item added
addButton.addEventListener("click", (event) => {
  event.preventDefault();
  newItemContainer.classList.remove("show");
});
