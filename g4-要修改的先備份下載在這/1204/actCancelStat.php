<?php
session_start();
$errMsg="";

$actNo=$_POST["actNo"];

try{

    require_once("../connection.php");
    //註銷我舉辦的活動 0未註銷 1=註銷
    $sql ="UPDATE `activity` SET actCancelStat='1' WHERE actNo=$actNo";
    
	$actCancelStat = $pdo->prepare($sql);
    $actCancelStat->execute();
    
} catch (PDOException $e) {
	$errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
  	$errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
  	echo $errMsg;
}
?> 
