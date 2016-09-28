<?php

$data = json_decode(file_get_contents("php://input"));

$uemail = mysql_real_escape_string($data->email);
$upswd = mysql_real_escape_string($data->password);



$con = mysql_connect('localhost', 'root', '');
mysql_select_db('angularjs', $con);

$qry_em = 'select * from user where email ="' . $uemail . '" and password ="' . $upswd . '"';
$qry_res = mysql_query($qry_em);
$res = mysql_fetch_assoc($qry_res);

//print_r($res);

if ($res) {
    //echo 'data aise ';

    $data = array(
        'name' => 'Waki',
        'id' => 1,
        'status' => True
    );

    $_SESSION = $data;
    // echo json_encode($_SESSION);
    //print_r(); die();
    $arr = array(
        'id' => 1,
        'user' => $res["user"],
        'email' => $res["email"],
        'status' => TRUE
    );
    $data = json_encode($arr);

    echo $data;
} else {
    //  echo 'data nai ';

    $arr = array(
        'status' => FALSE,
        'error' => 'Not a valid user'
    );
    $data = json_encode($arr);

    echo $data;
}