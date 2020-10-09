//modules import
const { ipcRenderer } = require("electron");
const path = require("path");
const fs = require("fs");
const { uuid } = require("uuidv4");
const { getFutureTime } = require("./utils");
const { generateTaskList, createTaskHTML } = require("./components/tasks");
const { isUndefined } = require("util");

//TIME VARIABLE
let referenceTime =
  JSON.parse(localStorage.getItem("referenceTime")) || new Date().getTime();

//offset in minutes
let offsetTimeMinutes = 30;

//DOM ELEMENTS
const addIcon = document.getElementById("add-icon");
const settingsIcon = document.getElementById("settings-icon");
const newItemForm = document.getElementById("new-item-form");
const newItemContainer = document.getElementById("new-item-container");
const newItem = document.querySelector("#new-item-container input");
const listContainer = document.querySelector(".list-container");

//TASKS LIST
let tasks = [];
const filePath = path.join(__dirname, "tasks.json");

//this function will load the data from the json file and load the tasks or []
fs.readFile(filePath, (err, data) => {
  if (err) {
    tasks = [];
  } else {
    tasks = JSON.parse(data);
  }
  tasks = tasks.filter((item) => {
    return item.endTime > new Date().getTime();
  });

  listContainer.innerHTML = generateTaskList(tasks);
  ipcRenderer.send("async-update-tasks", [true, tasks]);
});

//EVENT LISTENERS FOR THE ICON
addIcon.addEventListener("click", () => {
  newItemContainer.classList.add("show");
});

settingsIcon.addEventListener("click", () => {
  console.log("settings icon was clicked");
});

//FOR ADDING NEW ELEMENT TO THE LIST IF THE PASSES THE VALIDATIONS
newItemForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newTask = newItem.value;
  if (newTask) {
    newItem.value = "";
    //get the future time by adding the offsetMinutes to current time
    const newReferenceTime = getFutureTime(referenceTime, offsetTimeMinutes);
    const newTaskData = {
      description: newTask,
      id: uuid(),
      startTime: referenceTime,
      endTime: newReferenceTime,
    };
    listContainer.innerHTML += createTaskHTML(newTaskData);
    //changing the reference time to new time
    referenceTime = newReferenceTime;

    //add the new item to the tasks list
    tasks.push(newTaskData);

    //update the global task list
    ipcRenderer.send("async-update-tasks", [false, newTaskData]);
  }

  //remove the class show from the newItemContainer
  newItemContainer.classList.remove("show");
});

//pool for the expired tasks
function isTaskExpired() {
  if (tasks.length > 0) {
    const currentTask = tasks[0];
    if (currentTask.endTime < new Date().getTime()) {
      document.getElementById(currentTask.id).style.display = "none";
    }
  }
}

setInterval(isTaskExpired, 1000);
