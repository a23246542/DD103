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
    context.strokeStyle = 'red';
    context.lineWidth = 5;
    
    context.beginPath();
    context.moveTo(400,500);
    context.arcTo(550,200,700,650,120);
    
    context.stroke();

    // 輔助線
    context.strokeStyle = 'blue';
    context.lineWidth = 1;
    
    context.beginPath();
    context.moveTo(400,500);
    context.lineTo(550,200);
    context.lineTo(700,650);
    
    context.stroke();
}
window.addEventListener('load',doFirst);