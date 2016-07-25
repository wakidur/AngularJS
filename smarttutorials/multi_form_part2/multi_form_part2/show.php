<?php
$to = "muni2explore@gmail.com";
$subject = "Sampl Mail";
$from = $_POST['email'];
$mail_body = "<!DOCTYPE html>
<html>
<head>
	<title>Demo HTML5 Border</title>
	<meta charset='utf-8'>
	<style>
	    table,th, td
		{
		   border: 1px solid black;
		}
		td{
		  padding: 30px;
		}
	</style>
</head>
<body>
	<table style='border-collapse:collapse; width:500px;'>
	   <tr>
	      <th>Demo HTML5 Border</th>
	   </tr>
	   <tr>
	      <td>First Name :</td>
	      <td>".$_POST['first_name']."</td>
	   </tr>
	   <tr>
	      <td>Last Name :</td>
	      <td>".$_POST['last_name']."</td>
	   </tr>
	   <tr>
	      <td>E-Mail :</td>
	      <td>".$_POST['email']."</td>
	   </tr>
	   <tr>
	      <td>Phone :</td>
	      <td>". $_POST['phone']."</td>
	   </tr>
	   <tr>
	      <td>Street Name :</td>
	      <td>".$_POST['street_name']."</td>
	   </tr>
	   <tr>
	      <td>City Name :</td>
	      <td>".$_POST['city_name']."</td>
	   </tr>
	   <tr>
	      <td>State Name :</td>
	      <td>".$_POST['state_name']."</td>
	   </tr>
	   <tr>
	      <td>Country Name :</td>
	      <td>".$_POST['country_name']."</td>
	   </tr>
	   <tr>
	      <td>Zip Code :</td>
	      <td>".$_POST['zip_code']."</td>
	   </tr>
	   
	   
	   <tr>
	      <td>Hobbies :</td>
	      <td>".$_POST['hobbies']."</td>
	   </tr>
	   <tr>
	      <td>Book :</td>
	      <td>".$_POST['book']."</td>
	   </tr>
	   <tr>
	      <td>Place :</td>
	      <td>".$_POST['place']."</td>
	   </tr>
	</table>
</body>
</html>";

    $headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";

	// More headers
	$headers .= 'From: <admin@smarttutorials.net>' . "\r\n";
	

	if(mail($to,$subject,$mail_body,$headers))
	{
	    echo "Mail Sent.";
	}		

?>