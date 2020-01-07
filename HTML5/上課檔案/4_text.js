function doFirst(){
    //先跟HTML畫面產生關連，再建事件聆聽功能
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

    // 第一個字
    // context.textBaseline = 'bottom';
    context.font = 'bold 50px Tahoma';
    context.fillText('omgSilvia',100,100);

    context.strokeStyle = 'red';    
    context.moveTo(100,100);
    context.lineTo(360,100);
    context.stroke();

    // 第二個字
    context.shadowOffsetX = 5;
    context.shadowOffsetY = 5;
    context.shadowColor = 'rgba(255,0,0,0.7)';
    context.shadowBlur = 15;

    context.fillText('omgSilvia',100,250);

    // 第三個字
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.shadowColor = 'red';
    context.shadowBlur = 5;

    context.fillStyle = '#fff';
    context.fillText('omgSilvia',100,400);

    // 第四個字
    context.fillText('omgSilvia',100,550);

    context.shadowColor = 'blue';
    context.fillText('omgSilvia',100,550);
}
window.addEventListener('load',doFirst);