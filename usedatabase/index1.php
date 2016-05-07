<!--
<html ng-app="fetch">
    <head>
    <title>AngularJS GET request with PHP</title>
     <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.css">

      <script src="node_modules/angular/angular.js"></script>
    </head>

    <body>
    <br>
      <div class="container ">
        <div class="row">
          <h1>Angular $http GET Ajax Call</h1>
          <div ng-controller="dbCtrl">
          <input type="text" ng-model="searchFilter" class="form-control">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Roll No</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="employ in data  track by $index">
                        <td>{{employ.name}}</td>
                        <td>{{employ.id}}</td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </body>

    <script>
        var fetch = angular.module('fetch', []);

        fetch.controller('dbCtrl', ['$scope', '$http', function ($scope, $http) {
            $http.get("ajax.php")
                .success(function(data){
                    $scope.data = data;
                })
                .error(function() {
                    $scope.data = "error in fetching data";
                });
        }]);

    </script>

    </html>-->
    
    <html ng-app="fetch">
    <head>
    <title>AngularJS GET request with PHP</title>
      <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.css">

      <script src="node_modules/angular/angular.js"></script>
    </head>

    <body>
    <br>
      <div class="container ">
        <div class="row">
          <h1>Angular $http GET Ajax Call</h1>
          <div ng-controller="dbCtrl">
          <input type="text" ng-model="searchFilter" class="form-control">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Roll No</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="students in data | filter:searchFilter">
                        <td>{{students.id}}</td>
                        <td>{{students.name}}</td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </body>

    <script>
        var fetch = angular.module('fetch', []);

        fetch.controller('dbCtrl', ['$scope', '$http', function ($scope, $http) {
            $http.get("fetch.php")
                .success(function(data){
                    $scope.data = data;
                    console.log(data);
                    console.log("hello")
                })
                .error(function() {
                    $scope.data = "error in fetching data";
                });
        }]);

    </script>

    </html>


