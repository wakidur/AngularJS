var myApp = angular.module('Eggly', []);
    myApp.controller('MainCtrl',['$scope', function ($scope) {
        $scope.categories = [
            {"id": 0, "name": "Development"},
            {"id": 1, "name": "Design"},
            {"id": 2, "name": "Exercise"},
            {"id": 3, "name": "Humor"}
        ];
        
        $scope.bookmarks = [
            {
                "id": 0, 
                "title": "AngularJS", 
                "url": "http://angularjs.org", 
                "category": "Development" 
            },
            {
                "id": 1, 
                "title": "Egghead.io", 
                "url": "http://angularjs.org", 
                "category": "Development" 
            },
            {
                "id": 2, 
                "title": "A List Apart", 
                "url": "http://alistapart.com/", 
                "category": "Design"
            },
            {
                "id": 3, 
                "title": "One Page Love", 
                "url": "http://onepagelove.com/", 
                "category": "Design"
            },
            {
                "id": 4,
                "title": "MobilityWOD",
                "url": "http://www.mobilitywod.com/", 
                "category": "Exercise"
            },
            {
                "id": 5,
                "title": "Robb Wolf",
                "url": "http://robbwolf.com/",
                "category": "Exercise" 
            },
            {
                "id": 6, 
                "title": "Senor Gif", 
                "url": "http://memebase.cheezburger.com/senorgif", 
                "category": "Humor"
            },
            {
                "id": 7, 
                "title": "Wimp", 
                "url": "http://wimp.com", 
                "category": "Humor" 
            },
            {
                "id": 8, 
                "title": "Dump", 
                "url": "http://dump.com", 
                "category": "Humor"
            },
            {
                "id": 9, 
                "title": "jQuery developer", 
                "url": "http://dump.com", 
                "category": "Development"
            }
        ];
        
        
        
        
        $scope.currentCategory = null;
        
        function setCurrentCategory(category){
            $scope.currentCategory = category;
            console.log($scope.currentCategory.id);
            console.log($scope.currentCategory.name);
            
            cancelCreating();
            cancelEditing();  
        }
        
        function isCurrentCategory(category){
            //console.log($scope.currentCategory.name)  ;
            return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
        }
        $scope.setCurrentCategory = setCurrentCategory;
        $scope.isCurrentCategory = isCurrentCategory;
        /*
         * -----------------------------
         * Creating and editing states
         * -----------------------------
        */
       $scope.isCreating = false;
       $scope.isEditing = false;
       
       function startCreating() {
           $scope.isCreating = true;
           $scope.isEditing = false;
       }
        function cancelCreating() {
            $scope.isCreating = false;
            console.log("$scope.isCreating == " + $scope.isCreating)
        }
        function startEditing() {
            $scope.isCreating = false;
            $scope.isEditing = true;
        }
        function cancelEditing() {
            $scope.isEditing = false;
            console.log("$scope.isCreating ==== " + $scope.isCreating );
        }
        function shouldShowCreating() {
            
            //var a = $scope.currentCategory && !$scope.isEditing;
            //$scope.b = $scope.currentCategory && !$scope.isEditing;
            //console.log('full variable value A == ' + a + "\n");
            //console.log('full variable value B == ' + $scope.b + "\n");
            //console.log('currentCategory == ' + $scope.currentCategory + "\n");
            //console.log('isEditing == ' + !$scope.isEditing + "\n");
            return $scope.currentCategory && !$scope.isEditing;
            
             
        }
        /*
        function ShouldShowEditing() {
            $scope.w = $scope.isEditing && !$scope.isCreating;
            console.log("$scope.isEditing == " + $scope.isEditing );
            console.log("!$scope.isCreating == " + !$scope.isCreating );
            console.log("Main value == " + $scope.w );
            return $scope.isEditing && !$scope.isCreating;
            
        }
        */
        $scope.ShouldShowEditing = function(){
            $scope.w = $scope.isEditing && !$scope.isCreating;
            console.log("$scope.isEditing == " + $scope.isEditing );
            console.log("!$scope.isCreating == " + !$scope.isCreating );
            console.log("Main value == " + $scope.w );
            return $scope.isEditing && !$scope.isCreating;
            
        }
        
        $scope.startCreating = startCreating;
        $scope.cancelCreating = cancelCreating;
        $scope.startEditing = startEditing;
        $scope.cancelEditing = cancelEditing;
        $scope.shouldShowCreating = shouldShowCreating;
        //$scope.ShouldShowEditing = ShouldShowEditing;
        
        
    }]);