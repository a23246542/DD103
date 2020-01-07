function doFirst(){   
    //先跟HTML畫面產生關連，再建事件聆聽功能
   document.getElementById('theFile').onchange = fileChange;
}
function fileChange(){
    let file = document.getElementById('theFile').files[0];
    let message = '';

    message += 'File Name: ' + file.name + '\n';
    message += `File Type: ${file.type} \n`;
    message += `File Size: ${file.size} byte(s)\n`;
    message += `Last Modified: ${file.lastModifiedDate.toDateString()} \n`;

    document.getElementById('fileInfo').value = message;

    //==========
    let readFile = new FileReader();
    readFile.readAsText(file);
    readFile.addEventListener('load',function(e){
        // document.getElementById('fileContent').value = e.target.result;
        document.getElementById('fileContent').value = this.result;
    });
}
window.addEventListener('load',doFirst);