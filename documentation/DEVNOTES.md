# PicPicker Developer Guide

## Installation

This installation guide assumes that you have [`Node.js`](https://nodejs.org/en/download/) and [`npm`](https://docs.npmjs.com/) installed. Visit their respective sites to find the documentation on how to install them if it is not the case.

```bash
# Clone the project
git clone https://github.com/Nootaku/PicPicker.git

# Install the dependencies
npm install
```

## Run the app

```bash
npm start
```

## Build the app

Building the app for Linux and Window can be done on Linux. The app for MacOs can only be done on a Mac.

### Linux and Windows

```bash
# Install yarn and electron-builder
sudo npm install -g yarn
yarn add electron-builder --dev

# Install Wine
sudo dpkg --add-architecture i386
sudo apt update
sudo apt install wine64 wine32

# Run the builder
yarn run dist
```
