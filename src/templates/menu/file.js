/*
For communication between the Menu and the front-end, we need to create an event in 'main.js'.
To do so, we need 'app' (the application object) to be called and 'emit' an event. This is why we had to change the 'fileMenu' object to being a function taking one argument: app
*/

const fileMenu = (app) => {
  return {
    label: 'Picture',
    role: 'help',
    submenu: [
      {
        label: 'Previous',
        accelerator: 'Left',
        click: () => app.emit('prevPicture'),
      },
      {
        label: 'Next',
        accelerator: 'Right',
        click: () => app.emit('nextPicture'),
      },
      {
        label: 'Rotate Clockwise',
        accelerator: 'Up',
        click: () => app.emit('rotate', true),
      },
      {
        label: 'Rotate Couner-clockwise',
        accelerator: 'Down',
        click: () => app.emit('rotate', false),
      },
      {
        label: 'Send Copy',
        accelerator: 'Space',
        click: () => app.emit('execute'),
      },
      {
        type: 'separator',
      },
      {
        label: 'Select Input Directory',
        accelerator: 'CmdOrCtrl+I',
        click: () => app.emit('openDir', true),
      },
      {
        label: 'Select Output Directory',
        accelerator: 'CmdOrCtrl+O',
        click: () => app.emit('openDir', false),
      },
    ],
  }
}

exports.fileMenu = fileMenu;
