angular.module("personalSite")

.service('dataService', function(){
  var quotes = [
    {quote: "How did it get so late so soon? It\'s night before it\'s afternoon. December is here before it\'s June. My goodness how the time has flewn. How did it get so late so soon?", author: "Dr. Suess", id: 1},
    {quote: "My favorite things in life don\'t cost any money. It\'s really clear that the most precious resource we all have is time.", author: "Steve Jobs", id: 2},
    {quote:"Time is what we want most, but what we use worst.", author: "William Penn", id: 3},
    {quote: "If you don\'t have time to do it right, when will you have time to do it over?", author: "John Wooden", id: 4},
    {quote: "All the world\'s a stage, and all the men and women merely players: they have their exits and their entrances; and one man in his time plays many parts, his acts being seven ages.", author: "William Shakespeare", id: 5},
    {quote: "Time = Life. Therefore, waste your time and waste of your life, or master your time and master your life.", author: "Alan Lekein", id: 6},
    {quote: "Tough times never last, but tough people do.", author: "Robert H. Schuller", id: 7},
    {quote: "We must use time wisely and forever realize that the time is always ripe to do right.", author: "Nelson Mandela", id: 8}
  ];

  this.getData = function(){
    return quotes;
  };

});
