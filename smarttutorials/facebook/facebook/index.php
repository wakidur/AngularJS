<!---
Site : http:www.smarttutorials.net
 Author :muni
--->


<!DOCTYPE html>
<html>
	<head>
		<title>Facebook like button Demo with Responsive Design</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<!-- Bootstrap -->
		<link href="css/bootstrap.min.css" rel="stylesheet" media="screen">

		<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
		<!--[if lt IE 9]>
		<script src="../../assets/js/html5shiv.js"></script>
		<script src="../../assets/js/respond.min.js"></script>
		<![endif]-->
		<style>
			.container {
				margin-top: 150px;
			}
			p {
				margin-left: 170px;
			}
			button {
				margin-left: 100px;
			}
			.error {
				color: #B94A48;
			}
			.form-horizontal {
				margin-bottom: 0px;
			}
		</style>
	</head>
	<body>
		<div class="container">
			<div class="col-xs-12 col-sm-8 col-md-8 col-xs-offset-4 col-sm-offset-3 col-md-offset-3">
				<p>
					Please Eneter Your for Demo Purpose
				</p>
				<hr>
				<form class="form-horizontal" role="form" id='login' action="facebook.php" method="post">
					<div class="form-group">
						<div class="col-lg-10">
							<input type="text" class="form-control" id="name" name="name" placeholder="Enter your name">
							<span class="help-block"></span>
						</div>
					</div>
					<br>
					<br>
					<div class="col-lg-6 text-center">
						<button type="submit" class="btn btn-success btn-block">
							Primary
						</button>
					</div>
				</form>
			</div>
		</div>

		<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
		<script src="js/jquery-1.10.2.min.js"></script>
		<!-- Include all compiled plugins (below), or include individual files as needed -->
		<script src="js/bootstrap.min.js"></script>
		<script src="js/jquery.validate.min.js"></script>
		<script>
			$(document).ready(function() {
				$("#login").validate({
					submitHandler : function() {
						if (form.valid()) {
							return true;
						} else {
							return false;
						}

					},
					rules : {
						name : {
							required : true,
							minlength : 3,
							remote : {
								url : "check_name.php",
								type : "post",
								data : {
									username : function() {
										return $("#name").val();
									}
								}
							}
						}
					},
					messages : {
						name : {
							required : "Please enter your name",
							remote : "Name is already taken, Please choose some other name"
						}
					},
					errorPlacement : function(error, element) {
						$(element).closest('.form-group').find('.help-block').html(error.html());
					},
					highlight : function(element) {
						$(element).closest('.form-group').removeClass('has-success').addClass('has-error');
					},
					success : function(element, lab) {
						var messages = new Array("That's Great!", "Looks good!", "You got it!", "Great Job!", "Smart!", "That's it!");
						var num = Math.floor(Math.random() * 6);
						$(lab).closest('.form-group').find('.help-block').text(messages[num]);
						$(lab).addClass('valid').closest('.form-group').removeClass('has-error').addClass('has-success');
					}
				});
			});
		</script>
	</body>
</html>
