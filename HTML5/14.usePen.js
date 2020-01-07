function doFirst(){
    //先跟HTML畫面產生關連，再建事件聆聽功能
    let canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');

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
    //===
    // 打錯
    // context.addEventListener("mousemove",usepen);
    canvas.addEventListener("mousemove",usepen);

}

function usepen(e){
    context.fillStyle = 'red';
    // context.fillRect(100,100,10,10);
    // 01
    // context.fillRect(e.clientX,e.clientY,10,10);

    // 02
    // 不像舉行，元繳一定要重新beginpath
    context.beginPath();
    context.arc(e.clientX,e.clientY,10,0,2*Math.PI);
    context.fill();
}


window.addEventListener('load',doFirst);