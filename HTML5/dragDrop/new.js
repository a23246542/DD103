function doFirst(){   
    //先跟HTML畫面產生關連，再建事件聆聽功能
    image = document.getElementById('image');
    image.addEventListener('dragstart',startDrag);
    image.addEventListener('dragend',endDrag);
    
    rightbox = document.getElementById('rightbox');
    // rightbox.addEventListener('dragenter',function(e){e.preventDefault();});
    rightbox.addEventListener('dragover',function(e){e.preventDefault();});
    rightbox.addEventListener('drop',dropped);    
}
function startDrag(e){
    let data = '<img src="../../images/witch.jpg">';
    e.dataTransfer.setData('image/jpeg',data);
}
function endDrag(){
    image.style.visibility = 'hidden';
}
function dropped(e){
    e.preventDefault();
    rightbox.innerHTML = e.dataTransfer.getData('image/jpeg');
}
window.addEventListener('load',doFirst);