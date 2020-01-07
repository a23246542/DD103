function doFirst(){
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

    canvas.width = 400;
    canvas.height = 400;

    setInterval(drawCastle,20);
    theClock = 0;

    function drawCastle(){
        theClock++;
        context.clearRect(0,0,canvas.width,canvas.height);
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
        //=====格線結束 

        //地板
        context.beginPath();
        context.moveTo(25,350);
        context.lineTo(375,350);
        context.strokeStyle = '#000';
        context.lineWidth = 2;
        context.stroke();

        context.lineWidth = 1;
        //左一 + 右二 紅色(#ea4335)
        context.beginPath();
        context.rect(50,300,50,50);
        context.rect(250,250,50,100);

        context.fillStyle = '#ea4335';
        context.fill();
        context.stroke();

        //右一 藍色(#4285f4)
        context.beginPath();
        context.rect(300,300,50,50);
        context.fillStyle = '#4285f4';
        context.fill();
        context.stroke();

        //拱門 綠色(#34a853)
        context.beginPath();
        context.moveTo(100,350);
        context.lineTo(100,200);
        context.lineTo(250,200);
        context.lineTo(250,350);
        context.lineTo(200,350);
        context.lineTo(200,250);
        context.arc(175,250,25,0,Math.PI,true);
        context.lineTo(150,350);
        context.closePath();

        context.fillStyle = '#34a853';
        context.fill();
        context.stroke();

        //屋頂 紅色(#ea4335)
        context.beginPath();
        context.moveTo(100,200);
        context.lineTo(175,150);
        context.lineTo(250,200);
        context.closePath();

        context.fillStyle = '#ea4335';
        context.fill();
        context.stroke();

        //屋頂小旗子 黃色(#fbbc05)
        context.beginPath();
        context.moveTo(175,150);
        context.lineTo(175,100);
        context.lineTo(200,110);
        context.lineTo(175,120);

        context.fillStyle = '#fbbc05';
        context.fill();
        context.stroke();

        //小白車
        context.fillStyle = '#fff';

        let carX = (theClock % 440) - 40;
        
        context.fillRect(carX,325,40,25);
        context.strokeRect(carX,325,40,25);
        context.beginPath();
        context.arc(carX+10,350,5,0,2*Math.PI);
        context.arc(carX+30,350,5,0,2*Math.PI);

        // context.fillRect(50,325,40,25);
        // context.strokeRect(50,325,40,25);
        // context.beginPath();
        // context.arc(50+10,350,5,0,2*Math.PI);
        // context.arc(50+30,350,5,0,2*Math.PI);

        context.fillStyle = '#333';
        context.fill();
        context.stroke();
    }
}
window.addEventListener('load',doFirst);