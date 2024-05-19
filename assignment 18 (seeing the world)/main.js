//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
//task 18
//define an array of places to visit .
var placesToVisit = ["Tokyo", "Paris", "NewYork", "Maldives", "Sydney"];
//print the array in its original order.
console.log("Original Order:", placesToVisit);
//print the array in alphabetic order without modifying the actual list.
console.log("Alphabetical Order:", __spreadArray([], placesToVisit, true).sort());
//print the array that show it is still in original order.
console.log("Original Order(unchanged):", placesToVisit);
//print the array in reverse alphabetical order without changing the order of original list.
console.log("Alphabetical Order:", __spreadArray([], placesToVisit, true).sort().reverse());
//print the array again that show that the list is still is in original order.
console.log("Original Order(unchanged):", placesToVisit);
//reserve the order of the list.
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);
//reverse the order list again to getb back to it's original order.
placesToVisit.reverse();
console.log("Back To It's Original Order:", placesToVisit);
//sort the array in alphabetical order.
placesToVisit.sort();
console.log("Alphabetical Order:", placesToVisit);
//sort the array in reverse alphabetical order.
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Reverse Alphabetical Order:", placesToVisit);
