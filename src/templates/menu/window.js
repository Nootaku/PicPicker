const windowMenu = {
  label: 'Window',
  role: 'window',
  submenu: [
    {
      label: 'Minimize',
      accelerator: 'CmdOrCtrl+M',
      role: 'minimize',
    },
    {
      label: 'Maximize',
      accelerator: 'F11',
      role: 'togglefullscreen',
    },
    {
      label: 'Toggle Dev Tools',
      accelerator: (function() {
        if (process.platform === 'darwin') {
          return 'Alt+Command+I'
        } else {
          return 'Ctrl+Shift+I'
        }
      })(),
      click: function(item, focusedWindow) {
        if (focusedWindow) {
          focusedWindow.toggleDevTools();
        }
      },
    },
    {
      label: 'Close',
      accelerator: 'CmdOrCtrl+Q',
      role: 'close',
    },
    // Added only on Mac OSX (see menu.js)
    {
      type: 'separator',
    },
    {
      label: 'Reopen Window',
      accelerator: 'CmdOrCrtl+Shift+T',
      enabled: false,
      key: 'reopenMenuItem',
      click: () => app.emit('activate'),
    },
  ],
}

exports.windowMenu = windowMenu;
