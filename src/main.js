//electron namespaces
const { app, BrowserWindow } = require("electron");

//function to create window and return the object

/*

:param width : width of the window
:type width : integer  || 400

:param height : height of the window
:type height : integer  || 800



:param title : title of the window 
:type title : "string" || new_window

return  BrowserWindow || undefined 
*/
function createWindow(
  url = undefined,
  width = 800,
  height = 400,
  title = "new_window"
) {
  let win;
  win = new BrowserWindow({
    width,
    height,
    title,
  });
  try {
    win.BrowserWindow(url);
    return win;
  } catch (err) {
    console.error("could not create a window, May be the invalid URL");
  }
  return undefined;
}
