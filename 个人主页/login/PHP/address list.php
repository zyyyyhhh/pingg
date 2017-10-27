<?php
header('Content-type:text/html;charset = utf8'); // 告诉浏览器以html  ->  == js 的.   //  . 类似于 js中 +
$mysql = new mysqli('localhost','root','','wuif1707','3306');

$mysql->query('set names utf8');   //

if($mysql->connect_errno){
	echo '数据库连接失败，失败信息'.$mysql->connect_errno;
	exit;
}

$sql = "select * from addre list";

$mysql->query($sql);  //执行sql语句

$result = $mysql->query($sql);

$data = $result->fetch_all(MYSQL_ASSOC);

echo json_encode($data);
