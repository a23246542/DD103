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
    let files = e.dataTransfer.files;
    let readFile = new FileReader();

    for(let i=0; i<files.length; i++){
        readFile.readAsDataURL(files[i]);
        readFile.addEventListener('load',function(){
            //動態新增<img>
            var image = document.createElement('img');
            image.src = this.result;

            var dropzone = document.getElementById('dropzone');
            // dropzone.appendChild(image);
            dropzone.insertBefore(image,dropzone.firstChild);
        });
    }    
}
window.addEventListener('load',doFirst);