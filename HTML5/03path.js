


function doFirst(){

    let canvas = document.querySelector("canvas");
    let context = canvas.getContext("2d");

    // 橡皮猜
    // context.clearRect(150,150,canvas.width,canvas.height)
    
    // 顏色要先寫
    // contextStyle="red"
    
    context.strokeStyle="red";
    context.fillStyle="pink";
    context.lineWidth= 5;

    context.moveTo(100,100);
    context.lineTo(250,250);
    context.lineTo(350,50);
    context.lineTo(50,250);
    // 原點
    // context.lineTo(100,100);
    context.closePath();
    // 自動回到原點

    

    context.stroke();
    context.fill();
}


window.addEventListener("load",doFirst);