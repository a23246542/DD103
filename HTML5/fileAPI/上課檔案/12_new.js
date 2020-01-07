function doFirst(){   
    //先跟HTML畫面產生關連，再建事件聆聽功能
   document.getElementById('dropzone').ondragover = dragOver;
   document.getElementById('dropzone').ondrop = dropped;
}
function dragOver(e){
    e.preventDefault();
}
function dropped(e){
    e.preventDefault();
    let file = e.dataTransfer.files[0];
    document.getElementById('fileName').innerText = file.name;

    let readFile = new FileReader();
    readFile.readAsText(file);
    readFile.addEventListener('load',function(){
        document.getElementById('fileContent').value = this.result;
    });
}
window.addEventListener('load',doFirst);