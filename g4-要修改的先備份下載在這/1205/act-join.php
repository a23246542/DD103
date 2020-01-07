<?php
session_start();
$memNo=$_SESSION["memNo"];
$errMsg="";

try{

    require_once("../connection.php");

    //我報名的活動
    //$sql="select a.actStartDate,a.actName,a.actLoc,j.actNo from `member` m join `activity` a ON a.memNo= m.memNo join `joinlist` j on  a.actNo = j.actNo";
    $sql="select a.actStartDate,a.actName,a.actLoc,j.actNo,m.memNo , a.actPic from `member` m join `activity` a ON a.memNo= m.memNo join `joinlist` j on  a.actNo = j.actNo where m.memNo = $memNo";

    $activity=$pdo->query($sql);

    if($activity->rowCount()==0){
          echo "找不到資料";
    }else{
        
     $arr=[];
     $i=0;
        while($result = $activity->fetch(PDO::FETCH_ASSOC)){

         $arr[$i]=$result;
         $i++;

          };
          
    echo json_encode($arr,JSON_UNESCAPED_UNICODE);

    }

}catch(PDOEexception $e){
    $errMsg.="錯誤訊息:".$e->getMessage()."<br>";
    $errMsg.="錯誤行數:".$e->getLine()."<br>";
};


?>