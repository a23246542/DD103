<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Examples</title>
</head>
<body>
<h2>index array->JSON字串</h2>
<?php 
$arr = [11, "22", true];
echo "轉成JSON字串 : ",json_encode($arr);
?>    


<h2>associative array->JSON字串</h2>
<?php  
$arr = array("studNo"=>"MM0001", "studName"=>"Handsome");
echo "轉成JSON字串 : ",json_encode($arr);
?>


<h2>JSON字串->轉回PHP使用</h2>
<?php 
$str = '[11,"22",true]';
$array = json_decode($str);
foreach( $array as $i=>$data){
	echo $i," : ", $array[$i], "<br>";
}
?>


<h2>JSON字串->轉回PHP使用2</h2>
<?php 
$str = '{"studNo":"MM0001","studName":"Handsome"}';
$object = json_decode($str);
echo "object->studNo : ", $object->studNo, "<br>";
echo "object->studName : ", $object->studName, "<br>";
?>

</body>
</html>