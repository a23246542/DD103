function doFirst(){   
    //先跟HTML畫面產生關連，再建事件聆聽功能
   document.getElementById('dropzone').ondragover = dragOver;
   document.getElementById('dropzone').ondrop = dropped;
}


function dragOver(e){
    e.preventDefault()

}

function dropped(e){
    e.preventDefault();
    // let files = e.dataTransfer.files[0];
    let files = e.dataTransfer.files; //@@這邊依樣陣列
    let readFile = new FileReader();
    

    for(let i=0; i<files.length;i++){
        // @@ readFile.readAsDataURL(files);!!!!!!!!!
        readFile.readAsDataURL(files[i]); 
        readFile.addEventListener('load',function(){
            //動態新增img
            let img  = document.createElement('img');
            img.src = this.result;//忘記先設置 之後再插入

            let dropzone = document.getElementById('dropzone');
            // dropzone.insertBefore('img');
            // dropzone.insertBefore('img',dropzone.firstChild);
            //@@@@img是我的變數
            dropzone.insertBefore(img,dropzone.firstChild);
        })
    }

   
}



window.addEventListener('load',doFirst);


