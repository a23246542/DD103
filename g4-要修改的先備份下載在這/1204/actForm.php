<?php
echo "<pre>"; print_r($_POST); echo "</pre>";
    $errMsg="";
    try{
        // header('content-type:application.json')
        // $actPic=$_POST["act_img"];
        $actName=$_POST["act_title"];
        $actLoc=$_POST["act_location"];
        $actZone=$_POST["act_region"];
        $actContent=$_POST["act_content"];
        $actStartDate=$_POST["act_date"];
        $actTime=$_POST["act_time"];
        $actDeadLine=$_POST["act_DeadLineDate"];
        $typeNo=$_POST["act_type"];
        $actStren=$_POST["act_stren"];
        $actLimit=$_POST["act_limit"];
        $memNo=$_POST["memNo"];



        // $dsn = "mysql:host=localhost;port=3306;dbname=g4;charset=utf8";
        // $user = "root";
        // $password = "no512seed851";
        // $options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION, PDO::ATTR_CASE=>PDO::CASE_NATURAL);
        // $pdo = new PDO($dsn, $user, $password, $options);
        // require_once("connect.php");
        require_once("../connection.php");
        $dir = "./images/bike1.jpg";
        // $sql="insert into `activity` actName=:actName,actLoc=:actLoc";
        $sql="INSERT INTO `activity` ( 
        `typeNo`, 
        `memNo`, 
        `actName`,
         `actLoc`, 
         `actZone`, 
         `actStren`, 
         `actLimit`, 
        --  `actTotal`, 
         `actContent`,
          `actStartDate`, 
          `actTime`,
           `actEndDate`, 
           `actFoundDate`, 
           `actDeadLine`, 
           `actCancelStat`,
           `actPic`)
            VALUES (:typeNo,:memNo,:actName,:actLoc,:actZone,:actStren,:actLimit,:actContent,:actStartDate,:actTime,NULL,NULL,:actDeadLine,'0',:actPic)";
        
        $bikeAct = $pdo->prepare($sql);
        // $bikeAct->bindValue(":actPic",$_POST['act_img']);
        $bikeAct->bindValue(":actName",$actName);
        $bikeAct->bindValue(":memNo",$memNo);
        $bikeAct->bindValue(":actLoc",$actLoc);
        $bikeAct->bindValue(":actZone",$actZone);
        $bikeAct->bindValue(":actContent",$actContent);
        $bikeAct->bindValue(":actStartDate",$actStartDate);
        $bikeAct->bindValue(":actTime",$actTime);
        $bikeAct->bindValue(":actDeadLine",$actDeadLine);
        $bikeAct->bindValue(":typeNo",$typeNo);
        $bikeAct->bindValue(":actStren",$actStren);
        $bikeAct->bindValue(":actLimit",$actLimit);
        $bikeAct->bindValue(":actPic",$dir);
        $bikeAct->execute();

        // $bikeAct->execute(array(
        //     ':actPic'=> $actPic,
        //     ':actName' => $actName,
        //     ':actLoc' => $actLoc,
        //     ':actContent' => $actContent,
        //     ':actStarDate' => $actStartDate,
        //     ':actTime' => $actTime,
        //     ':actDeadLine' => $actDeadLine,
        //     ':typeNo' => $typeNo,
        //     ':actStren' => $actStren,
        //     ':actLimit' => $actLimit,
        // ));


        if($_POST['act_title']){
            echo "php接收成功";
            // $data="";
            // $data.=$actName;
            // // echo "${actLoc}";
            // echo "${actZone}";
            // echo "$"
        }else{
            echo "php接收失敗";
        }
    }catch(PODException $e){
        $errMsg .= "錯誤訊息: ". $e->getMessage(). "<br>";
	    $errMsg .= "錯誤行號: ". $e->getLine(). "<br>";

    }

    // header('content-type:application.json')
    //  $actPic=$_POST['act_img'];
    //  $actName=$_POST['act_title'];
    //  $actLoc=$_POST['act_location'];
    //  $actZone=$_POST['act_region'];
    //  $actContent=$_POST['act_content'];
    //  $actStartDate=$_POST['act_Date'];
    //  $actTime=$_POST['act_time'];
    //  $actDeadLine=$_POST['act_DeadLineDate'];
    //  $TypeNo=$_POST['act_type'];

    

    // if($actName){
    //     $data = array(
    //         "json_msg"=>'success',
    //         )
            
    //     }else{
    //         $data = array(
    //             "json_msg"=>'false',
    //             "json_txt"=>'後台php發生錯誤'
    //     )
    // }
    
    // echo json_encode($data);

?>