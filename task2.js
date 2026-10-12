//1. Declare var, reassign it, and print the result.
var designation="full stack developer";
designation="software engineer";
console.log(designation);
//Declare a variable using var with the value 30. Redeclare the same variable with the value 50 and print it.
var a=30;
var a=50;
console.log(a);
// Declare a variable using let with the value 100. Reassign it to 200 and print the result.
let age=100;
age=200;
console.log(age);
//4 Declare a variable using const to store your age. Print the value.
const myage=21;
console.log(myage);
//Identify which variable declarations are valid and which are invalid: var, let, and const.
var r=10;//valid
let j=20;//valid
const z=30;//valid
//Create three variables using var, let, and const to store your name, age, and city. Print all three.
var name="sudha";
let age3=21;
const city="hyderabad";
console.log(name,age3,city);
//Part 2: Printing Statements and Data Types (Questions 7–12)
//7. Use prompt() to get the user's name and display it using alert().
let username=prompt("enter your name");
alert("your name is"+username);
//use prompt() to get the user's age using prompt() and print it using console.log().
let age1=Number(prompt("enter your age"));
console.log("your age is"+age1);

 //Use confirm() to ask the user whether they know JavaScript. Print the returned value.
let js=confirm("Do you know javascript?");
console.log(js);
// Declare variables containing a string, number, boolean, and undefined value. Print each variable's value and type.
let str="hello";
let num=10;
let bool=true;
let x;
//11console.log(str,num,bool,x);
console.log(typeof str,typeof num,typeof bool,typeof x);
//11.  Create an array containing five fruits. Print the entire array, the first element, and the last element
let fruits=["apple","banana","mango","grosebery","kiwi"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);
// 12. Create an object containing two arrays and a vegetable name.
let obj={
    emails:["sweeety@123","sree@123"],
    vegetable:"carrot",
    nuts:["almond","cashew"]
}
console.log(obj);
 
console.log(obj.emails[obj.emails.length-1]);
console.log(obj.vegetable);
console.log(obj.nuts[0]);
console.log(obj.nuts[obj.nuts.length-1]);
//Arithmetic Operators in JavaScript (Questions 13–18)
//Declare two variables with values 15 and 4. Print their addition, subtraction, multiplication, and division
let num1=15;
let num2=4;
console.log(num1+num2);
console.log(num2-num2);
console.log(num1*num2);
console.log(num1/num2);
//Find the remainder when 27 is divided by 5 using the modulus operator
let num3=27;
console.log(num3%5);
//Calculate \(3^4\) using the exponentiation operator.
let num4=3;
console.log(num4**4);
//Declare a variable with the value 10. Apply the pre-increment operator and print the result.
let num5=10;
console.log(++num5);
//Declare a variable with the value 10. Apply the pre-decrement operator and print the result.
let num6=10;
console.log(--num6);
 

let l = 5;
let m = l++;

console.log(l);
console.log(m);
//Part 4: Pre/Post Increment and Decrement (12 Questions)
//9. Predict the output:
 let f = 4;
console.log(f++);
console.log(f);

let g= 4;
console.log(++g);
console.log(g);

let h= 8;
let i = h++;
console.log(h);
console.log(i);

let k = 8;
let o = ++k;
console.log(k);
console.log(o);

let p = 6;
let q = p--;
console.log(p);
console.log(q);

let s= 6;
let t = --s;
console.log(s);
console.log(t);

 let u= 2;
u++;
u++;
console.log(u);

let v = 10;
--v;
--v;
console.log(v);

let w = 3;
w = w++;
console.log(w);

let word = 4;
let word1 = word++;
console.log("word:", word);
console.log("word1:", word1);

let NUM = 5;
let NUM1 = --NUM;
console.log("NUM:", NUM);
console.log("NUM1:", NUM1);

let ab = 5;
let bc = ab++;
let cd = ++ab;

console.log(ab);
console.log(bc);
console.log(cd);



 




