const fs = require('fs');
const remote = require('electron').remote;
const path = require('path');

var strDateLoaded = "";

document.addEventListener('DOMContentLoaded', function(){
    // Get and display the date so the user can see when the window was opened
    var today = new Date();
    //var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    //var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var date = moment().format('YYYY-MM-DD');
    var time = moment().format('h:mm:ss a')
    document.getElementById('lblDate').innerText = date;
    document.getElementById('lblTime').innerText = time;

    strDateLoaded = date + "," + time;

    // Get a handle to the submit button
    const submitButton = document.getElementById('btnSubmit')

    submitButton.addEventListener('click', function (event) {
        saveFile();
    })

    // Add an eventlistener for the enter key.
    document.addEventListener('keypress', function(e){
        var key = e.which || e.keyCode;
        if (key === 13){
            submitButton.click();
        }
    });
}, false);


function saveFile(){

    var taskType = document.getElementById('slctTaskType').value;
    var taskDescription = document.getElementById('txtTaskDescription').value;
    // var today = new Date();
    // var date = moment().format('YYYY-MM-DD');
    // var time = moment().format('h:mm:ss a')

    // var content = date + ',' + time + ',' + taskType + ',' + taskDescription + '\n';
    var content = strDateLoaded + ',' + taskType + ',' + taskDescription + '\n';

    try {
        var outputFile = path.join(getUserHome(),'output.csv');
        fs.appendFileSync(outputFile,content, 'utf-8');
        var window = remote.getCurrentWindow();
        window.close();
    } catch (e) {
        alert('Failed to save file: ' + e);
    }
}


function getUserHome() {
    return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}