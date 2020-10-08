const { app, ipcMain, BrowserWindow } = require("electron");
const env = process.env.NODE_ENV || "development";
const { createWindow } = require("./utils");

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
  createWindow("../html/index.html", {
    removeMenu: true,
  });
});

// MAIN   PROCESS EVENT HANDLERS

//FOR CLOSING THE WINDOW
ipcMain.on("async-close-window", (event) => {
  try {
    const windowID = event.sender.browserWindowOptions.id;
    BrowserWindow.fromId(windowID).close();
  } catch (err) {
    console.log("could not close the window");
  }
});
