//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
//and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, 
//print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. 
//Print your list to make sure you actually have an empty list at the end of your program.
//task 17
//initial array of guests
var guests = ["Alice", "Bob", "Charlie", "David"];
//print a message that only one person is invited for the dinner.
//console.log(`due to delay,you can invite only two person for the dinner. `);
// remove guests one at a time until two names remains.
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("sorry , ".concat(removedGuest, " you're longer not invited to dinner."));
}
//print a message to the two people in the list.
guests.forEach(function (Guest) {
    console.log("Dear ".concat(Guest, " ,you're still invited to the dinner."));
});
//remove the last two names from the list .
guests.pop();
guests.pop();
//print the final list to confirm it's empty.
console.log("final guest list:", guests);
