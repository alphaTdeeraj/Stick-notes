const { app, BrowserWindow } = require("electron");
require("electron-reload")(__dirname);
function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 400,
    height: 600,
    maxWidth: 400,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // and load the index.html of the app.
  win.loadFile("./html/index.html");
}

app.whenReady().then(createWindow);
