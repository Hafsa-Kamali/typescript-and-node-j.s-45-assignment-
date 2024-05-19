//Store a person's name in a variable , and then print that person name in lower case , upper case and title case.
var personName = "hafsa kamali";
//in lower case 
console.log("lowercase:", personName.toLowerCase());
//in upper case
console.log("uppercase:", personName.toUpperCase());
//in title case
//console.log("titlecase:", personName.replace(/\b\w/g,c=> c.toUpperCase()));
console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());
