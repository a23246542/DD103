1.var, let, const
(1).scope
for(var i = 0; i < 5; i++){
  console.log(i);
}
console.log(i);

0
1
2
3
4
5
---------------
for(let j = 0; j < 5; j++){
  console.log(j);
}
console.log(j);

0
1
2
3
4
Uncaught ReferenceError: j is not defined
    at <anonymous>:4:13

---------------
for(const k = 0; k < 5; k++){
  console.log(k);
}
console.log(k);

0
Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:26
---------------
for(var m = 0; m < 5; m++){

  var m = 100;
  console.log(m);
}
console.log(m);
100
101
---------------
for(let n = 0; n < 5; n++){

  let n = 200;
  console.log(n);
}
200

(2).hosting

 test();				//先執行該函數
 function test(){...}	//補宣告

 ---------------
  temp += 1;
  var temp = 10;
 ---------------
  let 和 const 不能先執行，再補宣告

(3).const的reassigned的意義
 ---------------
 const d = 1;
 d = 100;	//不行
 ---------------
 const e = {x:5};
	console.log(e.x);	//5

 e.x = 100;	//可以

 ==============================================
2.object shortcut(shorthand)
(1).屬性縮寫
 function givePoint(x,y){
 	return{
 		x:x,
 		y:y,
 	}
 }

 ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
 function givePoint(x,y){
 	return{
 		x,
 		y,
 	}
 }
 const point = givePoint(100,200);
  ---------------
 function createObject(key,value) {
 	const obj = {};		//const obj = new Object();	
 	obj[key] = value;

 	return obj;
 }

 const person = createObject('name','Peter');
 person

 {name: "Peter"}

 const frog = createObject('legs',4);
 frog

 {legs: 4}

 ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
