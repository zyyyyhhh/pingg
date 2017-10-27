<?php

include 'db.php';

$sql = "insert into manager (uuser,upass) VALUES('','')";
$mysql -> query($sql);
echo $mysql ->insert_uid;