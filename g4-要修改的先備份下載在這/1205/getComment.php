<?php


$actNo= $_GET['actNo'];
// $actNo=6;

$errMsg = "";
try {


    require_once("../connection.php");
    
    // $sql = "select * from `comment` where actNo={$actNo}";
    // $sql2 = "SELECT m.memNickName , m.memPic FROM `member`m JOIN `comment` a ON m.memNo = a.memNo WHERE a.actNo = {$actNo}";
    // // $sql3= "SELECT m.memNickName , m.memPic FROM `member`m JOIN `joinlist` a ON m.memNo = a.memNo WHERE a.actNo = {$actNo}";


    // $comment = $pdo->query($sql);
    // $avatar = $pdo->query($sql2);

    $sql = "SELECT c.comNo, c.actNo, c.memNo, c.comContent, c.comDate, m.memNickName, m.memPic FROM comment c 
    join `member` m on c.memNo = m.memNo WHERE c.actNo = {$actNo}";
    $comment = $pdo->query($sql);
   
    echo json_encode($comment->fetchAll(PDO::FETCH_ASSOC));

}catch(PDOException $e){
    $errMsg .= "錯誤訊息: ". $e->getMessage(). "<br>";
	$errMsg .= "錯誤行號: ". $e->getLine(). "<br>";
	echo $errMsg;
}


exit();
//   if($errMsg!==""){
//       echo $errMsg;
//   }elseif($comment->rowCount()==0){
//       echo "活動為空";
//  }else{
//     //   $arr=array();
//     //   while($actRow = $activities->fetch(PDO::FETCH_ASSOC)){
//     //     //  echo "<pre>".print_r($actRow)."</pre>";
//     //       array_push($arr,$actRow); 
//     //     }
//     //     // echo "<pre>".print_r($arr)."</pre>";
//     //     // print_r($actRow);
//     //     echo json_encode($arr);
//     //     // print_r($arr);
//         $arr=array();

//         // echo json_encode($avatarRow = $avatar->fetch(PDO::FETCH_ASSOC));

//         // ----------------------------------------
//         // while($commentRow = $comment->fetch(PDO::FETCH_ASSOC) && $avatarRow = $avatar->fetch(PDO::FETCH_ASSOC)){
//         //     // echo "hello";
//         // //    $result = array_merge($commentRow,$avatarRow);
//         //    $result = array_merge_recursive($commentRow,$avatarRow);

//         //    array_push($arr,$result);
           
//         // };
//         // // while($avatarRow = $avatar->fetch(PDO::FETCH_ASSOC)){

//         // // }
      
//         // echo json_encode($arr);

//         // ---------------------------------------------------------
//         $commentRow = $comment->fetchAll(PDO::FETCH_ASSOC);
//         $avatarRow = $avatar->fetchAll(PDO::FETCH_ASSOC);
//         $result = array_merge($commentRow,$avatarRow);
        
//         echo json_encode($result);

//         // ------------------------------------
//         // $arr1=array();
//         // $arr2=array();

//         // while($commentRow = $comment->fetch(PDO::FETCH_ASSOC)){

//         //     array_push($arr1,$commentRow);
//         // };

//         // // echo json_encode($arr1);

//         // while($avatarRow = $avatar->fetch(PDO::FETCH_ASSOC)){

//         //     array_push($arr2,$avatarRow);
//         // }

//         // echo json_encode($arr2);

//         // $arr = array_push($arr1,$arr2);
//         //  echo json_encode($arr);
//                 }



?>