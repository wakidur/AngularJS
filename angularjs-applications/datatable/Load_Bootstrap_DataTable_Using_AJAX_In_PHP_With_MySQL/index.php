<html>
<head>
<title>Display Data in DataTable Bootstrap</title>
    <link rel="stylesheet" href="css/bootstrap.min.css"/>
    <link rel="stylesheet" href="css/dataTables.bootstrap.min.css"/>
    <script src="js/jquery-1.12.3.js"></script>
    <script src="js/jquery.dataTables.min.js"></script>
    <script src="js/dataTables.bootstrap.min.js"></script>
    <script>
//    $(document).ready(function() {
//        $('#example').DataTable();
//    } );	
    </script>
    <script>
	$(document).ready(function(){
            $('#btn_submit').click(function(){
		var ename = $("#employee_name").val();
		var designation = $("#designation").val();
		var salary = $("#salary").val();
		var joindate = $("#join_date").val();
                console.log(ename + " " + designation + " " + salary +" "+ joindate);
		 
		 //insert data 
                $.ajax({
                    url: 'process.php',
                    type: 'post',
                    data: {
                        "ename": ename,
                        "salary" : salary,
                        "designation" : designation,
                        "joindate": joindate
                    },
                    success: function(response) {
                        $("#result").html(response);
                        $('#example').DataTable();
                    }
               });	 
            }) ;
            
            
	});
        
	</script>
    <style>
        
    </style>
</head>
<body>
    
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
            <form>
                <div class="form-group">
                  <label for="employee_name">Employee Name:</label>
                  <input type="text" class="form-control" name="employee_name" id="employee_name" placeholder="Employee Name">
                </div>
                <div class="form-group">
                  <label for="designation">Designation :</label>
                  <input type="text" class="form-control" name="designation" id="designation" placeholder="Designation ">
                </div>
                <div class="form-group">
                  <label for="salary">Salary :</label>
                  <input type="number" class="form-control" name="salary" id="salary" placeholder="Salary">
                </div>
                <div class="form-group">
                  <label for="join_date">Join Date :</label>
                  <input type="date" class="form-control" id="join_date" name="join_date"  placeholder="Join Date">
                </div>
                <button type="button" class="btn btn-default" name="btn_submit" id="btn_submit">Submit</button>
            </form>  
                
<!--    <center>
        <div style="width:60%;padding:30px;text-align:left;">
        Employee Name: <input type="text" class="form-control" name="employee_name" id="employee_name"/><br>
        Designation : <input type="text" class="form-control" name="designation" id="designation"/><br>
        Salary : 	<input type="text" class="form-control" name="salary" id="salary"/><br>
        Join Date : <input type="date" class="form-control" name="join_date"	id="join_date"/><br>
                <button type="button" class="btn btn-primary" name="btn_submit" id="btn_submit">Submit Data</button>

        </div>
    </center>-->
            <div style="width:100%;padding:20px" id="result"></div>

            </div>
        </div>
    </div>
</body>
</html>