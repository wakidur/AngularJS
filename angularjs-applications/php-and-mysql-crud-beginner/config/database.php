<?php
/************PDO **********************/
$host = 'localhost';
$db = 'angularjs';
$user = 'root';
$pass = '';

// For MySQL:
//$con = new PDO("mysql:host=$host;dbname=$db", $user, $pass);

 
try {
//    $con = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
      $con = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
}
 
// show error if database connection is fail
catch(PDOException $exception){
    echo "Connection error: " . $exception->getMessage();
}



?>
