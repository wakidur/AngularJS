<?php
/**
 * @filesource : submit.php
 * @author : Shabeeb  <mail@shabeeb.com>
 * @abstract : simple submission php form
 * @package sample file 
 * @copyright (c) 2014, Shabeeb
 * 
 * 
 *  */
 
$post_date = file_get_contents("php://input");
$data = json_decode($post_date);
 
 
//saving to database
//save query
print_r($data->formData);
//now i am just printing the values
//echo "company_name : ".$data->company_name."n";
//echo "Email : ".$data->email."n";
//echo "phone_number : ".$data->phone_number."n";
//echo "address : ".$data->address."n";
//echo "category : ".$data->category."n";
//echo "servicee : ".$data->service."n";
//echo "service_area_zip : ".$data->service_area_zip."n";
//echo "working_hourse : ".$data->working_hours."n";
//echo "password : ".$data->password."n";

 
?>