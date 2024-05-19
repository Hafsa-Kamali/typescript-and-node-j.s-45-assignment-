"use strict";
// TASK 37 
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message 
// that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and 
// the message printed on it. Call the function.
function make_shirt(size = 'large ', text = "I LOVE TYPESCRIPT") {
    console.log(`\n you order ${size} shirt that says ${text}`);
}
make_shirt();
make_shirt('medium');
//diFferent message 
make_shirt('small', '" I AM A WEB DEVELOPER AND SOFTWARE ENGINEER "');
