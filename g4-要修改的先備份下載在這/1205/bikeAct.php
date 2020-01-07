<?php


$errMsg = "";
try {
  require_once("../connection.php");

	// $sql = "select * from `activity` where `actCancelStat`= '0' ORDER BY `actStartDate` DESC"  ;
  // $sql2 = "SELECT m.memPic FROM `member` m JOIN `activity` a ON m.memNo = a.memNo where `actCancelStat`= '0' ORDER BY `actStartDate` DESC"  ;
  $sql = "select *,m.memPic from `activity` a JOIN `member` m  ON m.memNo = a.memNo  where `actCancelStat`= '0' ORDER BY `actStartDate` DESC";
	// $sql = "select * from `activity` `actCancelStat`= '0' ORDER BY where  `actStartDate` DESC"  ;
    // $activitys = $pdo->prepare($sql);
    // $activitys ->bindValue($sql);
    // $activitys ->execute();
    $activities = $pdo->query($sql);
    // $memPic = $pdo->query($sql2);

}catch(PDOException $e){
    $errMsg .= "錯誤訊息: ". $e->getMessage(). "<br>";
	  $errMsg .= "錯誤行號: ". $e->getLine(). "<br>";
	// echo "系統暫時有狀況，請.....";

}

  if($errMsg!==""){
      echo $errMsg;
  }elseif($activities->rowCount()==0){
      echo "活動為空";
    }else{
      $arr=array();
      while($actRow = $activities->fetch(PDO::FETCH_ASSOC)){
        //  echo "<pre>".print_r($actRow)."</pre>";
          array_push($arr,$actRow); 
        }
        // echo "<pre>".print_r($arr)."</pre>";
        // print_r($actRow);
        echo json_encode($arr);
        // print_r($arr);

  }


?>