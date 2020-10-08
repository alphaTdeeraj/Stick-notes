const { BrowserWindow } = require("electron");

let x = 200;
let id = 1;

//this function will create new  browser window
function createWindow(fileName, config) {
  const defaultSettings = {
    width: 400,
    height: 600,
    center: true,
    id: id,
    webPreferences: {
      nodeIntegration: true,
    },
  };
  let settings = Object.assign({}, defaultSettings, config);

  let win = new BrowserWindow(settings);
  id++;
  // and load the index.html of the app.
  win.loadFile(fileName);
  //remove the menu bar
  if (config.removeMenu) {
    win.removeMenu();
  }
  id++;
}

module.exports = {
  createWindow,
};
