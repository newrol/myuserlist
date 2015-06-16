var app = angular.module('app', ['ngAnimate', 'ngTouch','ui.grid']);


app.directive('createUser', ['$http', function($scope){
	// Runs during compile
	return {
		restrict: 'E',
		templateUrl: '/views/create-user.html',
		controller: function($scope, $http){

			$scope.submit = function() {
	
 				$http.post('http://localhost:3000/api/user', $scope.user).
				  success(function(data, status, headers, config) {	    
  					alert('usuario creado con exito');
  					$scope.user = {}
  				}).
				error(function(data, status, headers, config) {
				    alert(status + 'El usuario no ha podido crearse');
				});
 			};

 			$scope.clear = function(user){
 				$scope.user = {} 	
 			};
		}
	};
}]);


app.controller('MainCtrl', ['$scope', '$http', function($scope, $http, uiGridConstants){

    $http.get('http://localhost:3000/api/allUsers')
        .success(function(data){
 	  $scope.userData = data;
 	});  
}]);