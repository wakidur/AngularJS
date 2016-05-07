<?php
//database settings
$connect = mysqli_connect("localhost", "root", "", "angularjs");

$result = mysqli_query($connect, "select * from students");

$data = array();

while ($row = mysqli_fetch_assoc($result)) {
  $data[] = $row;
  //echo json_encode($data); 
  //echo "<br>";
}
//print_r($data);
//$data = array(1,2,3,4,5);
    echo json_encode($data);
 
    
?>