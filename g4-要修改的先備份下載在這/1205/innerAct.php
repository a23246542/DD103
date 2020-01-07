<?php

$actNo= $_GET['actNo'];
// $actNo=6;



$errMsg = "";
try {
	// $dsn = "mysql:host=localhost;port=3306;dbname=g4;charset=utf8";
	// $user = "root";
	// $password = "no512seed851";
	// $options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION, PDO::ATTR_CASE=>PDO::CASE_NATURAL);
	// $pdo = new PDO($dsn, $user, $password, $options);
    // require_once("../connection.php");
    require_once("../connection.php");
    
    $sql = "select * from `activity` where actNo={$actNo}";
    $sql2 = "SELECT m.memNickName , m.memPic FROM `member` m JOIN `activity` a ON m.memNo = a.memNo WHERE a.actNo = {$actNo}";
    $sql3= "SELECT m.memNickName , m.memPic FROM `member` m JOIN `joinlist` a ON m.memNo = a.memNo WHERE a.actNo = {$actNo}";

    // $innerAct = $pdo->prepare($sql);
    // $innerAct ->bindValue($sql);
    // $innerAct ->execute();
    $activities = $pdo->query($sql);
    $initiator = $pdo->query($sql2);
    $attendee = $pdo->query($sql3);
    // echo $nickName;

}catch(PDOException $e){
    $errMsg .= "錯誤訊息: ". $e->getMessage(). "<br>";
	$errMsg .= "錯誤行號: ". $e->getLine(). "<br>";
	
}

  if($errMsg!==""){
      echo $errMsg;
  }elseif($activities->rowCount()==0){
      echo "活動為空";
 }else{
    //   $arr=array();
    //   while($actRow = $activities->fetch(PDO::FETCH_ASSOC)){
    //     //  echo "<pre>".print_r($actRow)."</pre>";
    //       array_push($arr,$actRow); 
    //     }
    //     // echo "<pre>".print_r($arr)."</pre>";
    //     // print_r($actRow);
    //     echo json_encode($arr);
    //     // print_r($arr);
        $arr=array();
        $actRow = $activities->fetch(PDO::FETCH_ASSOC);
        $initMem = $initiator->fetch(PDO::FETCH_ASSOC);
        $attendMem = $attendee->fetchAll(PDO::FETCH_ASSOC);
        // echo json_encode($nickObj);
        $arr["inner"]=$actRow;
        $arr["initMem"]=$initMem;
        $arr["attendMem"]=$attendMem;
        // array_push($arr,$actRow);
        // array_push($arr,$initMem);
        // array_push($arr,$attendMem);
        echo json_encode($arr,true);
  }







?>