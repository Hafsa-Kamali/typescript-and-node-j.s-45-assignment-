//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and 
//make a list that stores several examples. Use your list to print a series of statements about these items, 
//such as “I would like to own a Honda motorcycle.”
var transportation = ["Honda motorcycle", "Audi", "Honda Citi"];
transportation.map(function (items) { return console.log("I would like to own a ".concat(items)); });
