<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>AngularJS Insert Update Delete Using PHP MySQL</title>
	<!-- Bootstrap -->
	<link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,200' rel='stylesheet' type='text/css'>	
	<link href="node_modules/bootstrap/dist/css/bootstrap.css" rel="stylesheet">
	<link href="node_modules/font-awesome/css/font-awesome.css" rel="stylesheet">
	<link href="node_modules/animate/animate.css" rel="stylesheet">
	<link href="css/insert-update-delete-select-data-using-angularjs-and-php.css" rel="stylesheet">

	<!-- Script -->
	<script src="node_modules/modernizr/modernizr.js"></script>
	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<script src="node_modules/jquery/dist/jquery.js"></script>
	<!-- Include all compiled plugins (below), or include individual files as needed -->
	<script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
	<script src="node_modules/angular/angular.js"></script>
	<script src="js/insert-update-delete-select-data-using-angularjs-and-php.js"></script>
</head>
<body>
<div class="container" ng-controller="PostController">
	<h2 class="title text-center">AngularJS Insert Update Delete Using PHP MySQL</h2>

	<div class="row mt80">
		<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 animated fadeInDown">
			<div class="alert alert-danger text-center alert-failure-div" role="alert" style="display: none">
				<p></p>
			</div>
			<div class="alert alert-success text-center alert-success-div" role="alert" style="display: none">
				<p></p>
			</div>
			<form novalidate name="userForm">
				<div class="form-group">
					<label for="name">Name</label> 
					<input type="text" class="form-control" id="name" name="name" placeholder="Name">
				</div>
				<div class="form-group">
					<label for="email">Email</label> 
					<input type="email" class="form-control" id="email" name="email" placeholder="Email">
				</div>
				<div class="form-group">
					<label for="company_name">Company Name</label> 
					<input type="text" class="form-control" id="company_name" name="company_name" placeholder="Company Name">
				</div>
				<div class="form-group">
					<label for="designation">Designation</label> 
					<input class="form-control" id="designation" name="designation" placeholder="Designation">
				</div>
				<div class="text-center">
					<button data-loading-text="Saving User..." type="submit" class="btn btn-save">Save User</button>
				</div>
			</form>
		</div>
		<div class="col-xs-12 col-sm-8 col-md-8 col-lg-8 animated fadeInUp">
			<div class="table-responsive">
				<table class="table table-bordered table-hover table-striped">
					<thead>
						<tr>
							<th width="5%">id</th>
							<th width="20%">Name</th>
							<th width="20%">Email</th>
							<th width="20%">Company Name</th>
							<th width="15%">Designation</th>
							<th width="20%">Action</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">1</th>
							<td>Muni</td>
							<td>support[at]smarttutorials.net</td>
							<td>SmartTutorials.net</td>
							<td>Director</td>
							<td><span> Edit</span> | <span>Delete</span></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>

<script>
    
   
$postModule = angular.module('postModule', []);
var base_path = document.getElementById('base_path').value;
$postModule.controller('PostController',function($scope, $http){
	$scope.post = {};
	$scope.post.users = [];
	$scope.tempUser = {};
	$scope.editMode = false;
	$scope.index = '';
	
	var url = base_path+'ajax.php';
	
	$scope.saveUser = function(){
	    $http({
	      method: 'post',
	      url: url,
	      data: $.param({'user' : $scope.tempUser, 'type' : 'save_user' }),
	      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
	    }).
	    success(function(data, status, headers, config) {
	    	if(data.success){
	    		if( $scope.editMode ){
	    			$scope.post.users[$scope.index].id = data.id;
	    			$scope.post.users[$scope.index].name = $scope.tempUser.name;
	    			$scope.post.users[$scope.index].email = $scope.tempUser.email;
	    			$scope.post.users[$scope.index].companyName = $scope.tempUser.companyName;
	    			$scope.post.users[$scope.index].designation = $scope.tempUser.designation;
	    		}else{
	    			$scope.post.users.push({
		    			id : data.id,
		    			name : $scope.tempUser.name,
		    			email : $scope.tempUser.email,
		    			companyName : $scope.tempUser.companyName,
		    			designation : $scope.tempUser.designation
		    		});
	    		}
	    		$scope.messageSuccess(data.message);
	    		$scope.userForm.$setPristine();
	    		$scope.tempUser = {};
	    		
	    	}else{
	    		$scope.messageFailure(data.message);
	    	}
	    }).
	    error(function(data, status, headers, config) {
	        //$scope.codeStatus = response || "Request failed";
	    });
	    
	    jQuery('.btn-save').button('reset');
	}
	
	$scope.addUser = function(){
		
		jQuery('.btn-save').button('loading');
		$scope.saveUser();
		$scope.editMode = false;
		$scope.index = '';
	}
	
	$scope.updateUser = function(){
		$('.btn-save').button('loading');
		$scope.saveUser();
	}
	
	$scope.editUser = function(user){
		$scope.tempUser = {
			id: user.id,
			name : user.name,
			email : user.email,
			companyName : user.companyName,
			designation : user.designation
		};
		$scope.editMode = true;
		$scope.index = $scope.post.users.indexOf(user);
	}
	
	
	$scope.deleteUser = function(user){
		var r = confirm("Are you sure want to delete this user!");
		if (r == true) {
			$http({
		      method: 'post',
		      url: url,
		      data: $.param({ 'id' : user.id, 'type' : 'delete_user' }),
		      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		    }).
		    success(function(data, status, headers, config) {
		    	if(data.success){
		    		var index = $scope.post.users.indexOf(user);
		    		$scope.post.users.splice(index, 1);
		    	}else{
		    		$scope.messageFailure(data.message);
		    	}
		    }).
		    error(function(data, status, headers, config) {
		    	//$scope.messageFailure(data.message);
		    });
		}
	}
	
	$scope.init = function(){
	    $http({
	      method: 'post',
	      url: url,
	      data: $.param({ 'type' : 'getUsers' }),
	      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
	    }).
	    success(function(data, status, headers, config) {
	    	if(data.success && !angular.isUndefined(data.data) ){
	    		$scope.post.users = data.data;
	    	}else{
	    		$scope.messageFailure(data.message);
	    	}
	    }).
	    error(function(data, status, headers, config) {
	    	//$scope.messageFailure(data.message);
	    });
	}
	
	$scope.messageFailure = function (msg){
		jQuery('.alert-failure-div > p').html(msg);
		jQuery('.alert-failure-div').show();
		jQuery('.alert-failure-div').delay(5000).slideUp(function(){
			jQuery('.alert-failure-div > p').html('');
		});
	}
	
	$scope.messageSuccess = function (msg){
		jQuery('.alert-success-div > p').html(msg);
		jQuery('.alert-success-div').show();
		jQuery('.alert-success-div').delay(5000).slideUp(function(){
			jQuery('.alert-success-div > p').html('');
		});
	}
	
	
	$scope.getError = function(error, name){
		if(angular.isDefined(error)){
			if(error.required && name == 'name'){
				return "Please enter name";
			}else if(error.email && name == 'email'){
				return "Please enter valid email";
			}else if(error.required && name == 'company_name'){
				return "Please enter company name";
			}else if(error.required && name == 'designation'){
				return "Please enter designation";
			}else if(error.required && name == 'email'){
				return "Please enter email";
			}else if(error.minlength && name == 'name'){
				return "Name must be 3 characters long";
			}else if(error.minlength && name == 'company_name'){
				return "Company name must be 3 characters long";
			}else if(error.minlength && name == 'designation'){
				return "Designation must be 3 characters long";
			}
		}
	}
	
});
    </script>
</body>
</html>
