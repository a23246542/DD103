<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Examples</title>
</head>
<body>
<h2>index array->陣列轉 JSON字串</h2>
<?php 
$arr = [11, "22", true];
echo "轉成JSON字串 : ",json_encode($arr);
?>    



<h2>associative array->!索引陣列 JSON字串</h2>
<?php  
$arr = array("studNo"=>"MM0001", "studName"=>"Handsome");
echo "轉成JSON字串 : ",json_encode($arr);
?>

<!-- ================================================== -->

<h2>JSON字串->!陣列轉回PHP使用</h2>
<?php 
$str = '[11,"22",true]';
// $array = json_decode($str);
// foreach( $array as $i=>$data){
// 	echo $i," : ", $array[$i], "<br>";
// }


$array = json_decode($str);
// !變成陣列可以用foreach 索引陣列??
foreach($array as $i=>$data){
	echo "{$i}:{$data}<br>";
}
?>


<h2>!!JSON字串->物件轉回PHP使用2</h2>
<?php 
// $str = '{"studNo":"MM0001","studName":"Handsome"}';
// $object = json_decode($str);
// echo "object->studNo : ", $object->studNo, "<br>";
// echo "object->studName : ", $object->studName, "<br>";

$res='{"studNo":"MM0001","studName":"Handsome"}';
$data = json_decode($res);

echo $data->studNo;

?>



TODO:建構+PHP
</body>
</html>