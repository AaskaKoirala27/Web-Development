//=====================WEEK-1 (Basics)========================
/*
var x = "Aaska Koirala";
console.log(x);

x="Shahrukh Khan";
console.log(x);

let x=5;
let y=6;

let sum = x+y;
console.log('sum', sum)
let diff = x-y;
console.log('diff', diff)
let product = x*y;
console.log('product', product)
let division = x/y;
console.log('division', division)

if (x>y){
    console.log(x+' is greater than '+y);
}else{
    console.log(y+' is greater than '+x);
}
*/

//===================WEEK-2 (Using loops)====================
/*
let year = 2083;

if (year === 2082) {
    console.log('This is the current year 2082');
} else if (year < 2082) {
    console.log('This year has passed.');
} else {
    console.log('This year is yet to come.');
}
let num = 10;
// template literal
if(num%2==0){
    console.log(`${num} is even number`);
} else {
    console.log(`${num} is odd number`);
}
*/

//============WEEK - 3========================
/* (Functions)
function sum (a, b) {
  console.log(a + b);
  return a + b;
}
sum (4);
console.log(sum(4));


function product(a, b){
  return a*b;
}
product(4,5);
console.log(product(4,5)); 


let num = prompt("enter a number");
// for (let i = 1; i <= 10; i++) {
//   // console.log(num + "*" + i + " = " + num * i);
// }

let text = "";

for (let i = 1; i < 11; ++i) {

    let product = num * i;

    console.log(`${num} * ${i} = ${product}`);
}
===============================================================*/

/*Arrow function *|/
const mod=(a,b) = a%b;
console.log("the temainder is ', mod(5,2)")}
=====================================*/

// let num= prompt("enter a number");
// for (let i = 1; i <= 10; i++) {
// console.log(num + "*" + i + " = " + num * i);
// }

// let text= "";

// for (let i=1; i<11; ++i){

//     let product = num * i;

//     console.log(`${num} * ${i} = ${product}`);
//}
/*==========================
ARRAY
==============================*/

// let newArr = ['ram', 'hari', 'sita'];
// console.table(newArr);
// console.log(newArr[2]);

// newArr.push('ram bahadur')
// console.table(newArr);

// newArr.pop();
// newArr.pop();

// newArr.shift
// newArr.unshift('hanuman')
// console.table(newArr);
// console.log(newArr[2]);


/*====================== DOM Manipulation , Week-4==========================*/
const main = document.getElementById('main');
// console.log(main.innerHTML);

const myClass = document.getElementsByClassName("new-class");
console.log(myClass);
myClass[0].innerHTML = "Hello First";
myClass[1].innerHTML = "Hello Second";
myClass[2].innerHTML = "Hello Third";

