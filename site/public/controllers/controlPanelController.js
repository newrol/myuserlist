var app = angular.module('app', []);

app.directive('createUser', ['$http', function(){
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
