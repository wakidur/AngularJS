<?php
include_once('dbconfig.php');
$ename = $_POST['ename'];
$designation = $_POST['designation'];
$salary = $_POST['salary'];
$join_date = $_POST['joindate'];
$sql = "insert into employees_tbl_second(ename,desg,salary,joindate) values('" . $ename . "','" . $designation . "','" . $salary . "','" . $join_date . "')";
$result = $mysqli->query($sql);
if ($result) {
    ?>
    <table id="example" class="table table-striped table-bordered" cellspacing="0">
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
            $sql = "select * from employees_tbl_second order by empid desc";
            $result = $mysqli->query($sql);
            while ($row = $result->fetch()) {
                echo "<tr>";
                echo "<td>" . $row['empid'] . "</td>";
                echo "<td>" . $row['ename'] . "</td>";
                echo "<td>" . $row['desg'] . "</td>";
                echo "<td>" . $row['salary'] . "</td>";
                echo "<td>" . $row['joindate'] . "</td>";
                echo "</tr>";
            }
            ?>
        </tbody>
    </table>	
<?php } ?>