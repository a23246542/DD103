
<?php
session_start();
$memNo=$_SESSION["memNo"];
$errMsg="";



    require_once("../connection.php");
    
    //撈我舉辦的所有活動
    //$sql = "select * from `activity` where memNo='$_SESSION[memNo]'";
    $sql = "select actName,actStartDate from `activity` where memNo=$memNo";

    //我報名的活動
    //$sql="select * from `member` m join `activity` a ON a.memNo= m.memNo join `joinlist` j on  a.actNo = j.actNo";

    $statement=$pdo->query($sql);
    
    $statement->execute();

    //$result = $statement ->fetchAll();

    foreach($statement as $row){
        $data=array(
            'title' =>$row["actName"],
            'start' =>$row["actStartDate"]
            
        );
        
    echo json_encode($data,JSON_UNESCAPED_UNICODE);}

    // foreach($result as $row){
    //     $data[]=array(
    //         'title' =>$row["actName"],
    //         'start' =>$row["actStartDate"]
            
    //     );
    //     echo json_encode($data,JSON_UNESCAPED_UNICODE);}
    

    ?>
