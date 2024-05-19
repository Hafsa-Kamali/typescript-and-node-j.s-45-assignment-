// exercise 14 : guest list and invitation for the dinner.

let guestsArr : string [] = ["Albert Einstein","David","Ali"];

guestsArr.map((items) => (console.log(`Dear ${items} ,you are invited for the dinner.` )));

//EXERCISE 15 :changing guests

 let guestArr : string [] =["Albert Einstein","David","Ali"];

let canNotAttend : string  ="Ali";

//console.log(canNotAttend + " " +"can not attend the dinner.")

let newGuest:  string  ="Sherlock";

guestArr[guestArr.indexOf(canNotAttend)]  =newGuest;

//console.log(guestArr)

guestArr.map((items)=>
console.log(`Dear ${items}, you are invited for the dinner,`)
)