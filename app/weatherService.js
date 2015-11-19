angular.module("personalSite")

.service("weatherService", function($http, $q){

  this.getWeather = function(city){
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city
    }).then(function(response){
      var weatherResults = response.data
      console.log(weatherResults)
      deferred.resolve(weatherResults)
    })
    return deferred.promise;
  }
});
