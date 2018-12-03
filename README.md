# WhatchaDoin

**Simple Time Tracker**

This is a very basic time tracker based on Dewald de Jongh's orignal Perl QT version, which unfortunately only worked on Linux.

This version is cross-platform.

## Windows (64-Bit Only - 32 Bit available on request)

#### First, download the app

Download the latest WINDOWS 64-BIT release from https://github.com/techedemic/WhatchaDoin/releases .

#### Next, extract
Extract wherever you want. For this example, we will use `C:\tmp\WhatchaDoin`

After extracting the zip, navigate to `C:\tmp\WhatchaDoin`


You can now manually start the app by running `C:\tmp\WhatchaDoin\WhatchaDoin.exe`

The file containing the time entries will be `C:\users\yourname\output.csv`

If it doesn't exist at first, the app will create it.

Obviously, you want this app to open up regularly, so you can use something like the Windows Task Scheduler to schedule recurring tasks and make the app fire every, let's say, 30 minutes or so.


## Linux

#### First, download the app

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

The file containing the time entries will be `/home/user/output.csv`
If it doesn't exist at first, the app will create it.

Obviously, you want this app to open up regularly, so you can use something like the `cron` to schedule recurring tasks and make the app fire every, let's say, 30 minutes or so.

### Example cron entry
```bash
# First, determine the display 'number' your X-session uses
user@computer:~/WhatchaDoin $ echo $DISPLAY
:1

# The output is `:1` which we will use in the cron entry below

# Open crontab
crontab -e
# Add a line as follows / Adjust according to output of command above
*/30 6-17 * * * export DISPLAY=:1 && /home/hendri/WhatchaDoin/WhatchaDoin > /dev/null
```
The above cron entry will open the app every 30 minutes between 06h00 and 17h00
You can use  [crontab tester](https://crontab.guru/#*/30_6-17_*_*_* ) to build your own expressions
