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
     
    // let gradient = context.createRadialGradient(400,300,50,300,300,200);    
    // gradient.addColorStop(0,'red');
    // gradient.addColorStop(1,'blue');
    // context.fillStyle = gradient;
    // context.fillRect(100,100,600,400);

    context.translate(300,300);
    // 這樣就可以座標從0開始算

    let gradient = context.createRadialGradient(0,0,190,0,0,210);    
    gradient.addColorStop(0,'#555');
    gradient.addColorStop(0.5,'#fff');
    gradient.addColorStop(1,'#555');


    context.beginPath();
    // strokestyle顏色也可以用漸層
    context.strokeStyle = gradient;
    context.lineWidth = 20;

    context.arc(0,0,200,0,2*Math.PI);    
    context.stroke();
}
window.addEventListener('load',doFirst);