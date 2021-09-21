// MODULES FOR CONTROL OF APPLICATION
// -----------------------------------------------------------------------------

const electron = require("electron");
const BrowserWindow = electron.BrowserWindow; // renderer process
const app = electron.app; // event cycle of application
const Menu = electron.Menu;
const dialog = electron.dialog;

// imports for the contextual Menu
const MenuItem = electron.MenuItem;
const ipc = electron.ipcMain;

/*
Using deconstruction we could write the four lines above as:
import {app, BrowserWindow, Menu} from 'electron'
*/

const path = require("path");

const AppMenu = require("./templates/menu/menu");
const { fileMenu } = require("./templates/menu/file");
const { windowMenu } = require("./templates/menu/window");
const { aboutMenu } = require("./templates/menu/about");
const { contextualMenu } = require("./templates/menu/contextual");
const { openFileOptions } = require("./templates/dialog/options");

// CREATE BROWSER WINDOW
// -----------------------------------------------------------------------------
let mainWindow;
function createWindow() {
  // create the browser window
  mainWindow = new BrowserWindow({
    show: false,
    backgroundColor: "#23787D",
    title: "Clickado",
    icon: path.join(__dirname, "public", "images", "50x50.png"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile("index.html");

  // best practice: don't show the window directly
  mainWindow.once("ready-to-show", function () {
    mainWindow.show();
  });
}

// APP LISTENERS CONTROL WHEN THE WINDOW IS CREATED, DESTROYED AND WHEN APP QUITS
// -----------------------------------------------------------------------------
// Takes place after initialization, when ready to create browser windows.
app.on("ready", function () {
  // Special MacOS menu adaptations
  const template = new AppMenu([
    fileMenu(app),
    windowMenu,
    aboutMenu(app),
  ]).getTemplate();

  if (process.platform === "darwin") {
    const name = electron.app.getName();
    AppMenu.macOSMenu(template, name);
  }
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
  createWindow();
});

// Quit when all windows are closed. (except MacOS)
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// Re-create window when dock icon is clicked in MacOS
app.on("activate", function () {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Create Contextual Menu
const contextMenu = new Menu();
contextualMenu.forEach((item) => {
  contextMenu.append(new MenuItem(item));
});
ipc.on("show-context-menu", function (event) {
  const win = BrowserWindow.fromWebContents(event.sender);
  contextMenu.popup(win);
});

// Open File Dialog
app.on("openDir", (isInputDir) => {
  mainWindow.webContents.send("openDir", isInputDir);
});

ipc.on("openDir", (event, isInputDir) => {
  const filePath = dialog.showOpenDialogSync(mainWindow, openFileOptions);
  if (filePath !== undefined) {
    event.sender.send("selectedDir", isInputDir, filePath[0]);
  } else {
    event.sender.send("selectedDir", isInputDir, null);
  }
});

// Image Manipulation
app.on("prevPicture", () => {
  mainWindow.webContents.send("prevPicture");
});
app.on("nextPicture", () => {
  mainWindow.webContents.send("nextPicture");
});
app.on("rotate", (clockwise) => {
  mainWindow.webContents.send("rotate", clockwise);
});

// Execute and Cancel
app.on("execute", () => {
  mainWindow.webContents.send("execute");
});

ipc.on("close", (event) => {
  app.quit();
});
