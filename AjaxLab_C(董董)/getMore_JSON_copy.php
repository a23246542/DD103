<?php
try{
  require_once("connectBooks.php");
  $sql = "select * from `member` where memId=:memId";
  // $pdo->prepare($sql);
  // $pdo->bindValue(":memId",$_GET['memId'])
  // ??不打name可以嗎
  // $member=$pdo->prepare($sql);
  // $member->bindValue(":memId",$_GET['memId']);
  // $member->execute();
  $member = $pdo->prepare($sql);
  $member->bindValue(":memId", $_GET["memId"]);
  $member->execute();


  
  if( $member->rowCount() == 0 ){ //找不到
    //傳回空的JSON字串
    // echo {};@@
    echo "{}";//也要字串
    
  }else{ //找得到
    //取回一筆資料
    $memRow = $member->fetch(PDO::FETCH_ASSOC);
    //送出json字串
    echo json_encode($memRow);
  }	
}catch(PDOException $e){
  echo $e->getMessage();
}
?>