(2).屬性可以計算
 function createObject(key,value) {
 	const obj = {
 		[key] : value,
 	}; 	

 	return obj;
 }

 const female = createObject('name','Stella');
 female

 {name: "Stella"}

 ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
 function createObject(key,value) {
 	const obj = {
 		[key + 1] : value,		//重點在這行
 	}; 	

 	return obj;
 }

 const male = createObject('name','Anan');
 male

 {name1: "Anan"}

 (3).函數也可以縮寫

 const options = {
 	name: 'Peter',
 	age: 15,
 	created: function(){
 		console.log('created');
 	},
 	mounted: function(){
 		console.log('mounted');
 	},
 };

 ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
	const options = {
 	name: 'Peter',
 	age: 15,
 	created(){
 		console.log('created');
 	},
 	mounted(){
 		console.log('mounted');
 	},
 };


  ==============================================
 3.Destructuring assignment(解構賦值)

 const nums = [2,4,6];
 const firstNum = nums[0];
 const secondNum = nums[1];
 
 firstNum
	2
 secondNum
	4

 ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
 可改寫成以下:
 const[firstNum,secondNum] = nums;

 ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
 const nums = [2,4,6];
 let firstNum;
 let secondNum;

 [firstNum,secondNum] = nums;
 	(3) [2, 4, 6]
 firstNum
	2
 secondNum
	4
 let thirdNum;
 let forthNum;

 [firstNum,secondNum,thirdNum,forthNum] = nums;
 	(3) [2, 4, 6]
 forthNum
	undefined

 firstNum+secondNum+thirdNum+forthNum
	NaN

 #陣列解構的同時，
 (1).給予預設值
 [firstNum,secondNum,thirdNum,forthNum=10] = nums;
 	(3) [2, 4, 6]

 firstNum+secondNum+thirdNum+forthNum
	22

 (2).將部分元素忽略
 const nums = [2,4,6];
 let[,secondNum] = nums;	//只想取第二個值

 (3).將變數的值交換
 let f = 10;
 let g = 20;

 [f,g] = [g,f];		//就將值做互換了

 (4).處理剩下的部分
  let[arr,...others] = nums;

  arr
  	2
  others
  	[4, 6]

  ---------------
  #物件解構
  (1).給予預設值
  let thePoint = {
	  x:100,
	  y:200,
  };

  let x = thePoint.x;
  let y = thePoint.y;
  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
  可改寫成以下:
  let{x,y} = thePoint;

  let{x,y,z=10} = thePoint;

  ---------------
  #函數解構
  let thePoint = {
  	x:100,
  	y:200,
  };
  //計算一個點到原點的距離
  function distance(thePoint){
  	return Math.sqrt(thePoint.x*thePoint.x + thePoint.y*thePoint.y);
  }
  
  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
  可改寫成以下:

  function distance(thePoint){
  	const{x,y} = thePoint;
  	return Math.sqrt(x*x + y*y);
  }

  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
  可改寫成以下:

  function distance({x,y}){		//直接在函數的參數做解構
  	// const{x,y} = thePoint;
  	return Math.sqrt(x*x + y*y);
  }

  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
  可改寫成以下:

  function distance({x=0,y=0}){		//直接在函數的參數做解構，並給予初值
  	// const{x,y} = thePoint;
  	return Math.sqrt(x*x + y*y);
  }

  // 若想執行以上的函數
  let ans = distance(thePoint);
  console.log(ans);
  	223.60679774997897

  ==============================================
 4.String template(backtick反引號)
 (1).製作字串

  function greeting(name){
  	 console.log('Hello, '+ name + '~~');
  }

  greeting('Peter');
	Hello, Peter~~

  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
  可改寫成以下:
  
  function greeting(name){
  	console.log(`Hello, ${name}~~`);		//在String template，塞入表達式
  }

  greeting('Peter');
  	Hello, Peter~~

  [題外話]statement與expression

  ---------------
  function greeting(name,days){
  	let hours = days * 24;
  	console.log(`Hello, ${name}~~ It has been ${hours} hours.`);
  }

  greeting('Peter',2);
	Hello, Peter~~ It has been 48 hours.

  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
  可改寫成以下:˙7

  function greeting(name,days){
  	// let hours = days * 24;
  	console.log(`Hello, ${name}~~ It has been ${days * 24} hours.`);
  }

  greeting('Peter',3);
  	Hello, Peter~~ It has been 72 hours.

  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
  可改寫成以下:

  function greeting(name,days){		//在String template，塞入表達式(加上條件判斷)
  	// let hours = days * 24;
  	console.log(`Hello, ${name}~~ ${(days<7)? '':'It has been a long time since I saw you last.'}`);
  }

  greeting('Peter',10);
  	Hello, Peter~~ It has been a long time since I saw you last.

  (2).製作多行字串

  let longString = 'Lorem ipsum dolor sit amet, \n' + 
  				   'consectetur adipisicing elit. Autem facere suscipit, \n' + 
				   'iure saepe sint voluptas cum facilis velit. Laudantium \n' + 
				   'vero nulla dolores nostrum fugit excepturi incidunt \n' + 
				   'enim laboriosam, illum, dolor cumque unde nam delectus \n' + 
				   'quaerat quasi soluta tempora odit doloribus id facere? \n' + 
				   'Eligendi hic sit explicabo accusantium maxime, delectus ';
  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
  可改寫成以下:

  let longString = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
  					Doloribus velit, expedita similique! Saepe, earum, debitis 
  					quasi temporibus quia neque? Atque minima animi deserunt et, 
  					iusto, voluptate repudiandae minus corrupti, neque, cum fugiat 
  					nemo. Laudantium, natus esse minus temporibus, numquam magnam 
  					atque! Eos aperiam reiciendis, ducimus enim quae, odit rerum deserunt.`;

  ==============================================
 5.Arrow function
 //更簡短宣告以及定義函數的方式

 ES5
 ↓↓↓↓↓
 var ans = function multi(x){
 	return x * 2;
 };

 ----------------------------
 ES6
 ↓↓↓↓↓
 const ans = (x) => {		
 	return x * 2;
 }

 ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
 可改寫成以下:

 const ans = x => {			//呼叫該函數，如果只傳遞一個參數，()可省略
 	return x * 2;
 }

 ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
 可改寫成以下:

 const ans = x => x * 2;

 //呼叫該函數，如果傳遞的參數不只一個或沒有傳遞參數，()不可省略
 ----------------------------
 myArray.map(function(first,last){
 	return first + last
 });

 ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
 可改寫成以下:
 
 myArray.map((first,last) => {
 	return first + last;
 });

 ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
 可改寫成以下:
  
 myArray.map((first,last) => first + last );

 (1).簡化語法
 	-參數只有一個，可省略()
 	-內容只有一個敘述時(傳回值)，也可省略成一行

 	theButton.addEventListener('click',function(){console.log(10);});

 	↓↓↓↓↓↓↓↓↓↓↓↓↓↓
 	可改寫成以下:

 	theButton.addEventListener('click',() => console.log(10));

 (2).自動綁定
 	-只要寫成Arrow function，內部的this和外部的this相同

 		let x = () => {
		  console.log(this);
		}
		console.log(this);


 (3).this
 	let  y = function(){
 		console.log(this);
 	};
 	console.log(this);		//this是否相同，視狀況決定
 
 ----------------------------
 var name = 'Anan';
 var ans = function(){
   console.log(this.name);
 };

 ans()
	Anan
 console.log(this);		//this如果<1>直接執行，指的都是window(global)
	Window

 ----------------------------
 var teacher = {
 	name: 'Peter',
 	age: 40,
 };

 teacher.ans = ans;
 ans();
 	Anan
 teacher.ans();			//this如果<2>作為物件的成員函數(member function)，指的是該物件
 	Peter
 ----------------------------
 // .html
 // <button id="theButton" name="Silvia">click me</button>

 // .js
 var theButton = document.getElementById('theButton');
 theButton.addEventListener('click',ans);		//Silvia

 //this如果<3>作為事件聆聽功能的this，指的是該物件

 ----------------------------
 var ans = () => {
 	console.log(this.name);
 }