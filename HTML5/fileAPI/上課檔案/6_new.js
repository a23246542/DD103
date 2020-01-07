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
    readFile.readAsDataURL(file);
    readFile.addEventListener('load',function(){
        let image = document.getElementById('image');
        image.src = this.result;
        image.style.maxWidth = '500px';
        image.style.maxHeight = '400px';
    });
}
window.addEventListener('load',doFirst);