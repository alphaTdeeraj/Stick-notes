const { BrowserWindow } = require("electron");

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
  win.openDevTools();
  //remove the menu bar
  if (config.removeMenu) {
    win.removeMenu();
  }
  id++;
  return win;
}

//this function will return the new time with the offset
function getFutureTime(actualTime = new Date().getTime(), offsetMinutes) {
  try {
    let futureTime = actualTime + 60000 * offsetMinutes;
    return futureTime;
  } catch (err) {
    return undefined;
  }
}


module.exports = {
  createWindow,
  getFutureTime,
};
