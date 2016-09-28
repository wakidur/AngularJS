<?php
 
$data = json_decode(file_get_contents("php://input"));
$usrname = mysql_real_escape_string($data->user);
$uemail = mysql_real_escape_string($data->email);
$upswd = mysql_real_escape_string($data->password);

 
$con = mysql_connect('localhost', 'root', '');
mysql_select_db('angularjs', $con);
 
$qry_em = 'select count(*) as cnt from user where email ="' . $uemail . '"';
$qry_res = mysql_query($qry_em);
$res = mysql_fetch_assoc($qry_res);
 
if ($res['cnt'] == 0) {
    $qry = 'INSERT INTO user (user,email,password) values ("' . $usrname . '","'. $uemail .  '","' . $upswd . '")';
    $qry_res = mysql_query($qry);
    if ($qry_res) {
        $arr = array('msg' => "User Created Successfully!!!", 'error' => '');
        $jsn = json_encode($arr);
        print_r($jsn);
    } else {
        $arr = array('msg' => "", 'error' => 'Error In inserting record');
        $jsn = json_encode($arr);
        print_r($jsn);
    }
} else {
    $arr = array('msg' => "", 'error' => 'User Already exists with same email');
    $jsn = json_encode($arr);
    print_r($jsn);
}
?>