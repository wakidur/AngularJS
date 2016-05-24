<?php require_once 'config.php';?>

<?php
    $data=$_POST['data'];
	$result=mysql_query("SELECT * FROM auto where data LIKE '$data%'");
	$data=array();
	while($response=mysql_fetch_array($result)){
		array_push($data,$response['data']);
	}
	echo json_encode($data);

?>