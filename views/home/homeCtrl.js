angular.module("personalSite")
.controller("homeCtrl", function($scope, dataService){

$scope.phrases = dataService.getData();

// $scope.temperature = parseInt((weather.main.temp - 273.15)*1.8 + 32);
//
// console.log(2323, $scope.temperature)

});
