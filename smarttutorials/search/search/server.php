<?php
/*
www.smarttutorials.net
author : muni 
*/
 error_reporting(0);
 ini_set('max_execution_time', 600);
 require_once 'config.php';
 
 
 if(isset($_GET["nm_mask"]))
     $nm_mask = $_GET['nm_mask'];
 else 
     $nm_mask = "";
 if(isset($_GET["cd_mask"])) 
     $cd_mask = $_GET['cd_mask'];
 else
     $cd_mask = "";
	 
 $where = "WHERE 1=1";
 if($nm_mask!='')
     $where.= " AND Country LIKE '$nm_mask%'";
 if($cd_mask!='')
     $where.= " AND LastName LIKE '$cd_mask%'";
	 

 
 $page = $_GET['page']; // get the requested page
 $limit = $_GET['rows']; // get how many rows we want to have into the grid
 $sidx = $_GET['sidx']; // get index row - i.e. user click to sort
 $sord = $_GET['sord']; // get the direction
 if(!$sidx) $sidx =1; // connect to the database
 $result = mysql_query("SELECT COUNT(*) AS count FROM employees ".$where);
 $row = mysql_fetch_array($result,MYSQL_ASSOC);
 $count = $row['count'];
 
 if( $count >0 ) { 
 $total_pages = ceil($count/$limit);
 } else { 
 $total_pages = 0; 
 } 
 if ($page > $total_pages) $page=$total_pages;
 if ($limit<0) $limit = 0; 
 $start = $limit*$page - $limit; // do not put $limit*($page - 1)
 if ($start<0) $start = 0;
 $SQL = "SELECT * from employees ". $where ." ORDER BY $sidx $sord LIMIT $start , $limit"; 
 $result = mysql_query( $SQL ) or die("Couldn?t execute query.".mysql_error());
 $responce->page = $page;
 $responce->total = $total_pages;
 $responce->records = $count; 
 $i=0;
 while($row = mysql_fetch_array($result,MYSQL_ASSOC)) { 
 $responce->rows[$i]['id']=$row[EmployeeID];
 $responce->rows[$i]['cell']=array($row['EmployeeID'],$row['LastName'],$row[FirstName],$row[BirthDate],$row[Address],$row['City'],$row['Region'],$row['Country'],""); $i++;
 } 
 echo json_encode($responce);

?>