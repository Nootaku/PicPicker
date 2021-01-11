const contextualMenu = [
  {label: 'Cut', role: 'cut'},
  {label: 'Copy', role: 'copy'},
  {label: 'Paste', role: 'paste'},
  {label: 'Select All', role: 'selectall'},
  {type: 'separator'},
  {
    label: 'Custom',
    click() {
      console.log('A custom action if needed')
    }
  },
]

exports.contextualMenu = contextualMenu;
