<?php

$errMsg="";
try{

  require_once("../connection.php");

	$sql = "select * from `chatbot`";
  $tags = $pdo->query($sql);

}catch(PDOException $e){

  
    $errMsg .= "錯誤訊息: ". $e->getMessage(). "<br>";
	  $errMsg .= "錯誤行號: ". $e->getLine(). "<br>";

}

if($errMsg!==""){
    echo $errMsg;
}elseif($tags->rowCount()==0){
    echo "無訊息";
  }else{
    $arr=array();
    // while($actRow = $activities->fetch(PDO::FETCH_ASSOC)){
    //   //  echo "<pre>".print_r($actRow)."</pre>";
    //     array_push($arr,$actRow); 
    //   }
    $tagData = $tags->fetchAll(PDO::FETCH_ASSOC);
      // echo "<pre>".print_r($arr)."</pre>";
      // print_r($actRow);
      echo json_encode($tagData);
      // print_r($arr);

}





?>