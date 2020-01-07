// 第一個function很重要先跟他產生關聯再建立事件監聽
function doFirst(){
    myMovie = document.querySelector('#myMovie')
    let play =document.querySelector('#playBtn');
    // let stop =document.querySelector('#stopBtn');
    // 暫停 歸零 改成play
    // let up =document.querySelector('#upBtn');
    // let down =document.querySelector('#downBtn');
    // let mult =document.querySelector('#multBtn');
    let defaltBar =document.querySelector('#defaultBar');
    progressBar = document.querySelector('#progressBar')
    // 不用加let!!

    

    play.addEventListener('click',palyOrPause);
    myMovie.addEventListener('click',palyOrPause);
    // 功能依樣

    defaltBar.addEventListener('clcik',clickedBar);
}


function palyOrPause(){
    // 如果影片正在跑可以按暫停
    if(!myMovie.paused && !myMovie.ended){
        myMovie.pause();
        play.innerText="play"
    }else{  //暫停或結束 都是長依樣
        myMovie.play();
        play.innerText="pause"

        setInterval(update,300);
    }
}

// 640px/92 sec
function update(){}

function clickedBar(e){
    let mouseX = e.clientX - progressBar.offsetLeft;
    progressBar.style.width = mouseX + 'px';

    let newTime = mouseX/(barsize / myMovie.duration);
    myMovie.currentTime = newTime;
}

// window.onload="dofirst";哪裡寫錯
window.addEventListener('load',doFirst);