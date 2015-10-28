<?php

$json = file_get_contents('php://input');
$data = json_decode($json);
//$text = print_r($data,true);
file_put_contents("001.txt", $json);

/*
$file_name='001.txt';
$file = fopen($file_name, "w") or die("OPEN error $file_name");
flock($file, LOCK_EX);
fwrite($file, $data);
flock($file, LOCK_UN);
fclose($file);
*/
?>
