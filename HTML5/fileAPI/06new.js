function doFirst(){   
    //先跟HTML畫面產生關連，再建事件聆聽功能
   document.getElementById('theFile').onchange = fileChange;
}
function fileChange(){
    let file = document.getElementById('theFile').files[0];
    // 就算只有一個 也是陣列0取得 
    // js的奇怪地方
    let message = '';

    message += 'File Name: ' + file.name + '\n';
    message += `File Type: ${file.type} \n`;
    message += `File Size: ${file.size} byte(s)\n`;
    message += `Last Modified: ${file.lastModifiedDate.toDateString()} \n`;

    document.getElementById('fileInfo').value = message;

    // =================
    
    let readFile = new FileReader();
    readFile.readAsDataURL(file);
    readFile.addEventListener('load',function(e){
        // document.getElementById('fileContent').src = this.result;
        let image = document.getElementById('img');
        image.src =this.result;
        // image.style.maxWidth=300;
        // image.style.maxHeight=300;
        image.style.maxWidth= '500px';
        image.style.maxHeight= '400px';

    })

}
window.addEventListener('load',doFirst);


