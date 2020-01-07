

var storage = sessionStorage;
function doFirst(){
    
    //確認存區是空的 避免風險
    if(storage['addItemList']==null){
         storage['addItemList']="";
    }
    //建立事件聆聽 執行函式
    var list = document.querySelectorAll('.addButton');

    list.on('click',function(){
        var teddyInfo = $(`#${this.id} input`).val();
        addItem(this.id,teddyInfo)
    });
    

}
function addItem(itemId,itemValue){

    //建立圖片 標題 價格物件
    let image = $('<img>');
    image.attr('src','imgs/'+itemValue.split)
    //原本葉面上東西先清掉

    //在載入

    // 存去storage

    //存取storage 載入小記跟項目
        // 建立標籤
}
window.addEventListener('load',doFirst);


while(newItem.childNode.length>=1){
    newItem.removeChild(newItem.firstChild);
}

if(storage['add'])