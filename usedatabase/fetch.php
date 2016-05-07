<?php
//database settings
$connect = mysqli_connect("localhost", "root", "", "angularjs");

$result = mysqli_query($connect, "select * from employ");

$data = array();

while ($row = mysqli_fetch_array($result)) {
  $data[] = $row;
  echo $row;
}
    print json_encode($data);
?>