function doFirst(){
    //先跟HTML畫面產生關連，再建事件聆聽功能
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

    context.fillRect(100,100,300,200);
}
window.addEventListener('load',doFirst);