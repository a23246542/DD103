<?php
// if(isset($_POST)&&!empty($_POST)){
//     echo json_encode($_POST);
//     exit;
// }

// header('Content-Type: application/json; charset=UTF-8');

// $actNo= $_GET['actNo'];
// $str = file_get_contents("php://input");

$actNo = $_POST['actNo'];
$memNo = $_POST['memNo'];
$comContent = $_POST['comContent'];
// $comDate = $_POST['comDate'];

// $obj = json_decode($_POST['msgStr']);
// $obj = json_decode($str,true);
// echo $comDate;
// echo $comContent;
// echo $obj;
// echo $str["actNo"];






// $sql = "INSERT INTO `activity`(`actNo`,`memNickName`,`comContent`) VALUES ()";

$errMsg = "";
try {
    // $dsn = "mysql:host=localhost;port=3306;dbname=g4;charset=utf8";
	// $user = "root";
	// $password = "no512seed851";
	// $options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION, PDO::ATTR_CASE=>PDO::CASE_NATURAL);
    // $pdo = new PDO($dsn, $user, $password, $options);
    require_once("../connection.php");
    
    $sql = "INSERT INTO `comment`(`actNo`,`memNo`,`comContent`) VALUES (:actNo,:memNo,:comContent)";
    $sql2 = "UPDATE `activity` SET `comNum` = `comNum`+1 WHERE `actNo` = {$actNo}";
    $innerAct = $pdo->prepare($sql);
    $innerAct ->bindValue(":actNo",$actNo);
    $innerAct ->bindValue(":memNo",$memNo);
    $innerAct ->bindValue(":comContent",$comContent);
    // $innerAct ->bindValue(":comDate",$comDate);
    // $innerAct ->bindValue(":actNo",$_POST['actNO']);
    // $innerAct ->bindValue(":memNickName",$_POST['memNickName']);
    // $innerAct ->bindValue(":comContent",$_POST['comContent']);
    $innerAct ->execute();
    $pdo->exec($sql2);
    // echo "hello";
    // $innerAct = $pdo->exec($sql);

}catch(PDOException $e){
    $errMsg .= "錯誤訊息: ". $e->getMessage(). "<br>";
    $errMsg .= "錯誤行號: ". $e->getLine(). "<br>";
    // echo $errMsg;
	
}

 
?>