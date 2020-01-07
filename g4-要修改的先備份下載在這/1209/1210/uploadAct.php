<?php

$errMsg="";
try{
      require_once("../connection.php");
      $pdo->beginTransaction();

      $fileName = $_FILES["hidden_data"]["name"];
      $from = $_FILES["hidden_data"]["tmp_name"];
      $to = "../images/$fileName";
      echo $from, "<br>";
      echo $to, "<br>";
      // exit();
      
      if(copy($from, $to)==true){
       
        echo "$fileName";
        $pdo->commit();   
      }else{
        echo"error";
        $pdo->rollBack();
      }
}catch (PDOException $e){
  $errMsg .= "錯誤 : ".$e -> getMessage()."<br>";
  $errMsg .= "行號 : ".$e -> getLine()."<br>";
  echo $errMsg;
}

?>


