<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>董董購物網</title>
<link rel="stylesheet" type="text/css" href="jsLogin.css">
<link rel="icon" href="大頭照.jpg">
</head>

<body>
<!-- 燈箱：登入 -->
<div id="lightBox" style="display:none">
<table border="1" align="center" cellspacing="0" id="tableLogin">
<tr><td>帳號</td><td><input type="text" name="memId" id="memId"></td></tr>
<tr><td>密碼</td><td><input type="password" name="memPsw" id="memPsw"></td></tr>
<tr><td colspan="2" align="center">
        <input type="button" id="btnLogin" value="登入">
        <input type="button" id="btnLoginCancel" value="取消">
    </td></tr>
</table>
</div>
<!-- wrapper -->
<div id="wrapper">
	<!------------ 登入bar ------------>
	<img src="大頭照.jpg">
	<div id="bar" style="position: absolute;top:0;right: 20px">
	<span id="memName">&nbsp;</span>   <!-- 使用者姓名 -->
	<span id="spanLogin">登入</span>
	</div>
	<!------------ content ------------>
	<div id="content">
	<center><h1>商品專區</h1></center><br><br>

	<a href="index.php"> 回首頁 </a><br>
	</div>
	<!------------ footer ------------>
	<div id="footer"></div>

</div>

</body>
</html>
