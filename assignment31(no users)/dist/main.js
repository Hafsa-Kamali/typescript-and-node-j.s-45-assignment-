"use strict";
// task 31
// //No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
//initial lists of users.
let users = ["Admin", "Eric", "Haseeb", "Ali", "Fatima"];
//Check if the list of users is empty and print a message
if (users.length === 0) {
    console.log("We need to find some users!");
}
else {
    console.log("we have users in the lists!");
}
console.log(`#....................................#`);
//removes all the users from the array.
users = [];
//Check again if the list of users is empty and print a message
if (users.length === 0) {
    console.log("We need to find some users!");
}
else {
    console.log("we have users in the lists!");
}
