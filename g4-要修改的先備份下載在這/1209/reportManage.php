<?php 

$errMsg = "";
$repNo = $_POST["repNo"];
$repStat = $_POST["value"];

try{ 
    require_once("../../connection.php");
    $repSql="UPDATE `report` SET `repStat` ='$repStat' WHERE `repNo` ='$repNo'";
    $report =$pdo->prepare($repSql);
    $reportRows = $report->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($reportRows);
    $report->execute();
  

}catch(PDOException $e){
    echo $e->getMessage();
}







?>