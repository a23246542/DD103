<?php
try{
  require_once("connectBooks.php");

  $sql = "select * from `member` where memId=:memId"
  $member= $pdo->prepare($sql);
  $member->bindValue(":memId",$_GET['memId']);
  $member->execute();
 
  $errMsg="此帳號已使用";
  $okMsg="此帳號可以使用";

  if($member->rowCount()!==0){
    echo $errMsg;
  }else{
    echo $okMsg;
  }
}catch(PDOException $e){
  echo "error";
}
?>