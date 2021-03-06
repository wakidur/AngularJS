app.controller('productsCtrl', function ($scope, $http) {

    // read products
    $scope.getAll = function () {
        /*$http.get("read_products.php").success(function (response) {

         $scope.names = response.records;
         angular.forEach($scope.names, function(item){
         //console.log( item.id + " " + item.name + " " +item.description + " " +item.price);  
         console.log( item.id + "========");  
         });
         });*/

        $http({
            method: 'GET',
            url: 'read_products.php'
        }).success(function (response, status, header, config) {
            $scope.names = response.records;
            angular.forEach($scope.names, function (item) {
                console.log(item.id + "========");
            });
        }).error(function (response, status, header, config) {
            // error handler
            console.log("respnse error" + response.records);
        });

    };

    // more angular JS codes will be here
    $scope.showCreateForm = function () {
        // clear form
        $scope.clearForm();
        // change modal title
        $('#modal-product-title').text("Create New Product");
        // hide update product button
        $('#btn-update-product').hide();
        // show create product button
        $('#btn-create-product').show();

    };

    // create new product 
    $scope.createProduct = function () {
        // fields in key-value pairs
        $http.post(
            'create_product.php',
            {
                'name': $scope.name,
                'description': $scope.description,
                'price': $scope.price
            }
        ).success(function (data, status, headers, config) {
            console.log(data);
            // tell the user new product was created
            // Materialize.toast(message, displayLength, className, completeCallback);
             //Materialize.toast('I am a toast', 4000,'rounded',function(){alert('Your toast was dismissed')});
             //Materialize.toast('I am a toast!', 3000, 'rounded') // 'rounded' is the class I'm applying to the toast
            //Materialize.toast('I am a toast!', 4000) // 4000 is the duration of the toast
            //<a class="btn" onclick="Materialize.toast('I am a toast', 4000)">Toast!</a>
            Materialize.toast(data, 4000);
            // close modal
            $('#modal-product-form').closeModal();
            // clear modal content
            $scope.clearForm();
            // refresh the list
            $scope.getAll();
        });
    };

    // retrieve record to fill out the form
    $scope.readOne = function (id) {
        // change modal title
        $('#modal-product-title').text("Edit Product");
        // show udpate product button
        $('#btn-update-product').show();
        // hide create product button
        $('#btn-create-product').hide();
        // post id of product to be edited
        $http.post('read_one.php', {
            'id': id
        }).success(function (data, status, headers, config) {
            // put the values in form
            $scope.id = data[0]["id"];
            $scope.name = data[0]["name"];
            $scope.description = data[0]["description"];
            $scope.price = data[0]["price"];
            // show modal
            $('#modal-product-form').openModal();
        }).error(function (data, status, headers, config) {
            Materialize.toast('Unable to retrieve record.', 4000);
        });
    };
    // update product record / save changes
    $scope.updateProduct = function () {
        $http.post('update_product.php', {
            'id': $scope.id,
            'name': $scope.name,
            'description': $scope.description,
            'price': $scope.price
        }).success(function (data, status, headers, config) {
            // tell the user product record was updated
                Materialize.toast(data, 4000);
            // close modal
                 $('#modal-product-form').closeModal();
            // clear modal content
                $scope.clearForm();
            // refresh the product list
                $scope.getAll();
            });
    }

    // delete product
    $scope.deleteProduct = function (id) {
        // ask the user if he is sure to delete the record
        if (confirm("Are you sure?")) {
            // post the id of product to be deleted
            $http.post('delete_product.php', {
                'id': id
            }).success(function (data, status, headers, config) {
                // tell the user product was deleted
                Materialize.toast(data, 4000);
                // refresh the list
                $scope.getAll();
            });
        }
    };
    // clear variable / form values
    $scope.clearForm = function () {
        $scope.id = "";
        $scope.name = "";
        $scope.description = "";
        $scope.price = "";
    };

});


