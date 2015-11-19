angular.module("personalSite")

.directive("showTime", function(){
  return {
    restrict: 'AE',
    template: "{{time | date: 'h:mm a'}}",
    link: function(scope, element, attributes){
      var currentTime = new Date();
      scope.time = currentTime;
    }
  }
});
