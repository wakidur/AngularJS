<!DOCTYPE HTML>
<html>
    <head>
        <title>PDO Create New Record</title>
         <link rel="stylesheet" href="css/bootstrap.css">
    </head>
<body>
 
<!-- dynamic content will be here -->
 <!-- just a header -->
 
 <div class="container">
     <div class="row">
         <div class="col-xs-12 text-center"> 
             <h1 class="text-info">PDO: Create a Record</h1> 
         </div>
         <form class="form-horizontal" action='create.php' method='post'>
             <div class="form-group">
                 <label for="name" class="col-sm-2 control-label">Name</label>
                 <div class="col-sm-10">
                     <input type='text' name='name' id="name" class="form-control"  placeholder="Your name " />
                 </div>
             </div>
             <div class="form-group">
                 <label for="price" class="col-sm-2 control-label">Price</label>
                 <div class="col-sm-10">
                     <input type='text' name='price' id="price" class="form-control"  placeholder="Product price" />
                 </div>
             </div>
             <div class="form-group">
                 <label for="description" class="col-sm-2 control-label">Description</label>
                 <div class="col-sm-10">
                     <textarea name='description' id="description" class="form-control" rows="3" placeholder="Product description"></textarea>
                 </div>
             </div>
             <div class="form-group">
                 <div class="col-sm-offset-2 col-sm-4">
                     <button type="submit" class="btn btn-primary">Save</button>
                 </div>
                 <div class=" col-sm-6 text-right">
                     <a class="btn btn-primary" href='read.php'>Back to home</a>
                 </div>
             </div>
         </form>
     </div>
 </div>


<?php
if($_POST){
 
    // include database connection
    include 'config/database.php';
 
    try{
     
        // insert query
        $query = "INSERT INTO products_beginner SET name=:name, description=:description, price=:price, created=:created";
 
        // prepare query for execution
        $stmt = $con->prepare($query);
 
        // posted values
        $name=htmlspecialchars(strip_tags($_POST['name']));
        echo '$name';
        $description=htmlspecialchars(strip_tags($_POST['description']));
        echo '$description';
        $price=htmlspecialchars(strip_tags($_POST['price']));
        echo '$price';
 
        // bind the parameters
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':description', $description);
        $stmt->bindParam(':price', $price);
         
        // specify when this record was inserted to the database
        $created=date('Y-m-d H:i:s');
        $stmt->bindParam(':created', $created);
         
        // Execute the query
        if($stmt->execute()){
            print_r($stmt);
            echo '<div class="container">';
            echo '<div class="alert alert-success" role="alert">Record was saved.</div>';
            echo '</div>';
        }else{
            die('Unable to save record.');
        }
         
    }
     
    // show error
    catch(PDOException $exception){
        die('ERROR: ' . $exception->getMessage());
    }
}
?>
</body>
</html>