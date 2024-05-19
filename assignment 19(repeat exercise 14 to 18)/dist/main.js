"use strict";
// exercise 14 : guest list and invitation for the dinner.
let guestsArr = ["Albert Einstein", "David", "Ali"];
guestsArr.map((items) => (console.log(`Dear ${items} ,you are invited for the dinner.`)));
//EXERCISE 15 :changing guests
let guestArr = ["Albert Einstein", "David", "Ali"];
let canNotAttend = "Ali";
//console.log(canNotAttend + " " +"can not attend the dinner.")
let newGuest = "Sherlock";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
//console.log(guestArr)
guestArr.map((items) => console.log(`Dear ${items}, you are invited for the dinner,`));
