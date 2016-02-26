var app = angular.module('worldApp', [])
	app.controller('worldController', ['$scope', '$http', function($scope, $http){

		$scope.visit = false



		$scope.loadCountries = function(){
			$http.get('/countries').then(function(returnData){
				$scope.countries = returnData.data
			})
		}

		$scope.search = function(){
			$http.post('/search', {word: $scope.searchWord}).then(function(returnData){
				$scope.countries = returnData.data
			})
		}

		$scope.visited = function(index){
			$http.post('/visited', {}).then(function(returnData){
				
			})
			$scope.visit = true
			$scope.country[index].isVisited = 'Visited'
			$scope.country[index].visitColor = 'btn-success'
			$scope.visitCheck = true
		}


	}])