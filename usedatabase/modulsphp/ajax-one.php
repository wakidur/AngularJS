<?php
//database settings
$connect = mysqli_connect("localhost", "root", "", "angularjs");
$result = mysqli_query($connect, "select * from students");
$data = array();
while ($row = mysqli_fetch_assoc($result)) {
  $data[] = $row;
  
}
    echo json_encode($data);  
?>