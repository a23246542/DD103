

// 01要beginpath
// 02劃格線 上下對應
function doFirst(){

    let canvas = document.querySelector("canvas");
    let context = canvas.getContext("2d");

    // 20隨便寫
    for(let i=0; i<20; i++){
        let position = i*50;

        context.moveTo(position,0);
        context.lineTo(position,canvas.height);
        context.fillText(position,position,8);

        context.moveTo(0,position);
        context.lineTo(canvas.height,position);
        context.fillText(position,0,position);
    }
    context.strokeStyle="rgba(0,0,0,0.3)";
    context.stroke();


    // 劃出四分之一
    context.beginPath();
    context.strokeStyle="#000";

    context.moveTo(canvas.width/2,0);
    context.lineTo(canvas.width/2,canvas.height);
    
    context.moveTo(0,canvas.height/2);
    context.lineTo(canvas.width,canvas.height/2);
    context.stroke();
    
    // .......................
    // context.beginPath();
    // context.arc(200,200,100,0,Math.PI,false);
    // context.stroke();

    // context.beginPath();
    // context.arc(700,200,100,0,Math.PI,false);
    // context.stroke();

    // ============
    context.strokeStyle = 'rgb(0,0,0)';


    // 左上角
    context.beginPath();
    context.arc(250,225,150,0,Math.PI,false);
    context.stroke();

    // 右上角
    context.beginPath();
    context.arc(750,225,150,0,Math.PI,true);
    context.stroke();

    
    // 左下角
    context.beginPath();
    context.arc(225,575,150,0.3*Math.PI,1.75*Math*PI,false)
    context.stroke();


    // 右下角
    context.beginPath();
    context.arc(750,675,150,0.3*Math.PI,1.75*Math.PI,false);
    context.stroke();
}


window.addEventListener("load",doFirst);