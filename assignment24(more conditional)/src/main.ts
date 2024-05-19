//task 24 

// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons,
//  write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
//  and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

// Tests for Equality and Inequality with Strings

// Equality
const testStringEquality: boolean = "hello" === "hello";  // True
const testStringEquality2: boolean = "world".toLowerCase() === "World".toLowerCase();  // False

// Inequality
const testStringInequality: boolean = "PYTHON".toUpperCase()!== "JAVA".toUpperCase() // True
const testStringInequality2: boolean = "Python" !== "Python";  // False

// Tests Using the Lower Case Function

// Lower case equality
const testLowerCase: boolean = "HELLO".toLowerCase() === "hello";  // True
const testLowerCase2: boolean = "WORLD".toLowerCase() === "world";  // True
const testLowerCase3: boolean = "PYTHON".toLowerCase() === "Java";  // False

// Lower case inequality
const testLowerCaseInequality: boolean = "HELLO".toLowerCase() !== "hello";  // False
const testLowerCaseInequality2: boolean = "WORLD".toLowerCase() !== "WORLD";  // True

// Numerical Tests Involving Equality and Inequality, Greater Than and Less Than, Greater Than or Equal To, and Less Than or Equal To

// Equality
const testNumericalEquality: boolean = 10 === 10;  // True
const testNumericalEquality3: boolean = 10 === 10.0; // False

// Inequality
const testNumericalInequality: boolean = 10 !== (10 as any);  // True
const testNumericalInequality2: boolean = 8 !== 8;  // False

// Greater than
const testGreaterThan: boolean = 15 > 10;  // True
const testGreaterThan2: boolean = 5 > 10;  // False

// Less than
const testLessThan: boolean = 3 < 7;  // True
const testLessThan2: boolean = 10 < 5;  // False

// Greater than or equal to
const testGreaterEqual: boolean = 10 >= 10;  // True
const testGreaterEqual2: boolean = 6 >= 8;  // False

// Less than or equal to
const testLessEqual: boolean = 4 <= 4;  // True
const testLessEqual2: boolean = 9 <= 7;  // False

// Tests Using "and" and "or" Operators

// "and" operator
const testAndOperator: boolean = (5 > 3) && (8 > 6);  // True
const testAndOperator2: boolean = (5 > 3) && (8 < 6);  // False

// "or" operator
const testOrOperator: boolean = (5 > 3) || (8 < 6);  // True
const testOrOperator2: boolean = (5 < 3) || (8 < 6);  // False

// Combining "and" and "or"
const testCombinedOperators: boolean = (5 > 3) && ((8 < 6) || (7 === 7));  // True
const testCombinedOperators2: boolean = (5 < 3) || ((8 < 6) && (7 !== 7));  // False

// Test Whether an Item Is in a Array

const fruits: string[] = ['apple', 'banana', 'cherry'];
const testInArray: boolean = fruits.includes('apple');  // True
const testInArray2: boolean = fruits.includes('grape');  // False

// Test Whether an Item Is Not in a Array

const testNotInArray: boolean = !fruits.includes('grape');  // True
const testNotInArray2: boolean = !fruits.includes('banana');  // False
