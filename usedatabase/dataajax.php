<?php
error_reporting(1);
//database settings
$connect = mysqli_connect("localhost", "root", "", "angularjs");
echo $connect;
$result = mysqli_query($connect, "select * from students");
echo $result;
$data = array();

while ($row = mysqli_fetch_array($result)) {
  $data[] = $row;
}
    print json_encode($data);
    print_r($data);
    
?>
