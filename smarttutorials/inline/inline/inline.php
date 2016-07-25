<?php
require_once 'config.php';
$results = mysql_query("SELECT * FROM sample") or die(mysql_error());
$result = mysql_fetch_row($results);
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Inline Editing with jQuery, Bootstrap and jQueryUI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Bootstrap -->
        <link href="css/bootstrap.min.css" rel="stylesheet" media="screen">
        <link href="css/datetimepicker.css" rel="stylesheet" media="screen">
        <link href="css/bootstrap-wysihtml5.css" rel="stylesheet" media="screen">
		<link href="css/bootstrap-editable.css" rel="stylesheet">
		<link href="css/style.css" rel="stylesheet">
		
		
		
        <script src="js/jquery-1.10.2.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/bootstrap-datetimepicker.js"></script>
        <script src="js/bootstrap-editable.min.js"></script>
        <script src="js/bootstrap-wysihtml5.js"></script>
		<script src="js/moment.min.js"></script>
		<script src="js/combodate.js"></script>
    </head>
    <body>
        <div class='container'>
			<h1 class="text-center" style="padding-bottom: 30px;color:#e67e22;">Inline Editing using PHP, MySQL, jQuery and Twitter Bootstrap</h1>
            <div class="row">
                <div class="col-sm-6 col-md-6 col-lg-6 col-sm-offset-4 col-md-offset-4 col-lg-offset-4">

                     Switch Inline Editing Style :
                    <a href="index.php" class="btn btn-primary">Popup</a>


                    <script type="text/javascript">
						$(document).ready(function() {
							$.fn.editable.defaults.mode = "inline";
							$('#username').editable();
							$('#comments').editable();

						});
                    </script>
                    <br>
                    <br>
                    <br>
                    <p style="color:#1abc9c">Enter your user name : </p>
                    <a href="#" id="username" data-type="text" data-pk="1"
                    data-url="post.php" data-title="Enter username"><?php
                    if (!empty($result[1])) { echo $result[1];
                    } else { echo "muni";
                    }
                    ?></a>

                    <br>
                    <br>
                    <br>
                    <p style="color:#2ecc71">Enter your comments here : </p>
                    <a data-url="post.php" data-original-title="Enter comments" data-placeholder="Your comments here..." data-pk="1" data-type="textarea" id="comments" href="#">
                       <?php
                    if (!empty($result[2])) { echo $result[2];
                    } else { echo "Enter your comments here";
                    }
                    ?> 
                        
                    </a>
                    <br>
                    <br>
                    <br>
                    <p style="color:#9b59b6">Select your country : </p>
                    <a data-url="post.php" data-type='select' data-original-title="Select your country" data-pk="1" id="country">
                       <?php
                    if (!empty($result[3])) { echo $result[3];
                    } else { echo "Select your country";
                    }
                    ?> 
                        
                    </a>

                    <script>
						$(function() {
							$('#country').editable({
								source : [{
									value : '',
									text : 'Select your country'
								}, {
									value : 'India',
									text : 'India'
								}, {
									value : 'USA',
									text : 'USA'
								}, {
									value : 'Singapore',
									text : 'Singapore'
								}]
							});
						});
                    </script>

                    <br>
                    <br>
                    <br>
                    <p style="color:#f1c40f">Select your dob : </p>
                    <a data-url="post.php" href="#" data-type='date' id='dob' data-original-title="Select your dob" data-pk="1">
                        <?php
                        if (!empty($result[4])) { echo $result[4];
                        } else { echo "Select your dob";
                        }
                    ?> 
                    </a>
                    <script>
						$(function() {
							$('#dob').editable({
								format : 'yyyy-mm-dd',
								viewformat : 'dd/mm/yyyy',
								datepicker : {
									weekStart : 1
								}
							});
						});
                    </script>

                    <br>
                    <br>
                    <br>
                    <p style="color:#e67e22">Select your appiontment date and time : </p>
                    <a data-url="post.php" href="#" data-type='datetime' id='appt' data-original-title="Select your appiontment date and time" data-pk="1">
                        <?php
                        if (!empty($result[5])) { echo $result[5];
                        } else { echo "Select your appiontment date and time";
                        }
                    ?> 
                    </a>
                    <script>
						$(function() {
							$('#appt').editable({
								format : 'yyyy-mm-dd hh:ii',
								viewformat : 'dd/mm/yyyy hh:ii',
								datetimepicker : {
									weekStart : 1
								}
							});
						});
                    </script>

                    <br>
                    <br>
                    <br>
                    <p style="color:#c0392b">Select your dob : </p>
                    <a data-url="post.php" href="#" data-type='combodate' id='combo' data-pk="1" data-value="1984-05-15" data-original-title="Select date">
                        <?php
                        if (!empty($result[6])) { echo $result[6];
                        } else { echo "Select your dob";
                        }
                    ?> 
                    </a>
                    <script>
						$(function() {
							$('#combo').editable({
								format : 'YYYY-MM-DD',
								viewformat : 'DD.MM.YYYY',
								template : 'D / MMMM / YYYY',
								combodate : {
									minYear : 2000,
									maxYear : 2015,
									minuteStep : 1
								}
							});
						});
                    </script>

                    <br>
                    <br>
                    <br>
                    <p style="color:#e67e22">Enter your email : </p>
                    <a href="#" id="email" data-type="email" data-pk="1">
                        <?php
                        if (!empty($result[7])) { echo $result[7];
                        } else { echo "Enter your email!";
                        }
                    ?> 
                    </a>
                    <script>
						$(function() {
							$('#email').editable({
								url : 'post.php',
								title : 'Enter email'
							});
						});
                    </script>

                    <br>
                    <br>
                    <br>
                    <p style="color:#27ae60">Select your options : </p>
                    <a href="#" id="options" data-type="checklist" data-pk="1" data-url="post.php" data-original-title="Select options"></a>
                    <script>
						$(function() {
							$('#options').editable({
								value : [2, 3],
								source : [{
									value : 1,
									text : 'option1'
								}, {
									value : 2,
									text : 'option2'
								}, {
									value : 3,
									text : 'option3'
								}]
							});
						});
                    </script>

                    
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>

                </div>

            </div>

        </div>

    </body>
</html>
