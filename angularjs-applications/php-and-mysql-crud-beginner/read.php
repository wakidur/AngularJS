<!DOCTYPE HTML>
<html>
    <head>
        <title>PDO Read Records - code from codeofaninja.com</title>
        <link rel="stylesheet" href="css/bootstrap.css">
  
    </head>
<body>
 
<!-- dynamic content will be here -->


 <!-- just a header label -->

 
<?php
// include database connection
include 'config/database.php';

// select all data
$query = "SELECT id, name, description, price FROM products_beginner";
$stmt = $con->prepare($query);
$stmt->execute();
// this is how to get number of rows returned
$num = $stmt->rowCount();



echo '<div class="container">';
    echo '<div class="page-header">';
        echo '<h1>PDO: Read Records</h1>';
        echo '<hr>';
        echo '<div class="row">';
            echo '<div class="col-xs-6">';
                echo "<p class='text-info'> count total number of rows = <span class='text-danger'> $num </span> </p>";
            echo '</div>';
        // link to create record form
            echo "<div class='col-xs-6 text-right'>";
                echo "<a class='btn btn-primary text-right' href='create.php'><i class='glyphicon glyphicon-plus'></i> Create New Record</a>";
            echo "</div>";
        echo '</div>';
    echo '</div>';
 
    //check if more than 0 record found
    if($num>0){

        echo '<table class="table table-bordered">';//start table

            //creating our table heading
            echo "<tr>";
                echo "<th>ID</th>";
                echo "<th>Name</th>";
                echo "<th>Description</th>";
                echo "<th>Price</th>";
                echo "<th>Action</th>";
            echo "</tr>";

            // retrieve our table contents
            // fetch() is faster than fetchAll()
            // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
                // extract row
                // this will make $row['firstname'] to
                // just $firstname only
                extract($row);

                // creating new table row per record
                echo "<tr>";
                    echo "<td>{$id}</td>";
                    echo "<td>{$name}</td>";
                    echo "<td>{$description}</td>";
                    echo "<td>&#36;{$price}</td>";
                    echo "<td>";
                        // we will use this links on next part of this post
                        echo "<a class='btn btn-info' href='update.php?id={$id}'><i class='glyphicon glyphicon-edit'></i> Edit</a>";
                        echo " &nbsp; ";
                        // we will use this links on next part of this post
                        echo "<a class='btn btn-danger' href='#' onclick='delete_user({$id});'><i class='glyphicon glyphicon-remove-circle'></i> Delete</a>";
                    echo "</td>";
                echo "</tr>";
            }

        // end table
        echo "</table>";
    echo '</div>';  
}
// if no records found
else{
    echo "<div>No records found.</div>";
}


//Delete value from the table 

$action = isset($_GET['action']) ? $_GET['action'] : "";
 
// if it was redirected from delete.php
if($action=='deleted'){
    echo "<div>Record was deleted.</div>";
}
?>

<script type='text/javascript'>
function delete_user( id ){
    
        console.log(id + "\n");
        console.log(window.location + "\n\n");
        console.log(window.location = 'delete.php?id=' + id);
        
        
        
    var answer = confirm('Are you sure?');
    if (answer){
        // if user clicked ok, 
        // pass the id to delete.php and execute the delete query
        window.location = 'delete.php?id=' + id;
        console.log(id + "\n");
        console.log(window.location + "\n\n");
        console.log(window.location = 'delete.php?id=' + id);
    } 
}
</script>
</body>
</html>