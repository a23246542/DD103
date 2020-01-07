function showAns(){
    var a=10; 
    var b=20; 
    window.alert(a+b);
}

function showAngry(){
    window.alert("還問 !!!")
}

function showSmile(){
    var btns = document.getElementsByName("btn");           
    window.alert("^________________^");
    btns[2].removeEventListener("click", showSmile, false);
    btns[2].addEventListener("click", showAngry, false);
}


function noAns(){
    window.alert("不告訢你 !!!");
}

function init(){
    var btns = document.getElementsByName("btn");
    btns[1].onclick = showAns;  //......
    btns[1].onclick = noAns;  //後面的會蓋掉前面的設定


    btns[2].addEventListener("click", showAns, false);
    btns[2].addEventListener("click", showSmile, false);            
}

window.addEventListener("load", init, false);  