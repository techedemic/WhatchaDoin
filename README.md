# WhatchaDoin

**Simple Time Tracker**

This is a very basic time tracker based on Dewald de Jongh's orignal Perl QT version, which unfortunately only worked on Linux.

This one should be cross platform

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.

You will also need [Electron](https://github.com/electron/electron/releases). This is a NodeJS framework that allows you to write cross platform applications using HTML, CSS and JavaScript.

## Windows

#### First, download Electron

[Windows 64-Bit](https://github.com/electron/electron/releases/download/v1.6.11/electron-v1.6.11-win32-x64.zip)

#### Next, extract
Extract Electron in the directory of your choice. For this example, we will use `D:\Electron`

After extracting the zip, navigate to `D:\Electron\resources` using the command prompt (`cmd`)

```dos
C:\Users\User\> D:
D:\> cd D:\Electron\resources
```

Clone the repository into the App sub-directory
```dos
git clone https://github.com/techedemic/WhatchaDoin.git App
```

You can now manually start the app by running `D:\Electron\electron.exe`

The file containing the time entries will be `D:\Electron\output.csv`

If it doesn't exist at first, the app will create it.

Obviously, you want this app to open up regularly, so you can use something like the Windows Task Scheduler to schedule recurring tasks and make the app fire every, let's say, 30 minutes or so.


## Linux

#### First, download Electron

For [Linux 64-Bit](https://github.com/electron/electron/releases/download/v1.6.11/electron-v1.6.11-linux-x64.zip)

#### Unzip to directory of your choice.
We will use `/home/user/Electron` for this example
From your command line:

```bash
# Go to the home directory
user@computer:/ $ cd /home/user
# Get Electron
user@computer:~ $ wget https://github.com/electron/electron/releases/download/v1.6.11/electron-v1.6.11-linux-x64.zip
# Unzip to /home/user/Electron
user@computer:~ $ unzip electron-v1.6.11-linux-x64.zip Electron
# Go to the 'resources' directory
user@computer:~ $ cd Electron/resources
# Clone the repository to the 'App' sub-directory
user@computer:~/Electron/resources $ git clone https://github.com/techedemic/WhatchaDoin.git App
# Run the application as follows
user@computer:~/Electron $ ./
```

The file containing the time entries will be `/home/user/Electron/output.csv`
If it doesn't exist at first, the app will create it.


Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.
