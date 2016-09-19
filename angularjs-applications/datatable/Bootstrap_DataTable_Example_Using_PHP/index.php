<html>
<head>
<title>Display Data in DataTable Bootstrap</title>
    <link rel="stylesheet" href="css/bootstrap.min.css"/>
    <link rel="stylesheet" href="css/dataTables.bootstrap.min.css"/>
    <script src="js/jquery-1.12.3.js"></script>
    <script src="js/jquery.dataTables.min.js"></script>
    <script src="js/dataTables.bootstrap.min.js"></script>
    <script>
    $(document).ready(function() {
        $('#example').DataTable();
    } );	
    </script>
    <style>
        
    </style>
</head>
<body>
    
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <table id="example" class="table table-striped table-bordered" cellspacing="0" width="100%">
                    <thead>
                        <tr>
                            <th>Employee.Id</th>
                            <th>Employee Name</th>
                            <th>Designation</th>
                            <th>Salary</th>
                            <th>Join.Date</th>

                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                          <th>Employee.Id</th>
                            <th>Employee Name</th>
                            <th>Designation</th>
                            <th>Salary</th>
                            <th>Join.Date</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        <?php     
                        /************PDO **********************/
                            $host = 'localhost';
                            $dbname = 'angularjs';
                            $user = 'root';
                            $pass = '';
                            try
                                {
                                    $conn = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
                                    $q = $conn->query('SELECT * FROM employees_tbl');
                                    while($row = $q->fetch())
                                        {
                                        echo "<tr>";
                                            echo "<td>" . $row['empid']. "</td>";
                                            echo "<td>" . $row['ename']. "</td>";
                                            echo "<td>" . $row['desg']. "</td>";
                                            echo "<td>" . $row['salary']. "</td>";
                                            echo "<td>" . $row['joindate']. "</td>";
                                        echo "</tr>";
                                        }
                                }
                                catch(PDOException $pdoe)
                                {
                                        die('Database error: ' . $pdoe->getMessage());
                                }
                                catch(Exception $e)
                                {
                                        die('Unexpected error: ' . $e->getMessage());
                                }
                        ?>
       	
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</body>
</html>