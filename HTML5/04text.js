

// 01font鮮血
// 02顏色需要分好
function doFirst(){

    let canvas = document.querySelector("canvas");
    let context = canvas.getContext("2d");


//    context.font="border:50px;" 
   context.font="bold 50px Tahoma"; 
   context.fillText("omg",100,100);

   context.strokeStyle="red";
   context.moveTo(100,100);
   context.lineTo(300,100);
   context.stroke();

//    第二個字

// context.shadowColor="red";
context.shadowOffsetX=5;
context.shadowOffsetY=5;
context.shadowColor="rgba(255,0,0,0.7);"
context.shadowBlur=15;
// 放後面才有效果
context.fillText("omg",100,200);

// 第三字
    // context.fillStyle=""
    context.shadowOffsetX=0;
    context.shadowOffsetY=0;
    // context.shadowColor=rgba(255,0,0,0.7);
    context.shadowColor="red";
    context.shadowBlur=15;

    context.fillStyle="#fff"
    context.fillText("omg",100,300);


// 第四個字

context.fillText("omg",100,400);

// 顏色會混合
context.shadowColor="blue";
 context.fillText("omg",100,400);
}




window.addEventListener("load",doFirst);