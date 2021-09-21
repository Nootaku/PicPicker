function createMessageBoxOptions(
  boxType, boxTitle, boxMessage, boxDetail, boxOptions
) {
  boxButtons = boxOptions || [];
  const messageBoxOptions = {
    type: boxType,
    buttons: boxButtons,
    defaultId: 0, // Index of the button that is selected by default
    title: boxTitle,
    message: boxMessage,
    detail: boxDetail,
    // by default the icon of the app is used for message boxes
    cancelId: 1, // Index of button pressed if "Esc" is pressed

  };

  return messageBoxOptions
}

exports.messageBoxOptions = createMessageBoxOptions;
