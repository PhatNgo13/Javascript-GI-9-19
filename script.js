// // VERY EASY
// let vEasy1 = 10;
// let vEasy2 = 5;
// let difference = vEasy1 - vEasy2;
// console.log(`The difference between ${vEasy1} and ${vEasy2} is ${difference}.`)



// // EASY
// let name1 = prompt("What's the first name?");
// let length1 = name1.length
// let name2 = prompt("What's the second name?");
// let length2 = name2.length
// let nDifference = length1 - length2;

// console.log(`${name1} is longer than ${name2} by ${nDifference} characters`);

// console.log(length1);
// console.log(length2);
// function compare(){
//         if(length1 === length2){
//             console.log(`${name1} and ${name2} have the same length.`)
//         } else if(length1 > length2){
//             console.log(`${name1} is longer than ${name2} by ${nDifference}`)
//         } else {
//             console.log(`${name1} is shorter than ${name2} by ${nDifference}`)
//         };
// }

//MEDIUM
// let type = prompt("Type your message")

// if(type.toUpperCase() === type){
//     console.log("STOP YELLING")
// } else if(type.toLowerCase() === type){
//     console.log("speak up")
// } else{
//     console.log("speaking normally")
// };

// HARD
// let x = parseInt(prompt("What's the first number?"));
// let y = parseInt(prompt("what's the second number?"));

// function add(){
//     console.log(x + y);
// }
// add();

// function subtract(){
//     console.log(x - y);
// }
// subtract();

// function multiply(){
//     console.log(x * y);
// }
// multiply();

// function divide(){
//     console.log(x / y);
// }
// divide();

//VERY HARD
let num1 = parseInt(prompt("What's the first number?"))
let num2 = parseInt(prompt("What's the second number?"))
let operator = prompt("What's the operator?")

if(operator === "+"){
    let add = num1 + num2;
    console.log(`${num1} + ${num2} = ${add} `)
} else if (operator === "-"){
    let subtract = num1 - num2;
    console.log(`${num1} - ${num2} = ${subtract} `)
} else if (operator === "*"){
    let multiply = num1 * num2;
    console.log(`${num1} * ${num2} = ${multiply} `)
} else if (operator === "/"){
    let divide = num1 / num2;
    console.log(`${num1} / ${num2} = ${divide} `)
}