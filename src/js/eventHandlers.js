//modules import
const { ipcRenderer, BrowserWindow } = require("electron");
let addIcon = document.getElementById("add-icon");
let settingsIcon = document.getElementById("settings-icon");
let closeIcon = document.getElementById("close-icon");

addIcon.addEventListener("click", () => {
 
});

settingsIcon.addEventListener("click", () => {
  console.log("settings icon was clicked");
});

closeIcon.addEventListener("click", () => {
  ipcRenderer.send("async-close-window");
});
