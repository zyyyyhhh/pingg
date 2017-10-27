<?php

include 'db.php';

$user = $_POST['user'];
$pass = $_POST['pass'];

$sql = "select * from manager";

 $result = $mysql -> query($sql);
 
 $data = $result ->fetch_all(MYSQL_ASSOC);

 for($i=0;$i<count($data);$i++){
 	if($data[$i]['uuser'] == $user && $data[$i]['upass'] == $pass){

 		$massage = '登陆成功!';
 		$url = 'main.php';
 		include '../massage.html';
 		exit();
 	}
 }

   $massage = '登陆失败';
   $url = 'login.php';
   include '../massage.html';