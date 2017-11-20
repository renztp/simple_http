<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
$str = array(array('Name' => 'Renz', 'Age' => 25, 'Gender' => 'Male', 'Class' => 'Swordsmen'
));
$json = json_encode($str, true);
echo $json;