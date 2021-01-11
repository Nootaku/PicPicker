const electron = require('electron');
const dialog = electron.dialog;
const {messageBoxOptions} = require('../messageBox/options');

function callAbout() {
  console.log('This will be the About Window.')
}

const aboutMenu = {
  label: 'About',
  role: 'help',
  submenu: [
    {
      label: 'About Clickado',
      click: function() {
        dialog.showMessageBox(
          null,
          messageBoxOptions(
            'none', // parent
            'ABOUT CLICKADO', // title
            "Clickado's PicPicker - Version 1.0.0", // header
            "This is a personal project of Maxime WATTEZ. Feel free to use and modify it according to the GNU General Public License.\n\nHow to use PicPicker:\n    - Select an input directory.\n    - Select an output directory.\n    - Use the left and right arrows to navigate through the folder's pictures.\n    - Use the up and down arrows to rotate the picture.\n    - Press space to copy the current picture to the output directory.",
            ['Ok']
          )
        );
      },
    },
  ],
}

exports.aboutMenu = aboutMenu;
