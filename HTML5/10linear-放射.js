function doFirst(){
    //先跟HTML畫面產生關連，再建事件聆聽功能
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

    //畫格線
    context.beginPath();
    for(let i=0; i<20; i++){
        let position = i * 50;

        context.moveTo(position,0);
        context.lineTo(position,canvas.height);
        context.fillText(position,position,8);

        context.moveTo(0,position);
        context.lineTo(canvas.width,position);
        context.fillText(position,0,position);
    }
    context.strokeStyle = 'rgba(0,0,0,0.2)';
    context.stroke();
// ======
    
let gradientSet = context.createLinearGradient(200,300,700,800);

gradientSet.addColorStop(0,"blue");
gradientSet.addColorStop(1,"yellow");

context.fillStyle = gradientSet;
context.fillRect(200,300,600,400);


}
window.addEventListener('load',doFirst);