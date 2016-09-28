<?php
$errors = array();
$data = array();
// Getting posted data and decodeing json
$_POST = json_decode(file_get_contents('php://input'), true);

// checking for blank values.
if (empty($_POST['user']))
  $errors['user'] = 'Name is required.';

if (empty($_POST['email']))
  $errors['email'] = 'Email is required.';

if (empty($_POST['password']))
  $errors['password'] = 'password is required.';

if (!empty($errors)) {
  $data['errors']  = $errors;
} else {
  $data['message'] = 'Form data is going well';
}
// response back.
echo json_encode($data);


?>