<?php

$dsn="mysql:host=localhost;prot=3306;dbname=dd103g4;charset=utf8";
$user="dd103g4";
$psw="dd103g4";
$options=array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION, PDO::ATTR_CASE=>PDO::CASE_NATURAL);
$pdo=new PDO($dsn,$user,$psw,$options);

?>