


function doFirst(){

    let canvas = document.querySelector("canvas");
    let context = canvas.getContext("2d");

    var image =new Image();
    // image.src='./images/limes.jpg';
    image.src='./images/cityscape.jpg';
    image.addEventListener("load",function(){
        // context.drawImage(image,100,100);
        context.drawImage(image,0,0,canvas.width,canvas.height);
    });
}


window.addEventListener("load",doFirst);