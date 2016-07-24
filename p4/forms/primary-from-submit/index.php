<!DOCTYPE html>
<html>
    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Read Products</title>

        <!-- include material design CSS -->
        <link rel="stylesheet" href="css/materialize/css/materialize.css" />

        <!-- include material design icons -->
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <!-- custom CSS -->
        <!-- include angular js -->
        <script src="js/angular.js"></script>
<!--        <script src="js/moduls.js"></script>
        <script src="js/controllers.js"></script>-->
        <script src="js/app.js"></script>
        <style>
            .width-30-pct{
                width:30%;
            }

            .text-align-center{
                text-align:center;
            }

            .margin-bottom-1em{
                margin-bottom:1em;
            }
        </style>
    </head>
<body>
    <div class="container" ng-app="myApp" ng-controller="productsCtrl">
        <div class="row">
            <div class="col s12">
                <h4>Products</h4>
                <!-- used for searching the current list -->
                <input type="text" ng-model="search" class="form-control" placeholder="Search product..." />

                <!-- table that shows product record list -->
                <table class="hoverable bordered responsive-table">

                    <thead>
                        <tr>
                            <th class="text-align-center">ID</th>
                            <th class="width-30-pct">First Name</th>
                            <th class="text-align-center">First Name</th>
                            <th class="text-align-center">Email</th>
                            <th class="text-align-center">Description</th>
                            
                        </tr>
                    </thead>

                    <tbody ng-init="getAll()">
                        <tr ng-repeat="d in names" >
                            <td class="text-align-center">{{ d.id }}</td>
                            <td>{{ d.firstname }}</td>
                            <td>{{ d.lastname }}</td>
                            <td>{{ d.email }}</td>
                            <td>{{ d.description }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    
    
    
</body>
</html>