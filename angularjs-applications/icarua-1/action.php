<?php

//to run PHP script on submit
if (!empty($_POST['services'])) {
// Loop to store and display values of individual checked checkbox.
        foreach ($_POST['services'] as $selected) {
            echo $selected . "</br>";
        }
    }

$post_date = file_get_contents("php://input");
$data = json_decode($post_date);
/*Convert Object to array*/
foreach($data as $weekcode => $weekname){
$selectedweek[$weekcode] = $weekname; 
};
/*Pass the selected week array back to angularjs for confirmation*/
print_r($selectedweek);
 
 
//saving to database
//save query
 
//now i am just printing the values
echo "company_name : ".$data->company_name. "\n";
echo "email : ".$data->email."\n";
echo "phone_number : ".$data->phone_number."\n";
echo "address : ".$data->address."\n";
echo "phone_number : ".$data->phone_number."\n";
//echo "services : ".$txtWeek."\n";
echo "service_area_zip : ".$data->service_area_zip."\n";
echo "working_hours : ".$data->working_hours."\n";
echo "password : ".$data->password."\n";





?>