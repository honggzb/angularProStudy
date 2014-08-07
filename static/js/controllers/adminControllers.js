angular.module("sportsStoreAdmin")
    .controller("authCtrl",function($scope,$http,$location){
        $scope.authenticate = function(user, pass){
              $http.post(authUrl,{
                  username: user,
                  password: pass
              },{
                  withCredentials: true
              }).success(function(data){
                  $location.path("/main");
              }).error(function(error){
                  $scope.authorizationError = error;
              })
        };
    })
    .controller("mainCtrl",function($scope){
        $scope.screens = ["Products","Orders"];
        $scope.current = $scope.screens[0];

        $scope.setScreen = function(index){
            $scope.current = $scope.screens[0];
        };
        $scope.getScreen = function(){
            return $scope.current == "Products" ? "/partial/adminProducts.html":"/partial/adminOrders.html";
        };
    })
