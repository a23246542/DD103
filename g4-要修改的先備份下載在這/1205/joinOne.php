<?php

$errMsg = "";
// echo "suc";

$actNo=$_POST['actNo'];//報錯正常
$memNo=$_POST['memNo'];//報錯正常
$phpMsg="";
$phpMsg.="活動編號{$actNo},";
$phpMsg.="參加會員編號{$memNo}";
echo $phpMsg;

try {
    // $dsn = "mysql:host=localhost;port=3306;dbname=g4;charset=utf8";
	// $user = "root";
	// $password = "no512seed851";
	// $options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION, PDO::ATTR_CASE=>PDO::CASE_NATURAL);
    // $pdo = new PDO($dsn, $user, $password, $options);
    require_once("../connection.php");
    
    // $innerAct = $pdo->prepare($sql);
    // $innerAct2 = $pdo->prepare($sql2);
    // $innerAct ->bindValue(":actNo",$obj['actNo']);
    // $innerAct ->bindValue(":memNickName",$obj['memNickName']);
    // $innerAct ->bindValue(":comContent",$obj['comContent']);
    // $innerAct ->bindValue(":actNo",$_POST['actNO']);
    // $innerAct ->bindValue(":memNickName",$_POST['memNickName']);
    // $innerAct ->bindValue(":comContent",$_POST['comContent']);
    // echo "hello";
    $sql = "UPDATE `activity` SET `actTotal` = `actTotal`+1 WHERE `actNo` = {$actNo}";
    $sql2 = "INSERT INTO `joinlist` (`actNo`,`memNo`) VALUES ({$actNo},{$memNo})";
    
    $pdo->exec($sql);
    $pdo->exec($sql2);
    // $innerAct = $pdo->exec($sql);

}catch(PDOException $e){
    $errMsg .= "錯誤訊息: ". $e->getMessage(). "<br>";
    $errMsg .= "錯誤行號: ". $e->getLine(). "<br>";
    // echo $errMsg;
	
}



?>