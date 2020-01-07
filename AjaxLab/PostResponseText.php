<?php
try{
  require_once("connectBooks.php");

  if( $member->rowCount() !=0){
    echo "exist";
  }else{
    echo "ok";
  } 
}catch(PDOException $e){
  echo "error";
}
?>