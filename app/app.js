angular.module("personalSite", ["ngRoute"])
  .config(function($routeProvider) {

    $routeProvider.when("/", {
      templateUrl: "views/home/home.html",
      controller: 'homeCtrl'
        // resolve: {
        //   weather: function(weatherService){
        //   return weatherService.getWeather("provo").then(function(response){
        //       console.log(response)
        //       return response
        //     })
        //   }
        // }
    })

    $routeProvider.when("/about", {
      templateUrl: "views/about/about.html",
      controller: 'aboutCtrl'
    })

    $routeProvider.when("/contact", {
      templateUrl: "views/contact/contact.html",
      controller: 'contactCtrl'
    })

    $routeProvider.when("/portfolio", {
        templateUrl: "views/portfolio/portfolio.html",
        controller: 'portfolioCtrl'
      })
      .otherwise({
        redirectTo: "/"
      })

  });
