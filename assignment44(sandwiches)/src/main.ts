// TASK 44

// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered. Call the function three times,
//  using a different number of arguments each time.

// Define the function that accepts an array of items for a sandwich
function makeSandwich(...items: string[]) {
    console.log("You have ordered a sandwich with the following items:");
    for (let item of items) {
        console.log(`- ${item}`);
    }
    console.log("Your sandwich is ready!\n");
}

// Call the function three times with different numbers of arguments
makeSandwich("Lettuce", "Tomato", "Turkey", "Cheese");
makeSandwich("Peanut Butter", "Jelly");
makeSandwich("Ham", "Cheese", "Mustard", "Pickles", "Onions");
