app.controller('productsCtrl', function ($scope, $http) {
    
    // read products
    $scope.getAll = function () {
        $http.get("read_products.php").success(function (response) {
            $scope.names = response.records;
//            angular.forEach($scope.names, function(item){
//                console.log( item.id + " " + item.name + " " +item.description + " " +item.price);  
//            });
            angular.forEach($scope.names, function(item){
                    console.log( item.id );  
                });
            })
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
        $http.post('create_product.php', {
            'name': $scope.name,
            'description': $scope.description,
            'price': $scope.price
        }
        ).success(function (data, status, headers, config) {
            console.log(data);
            // tell the user new product was created
            Materialize.toast(data, 4000);

            // close modal
            $('#modal-product-form').closeModal();

            // clear modal content
            $scope.clearForm();

            // refresh the list
            $scope.getAll();
        });
    };
    
    
    
    
    
    
    
    
    
    
    
    
    
     // clear variable / form values
    $scope.clearForm = function () {
        $scope.id = "";
        $scope.name = "";
        $scope.description = "";
        $scope.price = "";
    };
    
});


