<?php
try{
  require_once("connectBooks.php");


  if( $member->rowCount()==0){ //查無此人
	  echo "exist";
  }else{ //登入成功
    //自資料庫中取回資料


    //送出登入者的姓名資料
  }
}catch(PDOException $e){
  echo $e->getMessage();
}
?>