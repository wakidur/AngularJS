<?php
require_once 'config.php';

if($_POST['name']=='username'){
    $id=$_POST['pk'];
    $username=$_POST['value'];
    $result=mysql_query("SELECT COUNT(*) as count FROM sample WHERE id=$id") or die(mysql_error());
    $count= mysql_fetch_row($result);
    if($count[0]==0){
       mysql_query("INSERT INTO sample(id,username) VALUES('".$id."','".$username."')") or die(mysql_error()); 
    }else{
       mysql_query("UPDATE sample SET username='".$username."' WHERE id=$id") or die(mysql_error()); 
    }
    
}
if($_POST['name']=='comments'){
    $id=$_POST['pk'];
    $comments=$_POST['value'];
    $result=mysql_query("SELECT COUNT(*) as count FROM sample WHERE id=$id") or die(mysql_error());
    $count= mysql_fetch_row($result);
    if($count[0]==0){
       mysql_query("INSERT INTO sample(id,comments) VALUES('".$id."','".$comments."')") or die(mysql_error()); 
    }else{
       mysql_query("UPDATE sample SET comments='".$comments."' WHERE id=$id") or die(mysql_error()); 
    }
    
}

if($_POST['name']=='country'){
    $id=$_POST['pk'];
    $country=$_POST['value'];
    $result=mysql_query("SELECT COUNT(*) as count FROM sample WHERE id=$id") or die(mysql_error());
    $count= mysql_fetch_row($result);
    if($count[0]==0){
       mysql_query("INSERT INTO sample(id,country_name) VALUES('".$id."','".$country."')") or die(mysql_error()); 
    }else{
       mysql_query("UPDATE sample SET country_name='".$country."' WHERE id=$id") or die(mysql_error()); 
    }
    
}

if($_POST['name']=='dob'){
    $id=$_POST['pk'];
    $dob=$_POST['value'];
    $result=mysql_query("SELECT COUNT(*) as count FROM sample WHERE id=$id") or die(mysql_error());
    $count= mysql_fetch_row($result);
    if($count[0]==0){
       mysql_query("INSERT INTO sample(id,dob) VALUES('".$id."','".$dob."')") or die(mysql_error()); 
    }else{
       mysql_query("UPDATE sample SET dob='".$dob."' WHERE id=$id") or die(mysql_error()); 
    }
    
}
if($_POST['name']=='appt'){
    $id=$_POST['pk'];
    $appt=$_POST['value'];
    $result=mysql_query("SELECT COUNT(*) as count FROM sample WHERE id=$id") or die(mysql_error());
    $count= mysql_fetch_row($result);
    if($count[0]==0){
       mysql_query("INSERT INTO sample(id,appt) VALUES('".$id."','".$appt."')") or die(mysql_error()); 
    }else{
       mysql_query("UPDATE sample SET appt='".$appt."' WHERE id=$id") or die(mysql_error()); 
    }
    
}
if($_POST['name']=='combo'){
    $id=$_POST['pk'];
    $combo=$_POST['value'];
    $result=mysql_query("SELECT COUNT(*) as count FROM sample WHERE id=$id") or die(mysql_error());
    $count= mysql_fetch_row($result);
    if($count[0]==0){
       mysql_query("INSERT INTO sample(id,combo_appt) VALUES('".$id."','".$combo."')") or die(mysql_error()); 
    }else{
       mysql_query("UPDATE sample SET combo_appt='".$combo."' WHERE id=$id") or die(mysql_error()); 
    }
    
}
if($_POST['name']=='email'){
    $id=$_POST['pk'];
    $email=$_POST['value'];
    $result=mysql_query("SELECT COUNT(*) as count FROM sample WHERE id=$id") or die(mysql_error());
    $count= mysql_fetch_row($result);
    if($count[0]==0){
       mysql_query("INSERT INTO sample(id,email) VALUES('".$id."','".$email."')") or die(mysql_error()); 
    }else{
       mysql_query("UPDATE sample SET email='".$email."' WHERE id=$id") or die(mysql_error()); 
    }
    
}
if($_POST['name']=='options'){
    $id=$_POST['pk'];
    $options=$_POST['value'];
    $result=mysql_query("SELECT COUNT(*) as count FROM sample WHERE id=$id") or die(mysql_error());
    $count= mysql_fetch_row($result);
    if($count[0]==0){
       mysql_query("INSERT INTO sample(id,options) VALUES('".$id."','".$options."')") or die(mysql_error()); 
    }else{
       mysql_query("UPDATE sample SET options='".$options."' WHERE id=$id") or die(mysql_error()); 
    }
    
}
if($_POST['name']=='wy'){
    $id=$_POST['pk'];
    $text=htmlspecialchars($_POST['value']);
    $result=mysql_query("SELECT COUNT(*) as count FROM sample WHERE id=$id") or die(mysql_error());
    $count= mysql_fetch_row($result);
    if($count[0]==0){
       mysql_query("INSERT INTO sample(id,wy_text) VALUES('".$id."','".$text."')") or die(mysql_error()); 
    }else{
       mysql_query("UPDATE sample SET wy_text='".$text."' WHERE id=$id") or die(mysql_error()); 
    }
    
}




?>