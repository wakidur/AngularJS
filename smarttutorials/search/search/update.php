<?php

/*
www.smarttutorials.net
author : muni 
*/

require_once 'config.php'; 

 $id = $_POST['id'];

  //This contains the data that will update the db
 $LastName = $_POST['LastName'];
 $FirstName = $_POST['FirstName'];
 $BirthDate = $_POST['BirthDate'];
 $Address = $_POST['Address'];
 $City = $_POST['City'];
 $Region = $_POST['Region'];
 $Country = $_POST['Country'];
 
 mysql_query("UPDATE employees SET LastName='$LastName',FirstName='$FirstName',BirthDate='$BirthDate',Address='$Address',City='$City',Region='$Region',Country='$Country' where EmployeeID=$id")
 or die(mysql_error());
 mysql_close($db);
 
?>