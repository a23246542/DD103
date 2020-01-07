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

    // 畫出四分之一
    context.beginPath();
    context.strokeStyle = '#000';

    context.moveTo(canvas.width/2, 0);
    context.lineTo(canvas.width/2, canvas.height);
    context.stroke();

    context.moveTo(0, canvas.height/2);
    context.lineTo(canvas.width, canvas.height/2);
    context.stroke();
    // ============
    
    context.strokeStyle = 'rgb(0,0,0)';
    //左上角
    context.beginPath();
    context.arc(250,225,150,0,Math.PI,false);
    context.stroke();

    //右上角
    context.beginPath();
    context.arc(750,225,150,0,Math.PI,true);
    context.stroke();

    //左下角
    context.beginPath();
    context.arc(250,675,150,0,2*Math.PI,true);
    context.stroke();

    //右下角
    context.beginPath();
    context.arc(750,675,150,0.3*Math.PI,1.75*Math.PI,false);
    context.stroke();
}
window.addEventListener('load',doFirst);