var storage = sessionStorage;
function doFirst(){
    var itemString = storage.getItem('addItemList');    // var itemString = storage['addItemList'];
    var items = itemString.substr(0,itemString.length-2).split(', ');
    //console.log(items);     //["A1001", "A1005", "A1006", "A1002"]

    newDiv = document.createElement('div');
    newTable = document.createElement('table');

    //將table放進div，再將div放進cartList裡
    newDiv.appendChild(newTable);
    document.getElementById('cartList').appendChild(newDiv);

    total = 0;
    for(var key in items){  //use items[key]
        var itemInfo = storage.getItem(items[key]);
        createCartList(items[key],itemInfo);

        var itemPrice = parseInt(itemInfo.split('|')[2]);
        total += itemPrice;
    }
    document.getElementById('total').innerText = total;
}

function createCartList(itemId,itemValue){
    // alert(`${itemId} : ${itemValue}`);
    var itemTitle = itemValue.split('|')[0];
    var itemImage = 'imgs/' + itemValue.split('|')[1];
    var itemPrice = parseInt(itemValue.split('|')[2]);

    //建立每個品項的清單區域--tr
    var trItemList = document.createElement('tr');
    trItemList.className = 'item';    // trItemList.setAttribute('class','item');

    newTable.appendChild(trItemList);

    //建立商品圖片--第一個td
    var tdImage = document.createElement('td');
    tdImage.style.width = '200px';

    var image = document.createElement('img');
    image.src = itemImage;
    image.width = 70;

    tdImage.appendChild(image);
    trItemList.appendChild(tdImage);

    //建立商品名稱和刪除按鈕--第二個td
    var tdTitle = document.createElement('td');
    tdTitle.style.width = '170px';
    tdTitle.id = itemId;

    var pTitle = document.createElement('p');
    pTitle.innerText = itemTitle;

    var delButton = document.createElement('button');
    delButton.innerText = 'Delete';
    delButton.addEventListener('click',deleteItem);

    tdTitle.appendChild(pTitle);
    tdTitle.appendChild(delButton);

    trItemList.appendChild(tdTitle);

    //建立商品價格--第三個td
    var tdPrice = document.createElement('td');
    tdPrice.style.width = '170px';
    tdPrice.innerText = itemPrice;

    trItemList.appendChild(tdPrice);

    //建立商品數量--第四個td
    var tdItemCount = document.createElement('td');
    tdItemCount.style.width = '60px';

    var itemCount = document.createElement('input');
    itemCount.type = 'number';
    itemCount.value = 1;
    itemCount.min = 0;
    itemCount.addEventListener('input',changeItemCount);

    tdItemCount.appendChild(itemCount);
    trItemList.appendChild(tdItemCount);
}

function deleteItem(){
    var itemId = this.parentNode.getAttribute('id');
    // alert(itemId);
    //先扣除總金額
    var itemValue = storage.getItem(itemId);
    total -= parseInt(itemValue.split('|')[2]);

    document.getElementById('total').innerText = total;
    
    //清除storage的資料
    storage.removeItem(itemId);
    storage['addItemList'] = storage['addItemList'].replace(`${itemId}, `,'');

    //刪除該筆tr
    this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
}
function changeItemCount(){
    //作業
}
window.addEventListener('load',doFirst);