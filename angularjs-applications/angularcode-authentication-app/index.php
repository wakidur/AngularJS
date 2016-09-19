<!DOCTYPE html>
<html lang="en" ng-app="myApp">

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>AngularJS Authentication App</title>
        <!-- Bootstrap -->
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="assets/bootstrap/dist/css/bootstrap.css">
        <link href="css/custom.css" rel="stylesheet">
        <link href="css/toaster2.0.0.css" rel="stylesheet">
        <style>
            a {
                color: orange;
            }
        </style>
       
    </head>

    <body ng-cloak="">
        <header>
            <div class="cf" ng-include="'partials/nav.html'"></div>
        </header>
        <div class="container" style="margin-top:20px;">
            <div data-ng-view="" id="ng-view" class="slide-animation"></div>
        </div>
    </body>
    <toaster-container toaster-options="{'time-out': 3000}"></toaster-container>
    <!-- Libs -->

    
    <script src="assets/jquery/jquery.js"></script>
    <script src="assets/bootstrap/dist/js/bootstrap.js"></script>
    <script src="assets/angular/angular.js"></script>
    <script src="assets/angular/angular-route.js"></script>
    <script src="assets/angular/angular-animate.js"></script>
  
    <script src="js/toaster2.0.0.js"></script>
    <script src="app/app.js"></script>
    <script src="app/data.js"></script>
    <script src="app/directives.js"></script>
    <script src="app/authCtrl.js"></script>
</html>

