<?php
try{
  require_once("connectBooks.php");
  $sql = "select * from `member` where memId=:memId";
  $member = $pdo->prepare($sql);
  $member->bindValue(":memId",$_GET["memId"]);
  $member->execute();
  //如果找得資料，取回資料，送出xml文件
  if( $member->rowCount() == 0){
  	//查無此人
    echo "not found";
  }else{
  	$memRow = $member->fetch(PDO::FETCH_ASSOC);
  	$xml = '<?xml version="1.0" ?>';
  	$xml .= "<member>";
  	$xml .= "<memId>{$memRow["memId"]}</memId>";
  	$xml .= "<memName>{$memRow["memName"]}</memName>";
  	$xml .= "<birthday>{$memRow["birthday"]}</birthday>";
  	$xml .= "<email>{$memRow["email"]}</email>";
  	$xml .= "<tel>{$memRow["tel"]}</tel>";
  	$xml .= "</member>";
  	header('Content-Type: application/xml; charset=utf-8');
  	echo $xml;
  }
}catch(PDOException $e){
  echo $e->getMessage();
}
?>