const macOSMenu = () => {
  return {
    label: appName,
    submenu: [
      {
        label: 'About ${appName}',
        role: 'about',
      },
      {
        type: 'separator',
      },
      {
        label: 'Preferences',
        accelerator: 'Command+,',
        click: appPrefs,
      },
      {
        type: 'separator',
      },
      {
        label: 'Services',
        role: 'services',
        submenu: [],
      },
      {
        type: 'separator',
      },
      {
        label: 'Hide ${appName}',
        accelerator: 'Command+H',
        role: 'hide',
      },
      {
        label: 'Hide Others',
        accelerator: 'Command+Alt+H',
        role: 'hideothers',
      },
      {
        label: 'Show All',
        role: 'unhide',
      },
      {
        type: 'separator',
      },
      {
        label: 'Quit ${appName}',
        accelerator: 'Command+Q',
        click: () => app.quit(),
      }
    ]
  }
}

exports.macOSMenu = macOSMenu;
