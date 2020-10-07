const { app, ipcMain, BrowserWindow } = require("electron");
const { createWindow } = require("./utils");

require("electron-reload")(__dirname);

app.whenReady().then(() => {
  mainWindowID = createWindow("../html/index.html");
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
