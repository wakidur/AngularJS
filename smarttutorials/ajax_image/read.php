<?php
// include database and object files
include_once 'config/database.php';
include_once 'objects/product.php';
 
// instantiate database and product object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$product = new Product($db);
 
// query products
$stmt = $product->readAll();
$num = $stmt->rowCount();
 
// check if more than 0 record found
if($num>0){
 
    // start table
    echo "<table class='table table-bordered table-hover'>";
     
        // creating our table heading
        echo "<tr>";
            echo "<th>id</th>";
            echo "<th>original_image</th>";
            echo "<th>thumbnail_image</th>";
            echo "<th>ip_address</th>";
            
        echo "</tr>";
         
        // retrieve our table contents
        // fetch() is faster than fetchAll()
        // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            // extract row
            // this will make $row['name'] to
            // just $name only
            extract($row);
             
            // creating new table row per record
            echo "<tr>";
                echo "<td>{$id}</td>";
                echo "<td><img class='img-responsive' height='142' width='200' src='images/{$original_image}'></td>";
                echo "<td><img src ='images/{$thumbnail_image}'></td>";
                echo "<td>{$ip_address}</td>";
            echo "</tr>";
        }
         
    //end table
    echo "</table>";
     
}
 
// tell the user if no records found
else{
    echo "<div class='alert alert-info'>No records found.</div>";
}
 
?>


