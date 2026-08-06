// Data Types Practice
let name = "Mahmud Toheeb Adebayo";
const age = 26;
let isStudentActive = true;
console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(isStudentActive));

// ARRAY
let shoppingList = ["rice", "beans", "spagetti", "noddles"];
console.log(shoppingList);
console.log(typeof(shoppingList));
/**
 *  I notice that the type of the shoppinglist is object inteead of array
 * secondly i notice the quotation i used in the strings inside the array remains
 */


//  Section B: Arithmetic Operators
let num1 = 10;
let num2 = 5;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

let remainder = 17 % 5;
console.log(remainder);

let price = 1500;
let discount = 200;
let finalPrice = price - discount;
console.log(finalPrice);

// Section C: Comparison Operators
let a = 10;
let b = "10";
console.log(a == b);
console.log(a === b);
/**
 * in The first one (a == b) the double equal to sign is comparing a and b 
 * while the second one is strictly comparing a and b that is there must be the same data type
 */

let score = 75;
console.log(score >= 50);

// Section D: Logical Operators
let hasTicket = true;
let hasID = false;
hasTicket && hasID;
hasTicket || hasID;


// Section E: Mini Project
let password = "1234";
let correctPassword = "1234";

console.log(password === correctPassword);

let budget = 5000;
let itemPrice = 1200;

(budget >= itemPrice) && (budget > 0);
