// #1 樣板字串
// 將以下改寫成 Template String 寫法
const people = [
    {
      name: '小明',
      money: 500
    },
    {
      name: '漂亮阿姨',
      money: 3000
    },
    {
      name: '杰倫',
      money: 60000
    },
    {
      name: '老媽',
      money: Infinity
    }
  ];

  for(let i = 0;i<people.length;i++){
      console.log(people[i]);
  }
  // forEach 與 map
  // forEach 還要push
//   值/索引/陣列本身
  // 將所有物件增加 icash 有多少金額的欄位
   people.forEach(function(item,index,array){
      item.icash = item.money+500
  })
   const newPeople = people.map(function(item,index){
    //   item.icash = item.money+500;
    //   console.log(item);
    // 沒寫會變retunr undefined
    // 比較適合產生新陣列
        return{
            ...item,
            icash:item.money+500,
        }
    TODO:這樣不是依樣嗎
        // return item;
  })
  console.log(newPeople);

  // ====================================================
  // filter 比較適合過濾 回傳陣列資料
  // 挑出金額少於 5000 的物件
  const filterPeople = people.filter(function(item,index){
    //   return true;全船  
    //   return false;空陣列
    if(item.money<5000){
        return true;
    }
  })
  console.log(filterPeople);
  // find 只回傳一筆資料 所以比較適合搜尋特定的值 > 改成== 
  // 1. 找到金額 = 500 的物件
  // 2. 找到 > 5000 的物件
  const findPeople = people.find(function(item,index){
      if(item.money == 500){
          return true;
      }
  }); 

  // 陣列還有個arr.includes(2) 是否包含這個直 回傳true false
  let a = [1,2,3,4,5,6,7,8];
console.log(a.includes(2));   // true
console.log(a.includes(2,2)); // false ( 搜尋 3,4,5,6,7,8 沒有 2 )

// ====================================================

//   every跟some是用來取得true跟false的結果 return一個判斷式
  // every
  // 1. 所有"物件"是否都超過 10000 元
  // 2. 是否"所有"物件超過 300 元
  const ans = people.every(function(item,i){
      return item.money >300
  });
  console.log(ans);

  // some
  // 1. 是否有物件超過 10000 元
  // 2. 是否有物件持有金額少於 300元
  const ans2 =people.some(function(item,i){
      return item.money >1000;
  });
  console.log(ans2);
  
  
  // reduce
  // 去除掉老媽，請問剩下的人有多少錢？
  
  