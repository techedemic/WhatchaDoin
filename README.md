# WhatchaDoin

**Simple Time Tracker**

This is a very basic time tracker based on Dewald de Jongh's orignal Perl QT version, which unfortunately only worked on Linux.

This one should be cross platform

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.

First, download the appropriate version of [Electron](https://github.com/electron/electron/releases) for your operating system. At the time of this writing, the app works fine with 1.6.11.

## Windows

# First, download Electron

[Windows 64-Bit](https://github.com/electron/electron/releases/download/v1.6.11/electron-v1.6.11-win32-x64.zip)

# Next, extract
Extract Electron in the directory of your choice. For this example, we will use `D:\Electron`

After extracting the zip, navigate to `D:\Electron\resources` using the command prompt (`cmd`)

```dos
D:
cd D:\Electron\resources
```

Clone the repository into the App directory
```dos
git clone https://github.com/techedemic/WhatchaDoin.git App
```

You can now manually start the app by running `D:\Electron\electron.exe`

For [Linux 64-Bit](https://github.com/electron/electron/releases/download/v1.6.11/electron-v1.6.11-linux-x64.zip)

From your command line:

```bash
# Clone this repository
git clone https://github.com/techedemic/WhatchaDoin.git App
# Go into the repository
cd electron-quick-start
# Install dependencies
npm install
# Run the app
npm start
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.
