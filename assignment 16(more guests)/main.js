//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program
//informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
//• Print a new set of invitation messages, one for each person in your list.
var guestArr = ["HAFSA", "RIZWAN", "FAIZA"];
var canNotAttend = "FAIZA";
var newGuest = "SOHA";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
//guestArr.map((items)=>
//console.log(`Dear ${items}, I found a bigger table so i am invited more people`)
//);
//part2 begin
var guessBeg = "MISHARI";
guestArr.unshift(guessBeg);
console.log(guestArr);
//part 3 middle
var middleGuest = "ALI";
var middleIndex = guestArr.length / 3;
guestArr.splice(middleIndex, 0, middleGuest);
console.log(guestArr);
//PART 4 APPEND
guestArr.push("ZEESHAN");
console.log(guestArr);
//part 5 invitation message
guestArr.map(function (items) {
    return console.log(" Dear, ".concat(items, " you are invited for more people category in the dinner"));
});
