


function doFirst(){

    let canvas = document.querySelector("canvas");

    let context = canvas.getContext("2d");

    // context.fillRect(100,100,300,200);
    context.rect(100,100,300,200);
    context.fill();
    // context.stroke();
    context.clearRect(150,150,50,50);
    
}


window.addEventListener("load",doFirst);