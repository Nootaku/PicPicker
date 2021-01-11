# PicPicker (Version 1.0.0)

## What is PickPicker ?
*PicPicker* is a simple application that allows the user to copy pictures from one directory to another. This removes the hassle of copy-pasting pictures individually when sorting holiday pictures for an album for example.
All in all, it is simply an image viewer with a button to copy the picture on display to the wished directory.

## How does it work ?
When launching *PicPicker* go to the bottom left corner of the application and select your source and destination directories. Upon selection of the source directory, the first picture of the directory should get loaded onto the viewer.

Once the directories have been selected, you can navigate the pictures by clicking on the ***arrows*** located on the left and right side of the image or by pressing the ***Left or Right key*** on your keyboard.

Once you found a picture you would like to save, click the ***Copy*** button to instantly copy the picture file to the selected destination directory.

In case the picture is not oriented correctly, you can press the ***Up or Down key*** to rotate the picture 90° clockwise or counter-clockwise respectively.

## Limitations
This program is still a work in progress. Even thought this first version is perfectly functional, some visual bugs are possible, including:
- See-through pictures on Windows
- Once rotated pictures may lose their ratio
- When the window is maximized or minimized, the buttons might not be centered anymore

## For Developers
Feel free to use my code and to add / change whatever you want. If you create a new release, please include me in the loop so I can see what has been done and add it to the original if I like it.

## Next objectives
1. resolve the Limitations
2. add keyboard shortcuts:
  - spacebar = Copy
  - MacOS specific "power-user" shortcuts (<cmd+q> for example)
3. webapp and API

## In process
Change frontend framework to Electron.
