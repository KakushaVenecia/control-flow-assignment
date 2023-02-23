// Question 1 & 2 
// ARITHMETIC OPERATORS 
// Addition Operator examples 
let a = 7 
let b = 3 
let word1 = 'Hello '
let word2 = 'James'
console.log(a + b);


// subtraction operator 
console.log(a - b)
console.log('James Mentor'.length -3)

// assignment operator 
let x = 235  
y = x 
console.log(y)

// addition assignment operator
x += 3  
sentence = word2 += ' How are you?'
console.log (sentence)

// Comparison Operators
// Equality operator

let numb= 2
let str = '2'
 numb == str;

'venecia' == 'kakusha'
//Inequality operator(!=) 
 2 != '2' ;
'venecia' != 'Kakusha' 

// Logical Operators 
// Logical AND operator 
let myName = "Venecia";
let age = 25;
if (myName === "Venecia" && age === 30) {
  console.log("My Name is Ven and I love that I am turning 30.");
}else{
    console.log("This is unfortunate")
}

1 < 2 && 'hello' == 'hello'
// Logical OR operator 
true || false 
1 > 2 || 'hello' == 'world' 
// Bitwise AND operator
5 & 3 ;
// returns 1,
 13 & 7 
//  returns 5.

// Bitwise OR operator
5 | 3 
// returns 7, 
13 | 7 
// returns 15.



// Question 3
// // Define the class group
let classGroup = "Arts";

// Check the class group and output the subjects accordingly
if (classGroup === "Science") {
  console.log("Physics, Chemistry, Biology, Technical Drawing, English, Mathematics");
} else if (classGroup === "Social Science") {
  console.log("Accounting, Commerce, Marketing, Geography, English, Mathematics");
} else if (classGroup === "Arts") {
  console.log("Government, Economics, Literature, History, English, Mathematics");
} else {
  console.log(" English, Mathematics");
}



// // Question 4
// 1, 8 , 15 




// Question 5 
// Define the input number
const num = 3;
// Initialize the power of 2 and the difference variables
let pwr = 1;
let diff = Math.abs(num - pwr);
// Loop through the powers of 2 until the difference is not decreasing
for (let i = 2; diff >= Math.abs(num - i); i *= 2) {
  pwr = i;
  diff = Math.abs(num - pwr);
}
// check for a smaller value
if (pwr > 1 && diff > Math.abs(num - pwr/2)) {
  pwr /= 2;
}
console.log(`The number ${pwr} is the power of 2 nearest to ${num}.`)