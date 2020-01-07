<?php

$errMsg="";

try{
    $actNo=$_POST['actNo'];
    $memNo=$_POST['memNo'];
    $repReason=$_POST['reportReason'];
    settype($actNo, "int");
    
    require_once("../connection.php");

    $sql="INSERT INTO `report`(`memNo`, `repReason`,`actNo`) VALUES ('$memNo','$repReason','$actNo')";
    // $sql="INSERT INTO `report`(`memNo`, `repReason`) VALUES ('$memNo','$repReason')";
    echo $actNo;
    // $sql2="INSERT INTO `report`(`actNo`) VALUES '$actNo'";
    $pdo->exec($sql);
    // $pdo->exec($sql2);


}catch (PDOException $e){
    $errMsg .= "錯誤 : ".$e -> getMessage()."<br>";
    $errMsg .= "行號 : ".$e -> getLine()."<br>";
    echo $errMsg;
}

?>