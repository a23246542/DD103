//字串

1.建立字串
var str = 'ABC';
var str = new String('ABC');

var str = '';
var str = new String();

2.屬性--字串.length
.html
<input type="email" id="email">
.js
var email = document.getElementById('email');
if(email.value.length > 0){...}

3.方法--字串拆分
字串.charAt(index)
var fullName = 'Silvia Huang';
{/* 尋找charAt再索引值哪裡 */}
fullName.charAt(1);	=====> i
fullName.charAt(4);	=====> i

字串.indexOf(string) | 字串.lastIndexOf()
fullName.indexOf('S');	=====> 0

var language = 'JavaScript';
language.indexOf('Script'); =====> 4
language.indexOf('script'); =====> -1

字串.slice(index x[,int count]) 從字串中取出子字串
language.slice(4); =====> Script
language.slice(0,4); =====> Java

字串.substr(index x, index y)


4.方法--字串操作
字串.concat()
var address = '2215 NE 68th St';
address.concat(' Seattle,', ' WA', ' 98115', ' USA');
=====> "2215 NE 68th St Seattle, WA 98115 USA"
{/* 只是回傳合併 原本的沒改變 */}
address 
=====> "2215 NE 68th St"

字串.toLowerCase() | 字串.toUpperCase()
var language = 'JavaScript';
language.indexOf('Script'); =====> 4
language.indexOf('script'); =====> -1
language.toLowerCase().indexOf('script'); =====> 4

字串.trim() 刪除字串兩端的空格

字串.replace(String str1,String str2) 將str2取代str1
var newString = 字串.replace('A1005, ','') ;


