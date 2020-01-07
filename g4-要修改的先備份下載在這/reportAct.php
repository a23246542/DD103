<?php

$errMsg="";

try{
    $memNo=$_POST['memNo'];
    $repReason=$_POST['reportReason'];

    require_once("../connection.php");

    // $sql="INSERT INTO `report`(`memNo`, `repReason`) VALUES '$memNo','$repReason'";
    $sql="INSERT INTO `report`(`memNo`, `repReason`) VALUES ({$memNo},{$repReason})";
    $pdo->exec($sql);
    echo "success";


}catch (PDOException $e){
    $errMsg .= "錯誤 : ".$e -> getMessage()."<br>";
    $errMsg .= "行號 : ".$e -> getLine()."<br>";
    echo $errMsg;
}

?>