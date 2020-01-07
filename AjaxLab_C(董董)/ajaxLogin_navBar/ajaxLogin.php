<?php
session_start();
try{
  require_once("connectBooks.php");
  $sql = "select * from member where memId=:memId and memPsw=:memPsw";
  $member = $pdo->prepare( $sql);
  $member->bindValue(":memId", $_REQUEST["memId"]);
  $member->bindValue(":memPsw", $_REQUEST["memPsw"]);
  $member->execute();
  if( $member->rowCount() == 0 ){
  	echo "{}";
  }else{
  	$memRow = $member->fetch(PDO::FETCH_ASSOC);
    //登入成功,將登入者的資料寫入session
    $_SESSION["memNo"] = $memRow["no"];
    $_SESSION["memId"] = $memRow["memId"];
    $_SESSION["memName"] = $memRow["memName"];
    $_SESSION["email"] = $memRow["email"];
    $_SESSION["tel"] = $memRow["tel"];
    $_SESSION["birthday"] = $memRow["birthday"];
  	//準備想要送回前端的資料
  	$result = array("memName"=>$memRow["memName"],"email"=>$memRow["email"],"tel"=>$memRow["tel"]);
  	echo json_encode($result);
  }
}catch(PDOException $e){
  echo $e->getMessage();
  //echo "系統異常,請通知系統維護人員";	
}
?>
