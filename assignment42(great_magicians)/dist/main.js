"use strict";
// task 41 is connected .
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
const magician = ["herry", "alex", "david"];
show_magicians(magician);
// TASK 42 
// Great Magicians: Start with a copy of your program from Exercise 39.
//  Write a function called make_great() that modifies the array of magicians by 
//  adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has
//   actually been modified.
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
}
const magicians2 = ["kevin", "peter", "ali"];
make_great(magicians2);
show_magicians(magicians2);
