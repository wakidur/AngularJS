<!DOCTYPE HTML>
<html>
    <head>
        <title>Update A Record</title>
         <link rel="stylesheet" href="css/bootstrap.css">     
    </head>
<body>
<?php


// get passed parameter value, in this case, the record ID
// isset() is a PHP function used to verify if a value is there or not
$id=isset($_GET['id']) ? $_GET['id'] : die('ERROR: Record ID not found.');
 
//include database connection
include 'config/database.php';
 
// check if form was submitted
if($_POST){
     
    try{
     
        // write update query
        // in this case, it seemed like we have so many fields to pass and 
        // it is better to label them and not use question marks
        $query = "UPDATE products_beginner 
                    SET name=:name, description=:description, price=:price 
                    WHERE id = :id";
 
        // prepare query for excecution
        $stmt = $con->prepare($query);
 
        // posted values
        $name=htmlspecialchars(strip_tags($_POST['name']));
        $description=htmlspecialchars(strip_tags($_POST['description']));
        $price=htmlspecialchars(strip_tags($_POST['price']));
 
        // bind the parameters
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':description', $description);
        $stmt->bindParam(':price', $price);
        $stmt->bindParam(':id', $id);
         
        // Execute the query
        if($stmt->execute()){
            echo '<div class="container">';
            echo '<div class="alert alert-success" role="alert">Record was updated..</div>';
            echo '</div>';
            
        }else{
            echo 'Unable to update record. Please try again.';
        }
         
    }
     
    // show errors
    catch(PDOException $exception){
        die('ERROR: ' . $exception->getMessage());
    }
}
 
 
?>

<?php


// get passed parameter value, in this case, the record ID
// isset() is a PHP function used to verify if a value is there or not
$id=isset($_GET['id']) ? $_GET['id'] : die('ERROR: Record ID not found.');
 
// read current record's data
try {
    // prepare select query
    $query = "SELECT id, name, description, price FROM products_beginner WHERE id = ? LIMIT 0,1";
    $stmt = $con->prepare( $query );    
    // this is the first question mark
    $stmt->bindParam(1, $id);  
    // execute our query
    $stmt->execute();
    // store retrieved row to a variable
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
     
    // values to fill up our form
    $name = $row['name'];
    $description = $row['description'];
    $price = $row['price'];
    
}
 
// show error
catch(PDOException $exception){
    die('ERROR: ' . $exception->getMessage());
}
  
 
?>

<!--we have our html form here where new user information will be entered-->
<div class="container">
     <div class="row">
         <div class="col-xs-12 text-center"> 
             <h1 class="text-info">PDO: Create a Record</h1> 
         </div>
         <form class="form-horizontal" action='update.php?id=<?php echo htmlspecialchars($id); ?>' method='post' border='0'>
             <div class="form-group">
                 <label for="name" class="col-sm-2 control-label">Name</label>
                 <div class="col-sm-10">
                     <input type='text' name='name' id="name" class="form-control"  value="<?php echo htmlspecialchars($name, ENT_QUOTES);  ?>" />
                 </div>
             </div>
             <div class="form-group">
                 <label for="price" class="col-sm-2 control-label">Price</label>
                 <div class="col-sm-10">
                     <input type='text' name='price' id="price" class="form-control"  value="<?php echo htmlspecialchars($price, ENT_QUOTES);  ?>"  />
                 </div>
             </div>
             <div class="form-group">
                 <label for="description" class="col-sm-2 control-label">Description</label>
                 <div class="col-sm-10">
                     <textarea name='description' id="description" class="form-control" rows="3"><?php echo htmlspecialchars($description, ENT_QUOTES);  ?></textarea>
                 </div>
             </div>
             <div class="form-group">
                 <div class="col-sm-offset-2 col-sm-4">
                     <button type="submit" class="btn btn-primary">Save Changes</button>
                 </div>
                 <div class=" col-sm-6 text-right">
                     <a class="btn btn-primary" href='read.php'>Back to home</a>
                 </div>
             </div>
         </form>
     </div>
 </div>
</body>
</html>