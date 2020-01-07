<?php

$actStartDate= $_POST['startDate'];
$actEndDate= $_POST['endDate'];

// 怎麼print r?????

// $actNo=6;
// echo $actEndDate;


$errMsg = "";
try {
	
    require_once("../connection.php");

    $sql = "SELECT * 
            FROM `activity` 
            WHERE `actStartDate` 
            BETWEEN '{$actStartDate}' AND '{$actEndDate}'";
    
    // echo print_r($actEndDate);

    $activities = $pdo->query($sql);
    $arr = $activities->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($arr);
    // $arr=array();

    // while($actRow = $activities->fetch(PDO::FETCH_ASSOC)){
    //     array_push($arr,$actRow); 
    // }
    
    // echo json_encode($arr);


}catch(PDOException $e){
    $errMsg .= "錯誤訊息: ". $e->getMessage(). "<br>";
    $errMsg .= "錯誤行號: ". $e->getLine(). "<br>";
    echo $errMsg;
	
}

//   if($errMsg!==""){
//       echo $errMsg;
//   }elseif($activities->rowCount()==0){
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
//         while($actRow = $activities->fetch(PDO::FETCH_ASSOC)){
//             array_push($arr,$actRow); 
//         }
       
//         echo json_encode($arr);

        
//   }


?>