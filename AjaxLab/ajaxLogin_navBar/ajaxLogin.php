<?php

try{
  require_once("connectBooks.php");
  $sql = "select * from member where memId=:memId and memPsw=:memPsw";

}catch(PDOException $e){
  echo $e->getMessage();
  //echo "系統異常,請通知系統維護人員";	
}
?>