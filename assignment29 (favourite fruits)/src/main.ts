//TASK 29 

// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements
//  that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array.
//  If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_fruits: string []=["mango","strawberries","orange","berry","pomegranate","apple"];

if(favorite_fruits.includes("mango")){
    console.log("mango!");
}
if (favorite_fruits.includes("strawberries")){
    console.log("strawberries!");

}
if (favorite_fruits.includes("orange")){
    console.log("orange!");

}
if (favorite_fruits.includes("pomegranate")){
    console.log("pomegranates");
}
if (favorite_fruits.includes("berry")){
    console.log("you really like bananas!");

}
if (favorite_fruits.includes("apple")){
    console.log("you really like bananas!");
}
