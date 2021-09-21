const openFileProperties = {
  'openFile': false, // does not stack with 'openDirectory'
  'openDirectory': true, // does not stack with 'openFile'
  'multiSelections': false,
  'createDirectory': false,
  'showHiddenFiles': false,
  'promptToCreate': false
};

let openFileOptions = {
  title: 'Select a file',
  properties: [],
  defaultPath: process.env.HOME,
  buttonLabel: 'Select',
  filters: []
};

for (let [key, value] of Object.entries(openFileProperties)) {
  if (value === true) {
    openFileOptions.properties.push(key);
  }
}

exports.openFileOptions = openFileOptions;
