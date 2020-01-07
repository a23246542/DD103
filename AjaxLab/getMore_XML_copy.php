<?php
try{
  require_once("connectBooks.php");
  $sql = "select * from `member` where memId=:memId";
  $member = $pdo->prepare($sql);
   exit("錯誤");
  $member->bindValue(":memId",$_GET["memId"]);
 
  $member->execute();

  if($member->rowCount()==0){
    echo "查無此帳號";
  }else{
    $memberRow = $member->fetch(PDO::FETCH_ASSOC);
    
    $xml ='<?xml version="1.0"?>';
    $xml.="<member>";
    $xml.="<memId>{$memberRow['memId']}</memId>";
    $xml.="<memName>{$memberRow['memName']}</memName>";
    $xml.="<birthday{$memberRow["birthday"]}></birthday{}>";
    header('Content-Type:application/xml;charset=utf8');
    echo $xml;
  }
  
}catch(PDOException $e){
   echo $e->getMessage();
}

?>