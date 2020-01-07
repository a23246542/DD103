var storage = sessionStorage;
// addItemList

function doFirst(){
    // 先檢查 然後建立初始直
    //!!左邊是物件 右邊是null數字型態 不能用三個等於
    if(storage["addItemList"]==null){
        storage['addItemList'] = "";
    }

    // 幫每個add cart建立事件聆聽
    //都是用class 老師建議用query
    // 拿到id跟input就無敵 
   var list = document.querySelectorAll('.addButton')

   for(let i=0;i<list.length;i++){

     list[i].addEventListener('click',function(){
         
            var teddyInfo = document.querySelector(`#${this.id} input`).value;
            
            // 現在有key要放的跟value要放的
            addItem(this.id,teddyInfo);
     })

   }


}

function addItem (itemId,itemValue){
    // alert(`${itemId}/${itemValue}`);
    var image = document.createElement('img');
    image.src= "imgs/"+itemValue.split('|')[1];

    var title = document.createElement('span');
    title.innerText = itemValue.split('|')[0];

    var price = document.createElement('span');
    price.innerText = itemValue.split('|')[2];


    //!01先判斷沒有東西
    var newItem = document.querySelector('#newItem');
    // !! 用while迴圈是最保險的寫法 因為原始黨不確定有沒有換行小孩 別用for
    // !!一個一個刪  然後可以先判斷這樣效能叫好
    if(newItem.hasChildNodes){
        // @@length
            while(newItem.childNodes.length>=1){
        //    newItem.removeChild(this.firstChild);
        //!!this
        newItem.removeChild(newItem.firstChild);
        }
    }
  

    //02再顯示新增
    newItem.appendChild(image);
    newItem.appendChild(title);
    newItem.appendChild(price);


    // 03再存入 !!字串
    if(storage['addItemList']){
        
        TODO:
    }else{
        // 老師寫入是寫逗號空白
        storage['addItemList']+= `${item.id},`;
    }

    //計算購買數量和小記
    var itemString = storage.getItem(`addItemList`);
    var items = itemString.substr(0,itemString.length-2).

    // !!陣列呈現方式
    alert(items);
    console.log(items);

    // 既然是陣列當然就可以用陣列的方法了!! TODO:老師表

    // !!forin跳著找反而沒效率
    // !!為了物件存在
    // for(var key in 陣列或物件)
    
    let subtotal = 0//要作家總
    for(var key in items){//use item[key]
        var itemInfo = storage.getItem(items[key]);
        var itemPrice = parseInt(itemInfo.split('|')[2]);

        subtotal+= itemPrice;

    } 

}

window.addEventListener('load',doFirst);