const fs = require('fs');
const remote = require('electron').remote;

document.addEventListener('DOMContentLoaded', function(){
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    document.getElementById('lblTime').innerText = date + '-' + time;

    const submitButton = document.getElementById('btnSubmit')

    submitButton.addEventListener('click', function (event) {
      saveFile();
    })
}, false);


function saveFile(){

  var taskType = document.getElementById('slctTaskType').value;
  var taskDescription = document.getElementById('txtTaskDescription').value;
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  var content = date + ',' + time + ',' + taskType + ',' + taskDescription + '\n';

  try {
    fs.appendFileSync('output.csv',content, 'utf-8');
    var window = remote.getCurrentWindow();
    window.close();
  } catch (e) {
    alert('Failed to save file: ' + e);
  }
}
