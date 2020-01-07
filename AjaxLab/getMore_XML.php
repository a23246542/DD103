<?php
try{
  require_once("connectBooks.php");
  $sql = "select * from member where memId=:memId";
  $member = $pdo->prepare($sql);
  $member ->bindValue(":memId",$_GET['memId'])
  $member ->execute();
  //如果找得資料，取回資料，送出xml文件
  
  if ($member->rowCount()==0){
       echo "查無此會員";
  }else{
      $memRow = $member->fetch(PDO::FETCH_ASSOC);
      $xml = '<?xml version="1.0"?>';
      $xml.= '<member>';
      $xml.="<memId>{$memRow['memId']}</memId>";
      $xml.=
      $xml.='<member>' ;
  }
}catch(PDOException $e){
  echo $e->getMessage();
}
?>