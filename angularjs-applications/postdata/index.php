<?php require_once 'config.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<!-- Bootstrap -->
	<link href="node_modules/bootstrap/dist/css/bootstrap.css" rel="stylesheet">
	<link href="node_modules/font-awesome/css/font-awesome.css" rel="stylesheet">
	<link href="node_modules/animate/animate.css" rel="stylesheet">
	<link href="css/style.css" rel="stylesheet">
	
	<title>AngularJS Insert Update Delete Using PHP MySQL</title>
	
	<script src="node_modules/angular/angular.js"></script>
	
	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    
    
</head>
<body data-ng-app="postModule" data-ng-controller="PostController" data-ng-init="init()">

    <div class="container">
        
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
                        <label for="name">Name</label> 
                        <input ng-minlength="3"  type="text" class="form-control" id="name" name="name" placeholder="Name" ng-model='tempUser.name' required>
                        <span class="help-block error" ng-show="userForm.name.$invalid && userForm.name.$dirty">
                            {{getError(userForm.name.$error, 'name')}}
                        </span>
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Email</label> 
                        <input ng-minlength="3" type="email" class="form-control" id="email" name="email" placeholder="Email" ng-model='tempUser.email' required>
                        <span class="help-block error" ng-show="userForm.email.$invalid && userForm.email.$dirty">
                            {{getError(userForm.email.$error, 'email')}}
                        </span>
                    </div>
                    
                    <div class="form-group">
                        <label for="company_name">Company Name</label>  
                        <input minlength="3"  type="text" class="form-control" id="company_name" name="company_name" placeholder="Company Name" ng-model='tempUser.companyName' required>
                        <span class="help-block error" ng-show="userForm.company_name.$invalid && userForm.company_name.$dirty">
                            {{getError(userForm.company_name.$error, 'company_name')}}
                        </span>
                    </div>
                    
                    <div class="form-group">
                        <label for="designation">Designation</label> 
                        <input ng-minlength="3"  type="text" class="form-control" id="designation" name="designation" placeholder="Designation" ng-model='tempUser.designation' required>
                        <span class="help-block error" ng-show="userForm.designation.$invalid && userForm.designation.$dirty">
                            {{getError(userForm.designation.$error, 'designation')}}
                        </span>
                    </div>
                    
                    <!-- <input type="hidden" data-ng-model='tempUser.id'>  -->
                    <div class="text-center">
                        <button ng-disabled="userForm.$invalid" data-loading-text="Saving User..." ng-hide="tempUser.id" type="submit" class="btn btn-save" ng-click="addUser()">Save User</button>
                        <button ng-disabled="userForm.$invalid" data-loading-text="Updating User..." ng-hide="!tempUser.id" type="submit" class="btn btn-save" ng-click="updateUser()">Update User</button>
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
                            <tr data-ng-repeat="user in post.users | orderBy : 'id'">
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
    <script src="node_modules/jquery/dist/jquery.js"></script>
    <script src="node_modules/jquery/dist/jquery.validate.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="node_modules/bootstrap/dist/js/bootstrap.js"></script>
    <script src="js/app.js"></script>


</body>
</html>