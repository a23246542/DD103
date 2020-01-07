//陣列

//原本陣列給值
var nums = [1,2,3];
var first = nums[0];
var second = nums[1];
var third = nums[2];

//ES6陣列給值
var nums = [10,20,30];
[first,second,third] = nums;

[10, 20, 30]
first =====> 10

//預設值
[first,second,third,forth=100] = nums;
forth =====> 100

//只取第二個值
var nums = [100,200,300];
[,second] = nums;
second =====> 200

//剩餘的部分
var nums = [100,200,300,400,500];
[first,...others] = nums;

first =====> 100
others =====> [200, 300, 400, 500]

//值的互換
var a = 10;
var b = 20;

[a,b] = [b,a]

b =====> 10

//======

var arr = [2,4,6,'abc',true]
arr[5] = 'temp'

arr =====> [2, 4, 6, "abc", true, "temp"]

//陣列屬性
arr.length =====> 6

//不可如此操作
arr[] = 'error';
VM539:1 Uncaught SyntaxError: Unexpected token ]

//陣列的方法:join()
var months =['January','February','March','April','May','June','July','August','September','October','November','December'];
var monString = months.join(' - ');

monString  =====> "January - February - March - April - May - June - July - August - September - October - November - December"

//陣列的方法:indexOf()
months.indexOf('May'); =====> 4
months.indexOf('MAY'); =====> -1

//刪除陣列的元素
delete months[3]

months =====> (12) ["January", "February", "March", empty, "May", "June", "July", "August", "September", "October", "November", "December"]

//陣列的方法:push()
var temp = [];
temp.push(1)
temp.push(3)
temp.push(5)

temp =====> (3) [1, 3, 5]

temp.push(7,9,11,13,15)
temp =====> (8) [1, 3, 5, 7, 9, 11, 13, 15]

//陣列的方法:pop()
temp.pop() =====> 15

//陣列的方法:unshift() & shift()
var nums = [4,6,8,10]
nums.unshift(2);

nums =====> (5) [2, 4, 6, 8, 10]

nums.shift() =====> 2

//陣列的方法:splice()

var people = ['Annie','Brian','Cathy','David'];
people.splice(0,1) =====> ["Annie"]

people  =====> (3) ["Brian", "Cathy", "David"]

var people = ['Annie','Brian','Cathy','David'];
people.splice(2,0,'Hello','World')

people =====> (6) ["Annie", "Brian", "Hello", "World", "Cathy", "David"]