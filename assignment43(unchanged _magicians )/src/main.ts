// task 41 is connected .

function show_magicians(magicians: string[]): void  {

    for(const magician of magicians ){
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));

    }
}
const magician: string[] =["herry","alex","david"];
show_magicians(magician);



// TASK 42 

// Great Magicians: Start with a copy of your program from Exercise 39.
//  Write a function called make_great() that modifies the array of magicians by 
//  adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has
//   actually been modified.

function make_great(magicians : string []): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
}
const magicians2 : string[] = ["Kevin", "Peter","Ali"]
make_great(magicians2);
show_magicians(magicians2);



//TASK 43 because it is connected to task 41 and 42 .

// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array
//  of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array.
//   Call show_magicians() with each array to show that you have one array of the original names and
// one array with the Great added to each magician’s name.


function make_great2(magicians: string[]):string[] {
    const greatMagicians : string[] = [];
    for(let i = 0 ; i < magicians.length ; i++){
        greatMagicians.push("The Great " + magicians[i]);
    }
    return greatMagicians ;

}
const Magicians3 : string[] =["usman","wajahat","bilal"];
const greatMagicians2 : string[] = make_great2(Magicians3);
show_magicians(Magicians3);
show_magicians(greatMagicians2);