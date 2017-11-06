# WhatchaDoin

**Simple Time Tracker**

This is a very basic time tracker based on Dewald de Jongh's orignal Perl QT version, which unfortunately only worked on Linux.

This version is cross-platform.

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

Download the latest LINUX release from https://github.com/techedemic/WhatchaDoin/releases .
It will be the file that ends in `tgz`
Remember, this will only work on 64-bit machines.

#### Unzip to directory of your choice.
We will use `/home/user/WhatchaDoin` for this example, where `user` is your home directory or username.
From your command line:

```bash
# Go to the home directory
user@computer:/ $ cd /home/user
# Get Electron the latest version of the file from  (change the version if different)
user@computer:~ $ wget https://github.com/techedemic/WhatchaDoin/releases/download/0.0.1/whatchadoin-0.0.1.tgz
# Unzip to /home/user/Electron
user@computer:~ $ tar -zxvf whatchadoin-0.0.1.tgz WhatchaDoin
# Go to the WhatchaDoin directory
user@computer:~ $ cd WhatchaDoin
# Test the app
user@computer:~/WhatchaDoin $ ./WhatchaDoin
```

The file containing the time entries will be `/home/user/WhatchaDoin/output.csv`
If it doesn't exist at first, the app will create it.

Obviously, you want this app to open up regularly, so you can use something like the `cron` to schedule recurring tasks and make the app fire every, let's say, 30 minutes or so.

### Example cron entry
```bash
# Open crontab
crontab -e
# Add a line as follows
*/30 6-17 * * * export DISPLAY=:0 && /home/hendri/WhatchaDoin/WhatchaDoin > /dev/null
```
The above cron entry will open the app every 30 minutes between 06h00 and 17h00
You can use  [crontab tester](https://crontab.guru/#*/30_6-17_*_*_* ) to build your own expressions
