/*
A template has the following structure (see p. 77):
{
  label: 'Undo',                  // Visible name in the menu
  accelerator: 'CmdOrCtrl+Z',     // Optionnal keyboard shortcut of the action
  role: 'undo',                   // The on-click function launched when clicked
}

If none of the roles are ok for the purpose use:
{
  label: 'Generate Icon',
  click: doGenerateIcon,
}

If we need to make space between two items:
{
  type: 'separator',
}
*/

// IMPORTS:
// ----------------------------------------------------------------------------
const {macOSMenu} = require('./macOS');

class AppMenu {
  constructor(menus) {
    this.template = [];
    menus.forEach((item) => {
      this.template.push(item);
    });
  }

  getTemplate() {
    return this.template;
  }

  // Alter Menu for MacOSX
  macOSMenu(t, appName) {
    t.unshift(macOSMenu);
    this.template.forEach((item) => {
      if (item.label === "Window") {
        item.submenu.push(
          {
            type: 'separator',
          }
        )
        item.submenu.push(
          {
            label: 'Reopen Window',
            accelerator: 'CmdOrCrtl+Shift+T',
            enabled: false,
            key: 'reopenMenuItem',
            click: () => app.emit('activate'),
          }
        );
      }
    });
  }
}

module.exports = AppMenu;
