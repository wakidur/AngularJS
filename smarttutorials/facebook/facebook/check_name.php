<?php

/*
 * Site : http:www.smarttutorials.net
 * Author :muni
 * 
 */
 require_once 'config.php';

 if(!empty($_POST['name'])){
     $name=$_POST['name'];
     $res=mysql_query("select count(name) as count from users where name='$name'") or die(mysql_error()); 
     $count=mysql_fetch_array($res);
     if($count[0]==0){
         echo 'true';
     }else{
         echo 'false';
     }
 }
 
 if(isset($_POST['flag'])){
     $like_id=$_POST['id'];
     $user_id=$_POST['user_id'];
     $res=mysql_query("select count(*) as count from user_likes where like_id=$like_id and user_id=$user_id") or die(mysql_error()); 
     $count=mysql_fetch_array($res);
     echo $count[0];
 }
 
 if(isset($_POST['flag1'])){
     $like_id=$_POST['id'];
     $user_id=$_POST['user_id'];
     
     $res=mysql_query("select count(*) as count from user_likes where like_id=$like_id and user_id=$user_id") or die(mysql_error()); 
     $count=mysql_fetch_array($res);
     $count[0];
     
     if($count[0]==0){
         mysql_query("INSERT INTO user_likes (id, like_id,user_id)VALUES ('NULL','$like_id','$user_id')") or die(mysql_error());
         mysql_query("update likes set count=count+1 where id=$like_id") or die(mysql_error()); 
        $res=mysql_query("select count from likes where id=$like_id") or die(mysql_error()); 
        $count=mysql_fetch_array($res);
        echo $count[0];
     }else{
         mysql_query("DELETE FROM user_likes where like_id=$like_id and user_id=$user_id") or die(mysql_error());
         mysql_query("update likes set count=count-1 where id=$like_id") or die(mysql_error()); 
         $res=mysql_query("select count from likes where id=$like_id") or die(mysql_error()); 
         $count=mysql_fetch_array($res);
         echo $count[0];    
     }
         
 }
?>