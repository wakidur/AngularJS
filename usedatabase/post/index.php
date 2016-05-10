<?php require_once 'config.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<!-- Bootstrap -->
	<link href="css/bootstrap.min.css" rel="stylesheet">
	<link href="css/font-awesome.min.css" rel="stylesheet">
	<link href="css/animate.min.css" rel="stylesheet">
	<link href="css/style.css" rel="stylesheet">
	
	<meta name="description" content="AngularJS Insert Update Delete Using PHP MySQL, angularjs php mysql crud, add update delete in angularjs, php angularjs mysql insert delete update">
	<meta name="keywords" content="AngularJS Insert Update Delete Using PHP MySQL, angularjs php mysql crud, add update delete in angularjs, php angularjs mysql insert delete update">
	<meta name="author" content="https://plus.google.com/+MuniAyothi/">
	<title>AngularJS Insert Update Delete Using PHP MySQL</title>
	
	<link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,200' rel='stylesheet' type='text/css'>
	
	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    
    
</head>
<body data-ng-app="postModule" data-ng-controller="PostController" data-ng-init="init()">
	<input type="hidden" id="base_path" value="<?php echo BASE_PATH; ?>"/>
	<div role="navigation" class="navbar navbar-inverse navbar-fixed-top">
		<div class="container-fluid">
			<div class="navbar-header">
				<button type="button" data-toggle="collapse" data-target=".navbar-collapse" class="navbar-toggle collapsed">
					<span class="sr-only">Toggle navigation</span> 
					<span class="icon-bar"></span> 
					<span class="icon-bar"></span> 
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="#">AngularJS POST PHP</a>
			</div>
			<div id="navbar" class="collapse navbar-collapse">
				<ul class="nav navbar-nav">
					<li class="active"><a href="http://www.smarttutorials.net/"><i class="fa fa-home"></i>Home</a></li>
					<li><a href="http://www.smarttutorials.net/demo/"> <i class="fa fa-book"></i> Demo </a></li>
					<li><a href="http://blog.smarttutorials.net/"> <i class="fa fa-bank"></i> Blog </a></li>
					<li><a href="http://forum.smarttutorials.net/"> <i class="fa fa-file"></i> Forum </a></li>
				</ul>
			</div>
			<!--/.nav-collapse -->
			<!--/.nav-collapse -->
		</div>
	</div>

	<div class="container">
		<div class="row" style="margin-top: 10px;">
			<!-- <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
				<script async
					src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
				<ins class="adsbygoogle"
					style="display: inline-block; width: 728px; height: 90px"
					data-ad-client="ca-pub-4997600402648823" data-ad-slot="1675608998"></ins>
				<script>
				(adsbygoogle = window.adsbygoogle || []).push({});
				</script>
			</div>  -->
		</div>

		<div class="clearfix"></div>
		<h2 class="title text-center"> AngularJS Insert Update Delete Using PHP MySQL</h2>

		<div class="row mt80">
			<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 animated fadeInDown">
				<div class="alert alert-danger text-center alert-failure-div" role="alert" style="display: none">
					<p></p>
				</div>
				<div class="alert alert-success text-center alert-success-div" role="alert" style="display: none">
					<p></p>
				</div>
				<form novalidate name="userForm" >
					<div class="form-group">
						<label for="exampleInputEmail1">Name</label> 
						<input data-ng-minlength="3" required type="text" class="form-control" id="name" name="name" placeholder="Name" data-ng-model='tempUser.name'>
						<span class="help-block error" data-ng-show="userForm.name.$invalid && userForm.name.$dirty">
							{{getError(userForm.name.$error, 'name')}}
						</span>
					</div>
					<div class="form-group">
						<label for="exampleInputEmail1">Email</label> 
						<input data-ng-minlength="3" required type="email" class="form-control" id="email" name="email" placeholder="Email" data-ng-model='tempUser.email'>
						<span class="help-block error" data-ng-show="userForm.email.$invalid && userForm.email.$dirty">
							{{getError(userForm.email.$error, 'email')}}
						</span>
					</div>
					<div class="form-group">
						<label for="exampleInputPassword1">Company Name</label>  
						<input data-ng-minlength="3" required type="text" class="form-control" id="company_name" name="company_name" placeholder="Company Name" data-ng-model='tempUser.companyName'>
						<span class="help-block error" data-ng-show="userForm.company_name.$invalid && userForm.company_name.$dirty">
							{{getError(userForm.company_name.$error, 'company_name')}}
						</span>
					</div>
					<div class="form-group">
						<label for="exampleInputFile">Designation</label> 
						<input data-ng-minlength="3" required type="text" class="form-control" id="designation" name="designation" placeholder="Designation" data-ng-model='tempUser.designation'>
						<span class="help-block error" data-ng-show="userForm.designation.$invalid && userForm.designation.$dirty">
							{{getError(userForm.designation.$error, 'designation')}}
						</span>
					</div>
					<!-- <input type="hidden" data-ng-model='tempUser.id'>  -->
					<div class="text-center">
						<button ng-disabled="userForm.$invalid" data-loading-text="Saving User..." ng-hide="tempUser.id" type="submit" class="btn btn-save" data-ng-click="addUser()">Save User</button>
						<button ng-disabled="userForm.$invalid" data-loading-text="Updating User..." ng-hide="!tempUser.id" type="submit" class="btn btn-save" data-ng-click="updateUser()">Update User</button>
					</div>
					
				</form>
			</div>

			<div class="col-xs-12 col-sm-8 col-md-8 col-lg-8 animated fadeInUp">
				<div class="table-responsive">
					<table class="table table-bordered table-hover table-striped">
						<thead>
							<tr>
								<th width="5%">#</th>
								<th width="20%">Name</th>
								<th width="20%">Email</th>
								<th width="20%">Company Name</th>
								<th width="15%">Designation</th>
								<th width="20%">Action</th>
							</tr>
						</thead>
						<tbody>
							<tr data-ng-repeat="user in post.users | orderBy : '-id'">
								<th scope="row">{{user.id}}</th>
								<td> {{user.name}} </td>
								<td> {{user.email}} </td>
								<td> {{user.companyName}} </td>
								<td> {{user.designation}} </td>
								<td> <span data-ng-click="editUser(user)"> Edit</span> | <span data-ng-click="deleteUser(user)">Delete</span> </td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>


	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<script src="js/jquery.min.js"></script>
	<!-- Include all compiled plugins (below), or include individual files as needed -->
	<script src="js/bootstrap.min.js"></script>
	<script src="js/angular.min.js"></script>
	<script src="js/angular-custom.js"></script>
</body>
</html>