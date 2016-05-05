 <!DOCTYPE html>
<html ng-app="myApp">
<head>
  <meta charset="UTF-8">
  <title>AngularJS GET request with PHP</title>
  <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.css">
  <script src="node_modules/angular/angular.js"></script>
  <script src="modules/module.js"></script>
  <script src="controllers/controller.js"></script>
  <script src="node_modules/modernizr/modernizr.js"></script>
</head>

<body>
  <div class="container">
    <div class="row">
      <h1>Angular $http GET Ajax Call</h1>
      <div ng-controller="dbCtrl">
      <input type="text" ng-model="searchFilter" class="form-control">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Roll No</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="x in data | filter:searchFilter">
                    <td>{{x.id}}</td>
                    <td>{{x.roll}}</td>
                    <td>{{x.name}}</td>
                    <td>{{x.city}}</td>
                    <td>{{x.country}}</td>
                </tr>

            </tbody>
        </table>
      </div>
    </div>
  </div>
</body>
</html>