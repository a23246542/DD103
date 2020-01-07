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
    let file = e.dataTransfer.files[0];
    document.getElementById('fileName').innerText = file.name;

    // 把下面這段移過來而已
    let readFile = new FileReader()
    // readFile.readAsDataURL(file);
    readFile.readAsDataURL(file);
    readFile.addEventListener('load',function(e){
        // document.getElementById('image').value = this.result;
        let myMovie = document.getElementById('myMovie');
        myMovie.src = this.result;
        myMovie.style.maxWidth = '500px';
        myMovie.controls = true; //撥放器

        // image.style.maxWidth = '500px';
        // image.style.maxHeight = '400px';
    })
}


// function fileChange(){
//     let file = document.getElementById('theFile').files[0];
//     let message = '';

//     message += 'File Name: ' + file.name + '\n';
//     message += `File Type: ${file.type} \n`;
//     message += `File Size: ${file.size} byte(s)\n`;
//     message += `Last Modified: ${file.lastModifiedDate.toDateString()} \n`;

//     document.getElementById('fileInfo').value = message;

//     // =================

//     let readFile = new FileReader();
//     readFile.readAsText(file);
//     readFile.addEventListener('load',function(e){
//         document.getElementById('fileContent').value = this.result;
//     })

// }
window.addEventListener('load',doFirst);


