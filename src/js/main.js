const { app, ipcMain } = require("electron");
const fs = require("fs");
const path = require("path");
const env = process.env.NODE_ENV || "development";
const { createWindow } = require("./utils");

let tasksList = [];
let mainWindow;

// If development environment
if (env === "development") {
  try {
    require("electron-reloader")(module, {
      debug: true,
      watchRenderer: true,
    });
  } catch (_) {
    console.log("Error");
  }
}

app.whenReady().then(() => {
  mainWindow = createWindow("../html/index.html", {
    removeMenu: true,
  });
  mainWindow.on("close", () => {
    if (tasksList) {
      fs.writeFileSync(
        path.join(__dirname, "tasks.json"),
        JSON.stringify(tasksList)
      );
    }
  });
});

// MAIN   PROCESS EVENT HANDLERS

ipcMain.on("async-update-tasks", (event, args) => {
  if (args[0]) {
    tasksList = args[1] || [];
  } else {
    tasksList.push(args[1]);
  }
});
