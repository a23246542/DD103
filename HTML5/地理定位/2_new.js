function doFirst(){
    //先跟HTML畫面產生關連，再建事件聆聽功能
    navigator.geolocation.getCurrentPosition(succCallback,errorCallback,{
        enableHighAccuracy: false,
        timeout: 2000000000,
        maximumAge: 0,
    });
}
function succCallback(e){
    let lati = e.coords.latitude;
    let longi = e.coords.longitude;
    let accuracy = e.coords.accuracy;

    if(accuracy>100000){
        document.getElementById('position').innerHTML = '超過偵測範圍';
    }else{
        document.getElementById('position').innerHTML = `緯度：${lati}<br>經度：${longi}<br>準確度： ${accuracy}`;
    }    
}
function errorCallback(e){
    // document.getElementById('position').innerHTML = `錯誤碼： ${e.code}<br>錯誤訊息： ${e.message}`;
    alert(`錯誤碼： ${e.code}\n錯誤訊息： ${e.message}`);
}
window.addEventListener('load',doFirst);