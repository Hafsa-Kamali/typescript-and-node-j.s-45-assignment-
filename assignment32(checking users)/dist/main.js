"use strict";
//task 32
// Checking Usernames: Do the following to create a program that simulates how websites ensure that
//  everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the 
// new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has,
//  print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// List of current users
let current_users = ["Alice", "Bob", "Charlie", "David", "Eve"];
// List of new users to check
let new_users = ["Frank", "George", "alice", "Hannah", "EVE"];
// Convert current_users to lowercase for case-insensitive comparison
let lowercased_current_users = current_users.map(user => user.toLowerCase());
// Loop through new_users and check against lowercased_current_users
for (let new_user of new_users) {
    // Convert the new username to lowercase
    let new_user_lowercased = new_user.toLowerCase();
    // Check if the new username is already in the list of current users
    if (lowercased_current_users.includes(new_user_lowercased)) {
        console.log(`The username '${new_user}' is already taken. Please enter a new username.`);
    }
    else {
        console.log(`The username '${new_user}' is available.`);
    }
}
