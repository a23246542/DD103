function doFirst(){   
    //先跟HTML畫面產生關連，再建事件聆聽功能
   document.getElementById('theFile').onchange = fileChange;
}
function fileChange(){
    // let file = document.getElementById('theFile').files[0];
    let files = document.getElementById('theFile').files;
    let message = '';

    // 變成陣列
    for(let i=0; i<files.length; i++){

         message += 'File Name: ' + file[i].name + '\n';
        message += `File Type: ${file[i].type} \n`;
        message += `File Size: ${file[i].size} byte(s)\n`;
        message += `Last Modified: ${file[i].lastModifiedDate.toDateString()} \n`;
        message += `========================\n`
        // 組好丟進去
        document.getElementById('fileInfo').value = message;
    }

   
}
window.addEventListener('load',doFirst);