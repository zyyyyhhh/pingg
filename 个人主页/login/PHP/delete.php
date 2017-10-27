<?php

$mysql = new mysqli('localhost','root','','wuif1707','3306');

$mysql->query('set names utf8');

$id = $_GET['uid'];

if($mysql->connect_errno){
	echo '数据库连接失败，失败信息'.$mysql->connect_errno;
	exit;
}

$sql = "delete from manager where uid = $id";

  $mysql->query($sql);
  if($mysql->affected_rows){
	echo 1;
  }else{
	echo 0;
  }