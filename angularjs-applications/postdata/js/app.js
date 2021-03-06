$postModule = angular.module('postModule', []);
$postModule.controller('PostController', function ($scope, $http) {
    $scope.post = {};
    $scope.post.users = [];
    $scope.tempUser = {};
    $scope.editMode = false;
    $scope.index = '';

    $scope.init = function () {
        $http({
            method: 'post',
            url: 'ajax.php',
            data: $.param({
                'type': 'getUsers'
            }),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data, status, headers, config) {
            if (data.success && angular.isDefined(data.data)) {
                $scope.post.users = data.data;
            } else {
                $scope.messageFailure(data.message);
            }
        }).error(function (data, status, headers, config) {
            //$scope.messageFailure(data.message);
            alert("An error occurred during the AJAX request");
        });
    }
    $scope.saveUser = function () {
        $http({
            method: 'post',
            url: 'ajax.php',
            data: $.param({
                'user': $scope.tempUser,
                'type': 'save_user'
            }),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data, status, headers, config) {
            if (data.success) {
                if ($scope.editMode) {
                    console.log("Use when edit mode data save");
                    $scope.post.users[$scope.index].id = data.id;
                    $scope.post.users[$scope.index].name = $scope.tempUser.name;
                    $scope.post.users[$scope.index].email = $scope.tempUser.email;
                    $scope.post.users[$scope.index].companyName = $scope.tempUser.companyName;
                    $scope.post.users[$scope.index].designation = $scope.tempUser.designation;
                } else {
                    console.log("Use when create mode data save");
                    $scope.post.users.push({
                        id: data.id,
                        name: $scope.tempUser.name,
                        email: $scope.tempUser.email,
                        companyName: $scope.tempUser.companyName,
                        designation: $scope.tempUser.designation
                    });
                }
                $scope.messageSuccess(data.message);
                $scope.userForm.$setPristine();
                $scope.tempUser = {};

            } else {
                $scope.messageFailure(data.message);
            }
        }).
                error(function (data, status, headers, config) {
                    //$scope.codeStatus = response || "Request failed";
                    alert("An error occurred during the AJAX request");
                });

        $('.btn-save').button('reset');
    };

    $scope.addUser = function () {

        $('.btn-save').button('loading');
        $scope.saveUser();
        $scope.editMode = false;
        $scope.index = '';

    }



    $scope.editUser = function (user) {
        $scope.tempUser = {
            id: user.id,
            name: user.name,
            email: user.email,
            companyName: user.companyName,
            designation: user.designation
        };
        $scope.editMode = true;
        $scope.index = $scope.post.users.indexOf(user);
    }
    $scope.updateUser = function () {
        $('.btn-save').button('loading');
        $scope.saveUser();
        console.log("update mode button click");
    }

    $scope.deleteUser = function (user) {
        var r = confirm("Are you sure want to delete this user!");
        if (r == true) {
            $http({
                method: 'post',
                url: 'ajax.php',
                data: $.param({
                    'id': user.id,
                    'type': 'delete_user'
                }),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data, status, headers, config) {
                if (data.success) {
                    var index = $scope.post.users.indexOf(user);
                    $scope.post.users.splice(index, 1);
                } else {
                    $scope.messageFailure(data.message);
                }
            }).
                    error(function (data, status, headers, config) {
                        //$scope.messageFailure(data.message);
                        alert("An error occurred during the AJAX request");
                    });
        }
    }



    $scope.messageFailure = function (msg) {
        $('.alert-failure-div > p').html(msg);
        $('.alert-failure-div').show();
        $('.alert-failure-div').delay(5000).slideUp(function () {
            $('.alert-failure-div > p').html('');
        });
    }

    $scope.messageSuccess = function (msg) {
        $('.alert-success-div > p').html(msg);
        $('.alert-success-div').show();
        $('.alert-success-div').delay(5000).slideUp(function () {
            $('.alert-success-div > p').html('');
        });
    }


    $scope.getError = function (error, name) {
        if (angular.isDefined(error)) {
            if (error.required && name == 'name') {
                return "Please enter name";
            } else if (error.email && name == 'email') {
                return "Please enter valid email";
            } else if (error.required && name == 'company_name') {
                return "Please enter company name";
            } else if (error.required && name == 'designation') {
                return "Please enter designation";
            } else if (error.required && name == 'email') {
                return "Please enter email";
            } else if (error.minlength && name == 'name') {
                return "Name must be 3 characters long";
            } else if (error.minlength && name == 'company_name') {
                return "Company name must be 3 characters long";
            } else if (error.minlength && name == 'designation') {
                return "Designation must be 3 characters long";
            }
        }
    }

});