var storage = sessionStorage;
function doFirst(){
    
    // 01取得additemlist的id清單用成 items項目陣列
    var itemString = storage.getItem('addItemList');//@@取得value字串
    var items = itemString.substr(0,itemString.length-2).split(', ');


    // 02確定先把標籤建好
    var newDiv;
    var newTable;
    // @@先建小再放大
    // 03把table放進div 再把div放進cartList

    // 04把item項目陣列的直 取到key value
    // !!!!forin取代forEach
    total=0
    for(var key in items){
        var itemInfo = storage.getItem(items['key']);//!!字串
        // ??
        createCartList(item[key],itemInfo);

// ==========回來算錢====老師說前面怎麼做加總這邊是一樣的=======
        // var total= 0;
        var itemPrice = parseInt(itemInfo.split('|')[2]);
        total += itemPrice;
    }

    document.getElementById('total').innerText = total;


}



function createCartList(itemId,itemValue ){
    //alert一下看有沒有接到 
    // 01分割取得value的值
    var itemTitle = 
    var itemImage = 
    var itemPrice = 
    //!!老師說要註解才不會寫錯

    // 建立每個品項的清單區域--tr
    // 02建好屬性標籤 tr先
    var trItemList= document.createElement('tr');
    trItemList.className = 'item';

    newTable.appendChild(trItemList);


    // 03建立商品圖片 第一個td
    var tdImage = document.createElement('td');
    tdImage.style.width = '200px';
    //    接著再建imag標籤 把它該有的屬性寫好
    var image = document.createElement('img');
    img.src = itemImage;

    tdImage.appendChild(image);
    trItemList.appendChild(tdImage);

    // 04建立商品名稱和刪除按鈕 第二個td
    var tdTitle
    var pTitle;
    var delButton
    tdTitle.appendChild(tdTitle);
    tdTitle.appendChild(pTitle);
    tdTitle.appendChild(delButton);
    
    //建立商品價格 第三個td
    var tdPrice;

    trItemList.appendChild(tdPrice);

    
    // 建立商品數量 第四個td
    var tdItemCount = document.createElement('td');

    var itemCount = document.createElement('input');
    // !!input Number 
    
    // !!要用input事件 因為他有兩種方法修改
    itemCount.addEventListener('input',changeItemCount);

    tdItemCount.appendChild(itemCount);
    trItemList.appendChild(tdItemCount);
}

//建立事件處理函數
function deleteItem(){
    var itemId = this.parentNode.getAttribute('id');
    // alert(itemId);
//    01先扣除總金額
        // 所以前面total寫全域變數
    var itemValue = storage.getItem(itemId);
    total-= parseInt(itemValue.split('|')[2]);
     document.getElementById('total').innerText = total;
    //  02清除storage的資料
    // !!字串replace
     storage.removeItem(itemId);
     storage['addItemList'] = storage['addItemList'].replace(`${itemId}, `,"")

    // 03 刪除該筆tr
    // 如果沒有找到潔淨 陽春傳統從this往上找祖父
    this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode)
}

function changeItemCount(){

}
window.addEventListener('load',doFirst);