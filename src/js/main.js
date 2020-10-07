const { app, ipcMain, BrowserWindow } = require("electron");
const { createWindow } = require("./utils");

require("electron-reload")(__dirname);

app.whenReady().then(() => {
  mainWindowID = createWindow("../html/index.html");
});

// event listeners

ipcMain.on("async-create-window", (event, args) => {
  createWindow(args, {
    height: 400,
  });
});

ipcMain.on("async-close-window", (event, args) => {
  try {
    const windowID = event.sender.browserWindowOptions.id;
    BrowserWindow.fromId(windowID).close();
  } catch (err) {
    console.log("could not close the window");
  }
});
