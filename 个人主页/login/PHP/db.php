<?php

$mysql = new mysqli('localhost','root','','wuif1707','3306');

$mysql->query('set names utf8');


if($mysql->connect_errno){
	echo '数据库连接失败，失败信息'.$mysql->connect_errno;
	exit;
}