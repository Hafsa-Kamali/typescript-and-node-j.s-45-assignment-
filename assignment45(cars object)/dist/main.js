"use strict";
//task 45 
// Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments.
//  Call the function with the required information and two other name-value pairs,
//   such as a color or an optional feature.
//  Print the Object that’s returned to make sure all the information was stored correctly.
// Define the function to store car information
function createCar(manufacturer, model, ...options) {
    // Initialize the car object with the required properties
    let car = {
        manufacturer: manufacturer,
        model: model
    };
    // Add the optional properties to the car object
    for (let [key, value] of options) {
        car[key] = value;
    }
    // Return the car object
    return car;
}
// Call the function with required information and additional options
let car1 = createCar("Toyota", "Corolla", ["color", "red"], ["sunroof", true]);
let car2 = createCar("Tesla", "Model S", ["color", "black"], ["autopilot", true], ["battery", "100 kWh"]);
// Print the returned objects to verify the information
console.log(car1);
console.log(car2);
