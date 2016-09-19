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
            cancelCreating();
            cancelEditing();
            console.log("currentCategory");
            console.log($scope.currentCategory);
            console.log(cancelCreating());
            console.log(cancelEditing());
            
        }
        
        function isCurrentCategory(category){
            return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
        }
        $scope.setCurrentCategory = setCurrentCategory;
        $scope.isCurrentCategory = isCurrentCategory;
        /*
         * -----------------------------
         * CRUD
         * -----------------------------
        */
        function resetCreateForm() {
            $scope.newBookmark = {
                title : '',
                url : '',
                category : $scope.currentCategory
            }
        }
        function createBookmark(bookmark){
            bookmark.id = $scope.bookmarks.lenght;
            $scope.bookmarks.push(bookmark);
            resetCreateForm();
        }
       $scope.createBookmark = resetCreateForm;
       
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
           resetCreateForm();
       }
        function cancelCreating() {
            $scope.isCreating = false;
        }
        function startEditing() {
            $scope.isCreating = false;
            $scope.isEditing = true;
        }
        function cancelEditing() {
            $scope.isEditing = false;
        }
        function shouldShowCreating() {
            return $scope.currentCategory && !$scope.isEditing;
        }
        
        function ShouldShowEditing() {
            return $scope.isEditing && !$scope.isCreating;
        }
        
        $scope.startCreating = startCreating;
        $scope.cancelCreating = cancelCreating;
        $scope.startEditing = startEditing;
        $scope.cancelEditing = cancelEditing;
        $scope.shouldShowCreating = shouldShowCreating;
        $scope.ShouldShowEditing = ShouldShowEditing;
        
        
    }]);