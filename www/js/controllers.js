angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope) {

})
      
.controller('calculadoraCtrl', function($scope) {
	/*$scope.primeiro=2008;
	$scope.segundo=2;*/
	$scope.primeiro = document.getElementById('txtPrimeiro').value;
	$scope.segundo = document.getElementById('txtSegundo').value;
	$scope.calcular = function(){
	var resultado = $scope.primeiro + $scope.segundo;
	console.log(resultado);
	}

})
   
.controller('sobreCtrl', function($scope) {

})
 