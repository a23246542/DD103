function doFirst(){
    //先跟HTML畫面產生關連，再建事件聆聽功能
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

    context.strokeStyle = 'red';
    context.fillStyle = 'pink';
    context.lineWidth = 5;
    
    context.moveTo(100,100);
    context.lineTo(250,250);
    context.lineTo(350,50);
    context.lineTo(50,200);
    context.closePath();

    context.stroke();
    context.fill();
}
window.addEventListener('load',doFirst);