<?php


header('Content-type:text/html;charset=utf8'); // 告诉浏览器以html  ->  == js 的.   //  . 类似于 js中 +
$mysql = new mysqli('localhost','root','','wuif1707','3306');

$mysql->query('set names utf8');
if($mysql->connect_errno){
	echo '数据库连接失败，失败信息'.$mysql->connect_errno;
	exit ;
}
$value = $_GET['value'];
$info = $_GET['info'];
$uid = $_GET['uid'];
echo $value , $info, $uid;
$sql = "update manager set $info='$value' where id =$uid ";
$mysql->query($sql);


//echo $mysql->insert_id

//affected_rows  影响几行
if($mysql->affected_rows){
	echo true;
}else{
	echo false;
}