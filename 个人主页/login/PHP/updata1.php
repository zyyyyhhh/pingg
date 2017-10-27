<?php

/**
 * @Author: Machenike
 * @Date:   2017-10-23 17:58:15
 * @Last Modified by:   dell
 * @Last Modified time: 2017-10-25 18:16:15
 */
header('Content-type:text/html;charset=utf8'); // 告诉浏览器以html  ->  == js 的.   //  . 类似于 js中 +
$mysql = new mysqli('localhost','root','','wuif1707','3306');

$mysql->query('set names utf8');
if($mysql->connect_errno){
	echo '数据库连接失败，失败信息'.$mysql->connect_errno;
	exit ;
}
$value = $_GET['value'];
$info = $_GET['info'];
$id = $_GET['id'];
echo $value , $info, $id;
$sql = "update addre list set $info='$value' where id =$id ";
$mysql->query($sql);


//echo $mysql->insert_id

//affected_rows  影响几行
if($mysql->affected_rows){
	echo true;
}else{
	echo false;
}