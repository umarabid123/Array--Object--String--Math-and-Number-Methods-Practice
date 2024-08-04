// At MEthod

// let num = [1,3,5,7];

//  console.log(num.at(1));

// Add Element at the last end of the array

//  num.push(6);
//  console.log(num);

// Removing element at end of array

// num.pop()
// console.log(num);

// Fill all elemnts with same numbers

// num.fill(2);
// console.log(num);

// Removing first element of the array

// num.shift()
// console.log(num);

// Add Elemnts at the start of the array

// num.unshift(9);
// console.log(num);

// Reverse array to accending or decending  order

// num.reverse()
// console.log(num);

// num.reverse()
// console.log(num);

// Check elements is exist

// console.log(num.includes(3));

// map elements in the array

// let num1 = num.map(item => 3*item)
// console.log(num1);

// filter the array  elements or etc

// let num1 =num.filter(item => item > 5)
// console.log(num1);

// find element first less existing element in the array and if we used greater than

// console.log(num.find(item => item<5));

// check if the every element of the array is greater then 0 or a specific number

// console.log(num.every(item => item <0));

// find the index of the array

// if u have multiple same values the its return first existing position of this element

// console.log(num.findIndex(item => item ==7));

// convert integer to string

// let num1 = num.toString();
// console.log(typeof num1);

// join array or etc in the arr
// let num2 = [9,10,12,13]
// let num3 =[]
//  num3 = num.join(num2)
// console.log(num3);
// console.log(num.join("*"));

// Adding and removing Elements in enywhere in the array
// num.splice(2, 0, 8,9 )
// console.log(num);

// slice element in the array and store in this slice in new array

// console.log(num.slice(1,3));

// sort Elements Alphabetically
// console.log(num.sort());

// sort array elements in desending order
// console.log(num.sort(function(a,b){ return b-a} ));

// sort array elements in Assending order
// console.log(num.sort(function(a,b){ return a-b} ));

// setInterval(encourage, 500);
// function encourage() {
//  console.log("You're doing great, keep going!");
// }

// let promise = new Promise(function (resolve, reject) {
//     // do something that might take a while
//     // let's just set x instead for this example
//     let x = 20;
//     if (x < 10) {
//     resolve(x); // on success
//     } else {
//     reject("Too low"); // on error
//     }
//    });
//    promise.then(
//     function (value) {
//     console.log("Success:", value);
//     },
//     function (error) {
//     console.log("Error:", error);
//     }
//    );

// let mypromise = Promise.resolve("Start counting");

// function counter(value){
// console.log(value);

// }

// mypromise.then((value) => counter("Start counting")).then(() =>{
//     counter("One")
// }).then((value) => value).then(() =>{
//     counter("Two")
// }).then((value) => value).then(() =>{
//     counter("Three")
// });

// 1. Set up a Promise that resolves with a value of "Start Counting".
// const startCountingPromise = new Promise((resolve, reject) => {
//     resolve("Start Counting");
// });

// // 2. Create a function named counter() that has one argument that gets the value and outputs it into the console.
// function counter(value) {
//     console.log(value);
// }

// // 3. Set up the next function in the Promise with four then() instances
// startCountingPromise
//     .then((value) => {
//         counter(value); // Outputs "Start Counting"
//         return "one"; // Returns "one" for the next then()
//     })
//     .then((value) => {
//         counter(value); // Outputs "one"
//         return "two"; // Returns "two" for the next then()
//     })
//     .then((value) => {
//         counter(value); // Outputs "two"
//         return "three"; // Returns "three" for the next then()
//     })
//     .then((value) => {
//         counter(value); // Outputs "three"
//         return "Four"
//     }).then((value) => counter(value));

// function saySomething(x) {
//     return new Promise(resolve => {
//     setTimeout(() => {
//     resolve("something" + " " + x);
//     }, 2000);
//     });
//    }
//    async function talk(x) {
//     const words = await saySomething(x);
//     console.log(words);
//    }
//    talk(2);
//    talk(4);
//    talk(8);

let num = [1, 3, 5, 7];
// console.log(num.at(3));
// num.push(8)
// console.log(num);

// num.pop();
// console.log(num);

// num.fill(6);
// console.log(num);

// num.shift()
// console.log(num);

// num.unshift(6);
// console.log(num);

// num.reverse();
// console.log(num);
// let num2 =num.includes(3);
// console.log(num2);

// console.log(arr2);

// let arr2 = num.map(item => item*6);

// console.log(num.filter(item => item > 2));

// console.log(num.find(item => item < 2));

// console.log(num.every(item => item>1));

// console.log(num.findIndex(item => item ==3));

// let arr =num.toString()

// console.log(typeof arr);

// console.log(num.join(","));

// num.splice(2, 0, "i", "r");

// console.log(num);

// let arr = num.slice(1, 3);
// console.log(arr);

// let arr2 =num.sort(function(a, b){return b -a});
// console.log(arr2);

// Dates

let a = new Date();

// get today date
// console.log(a.getDate());

// get day number of week
// console.log(a.getDay());

// year like 2024
// console.log(a.getFullYear());

// get minutes (0-59)

// console.log(a.getMinutes());

// get Months from (0-7)
// console.log(a.getMonth());

// get seconds from (0-59)
// console.log(a.getSeconds());

// get Time
// console.log(a.getTime());

// for hours (0-23)
// console.log(a.getHours());

// For Mili Seconds

// console.log(a.getMilliseconds());

// let person = [1,2,3,4,5,6];

// const [c,,,e] =person;

// console.log(e);

// let person ={name:"umar", age:24, Gender:"Male"};

// let {name:firstName,age:Age} = person;
// let {name,age,Gender} = person;
// console.log(firstName);
// console.log(age);

// Object Methods

// let obj ={
//     firstName:"Umar",
//     age:21,
//     Gender:"Male",
//     Greet:function(){
//         console.log("Hello EveryOne");

//     }
// }

// obj.age = 22;
// // obj[age]++;
// console.log(obj);

// console.log(obj.Greet());

// let prin = obj.Greet();
// console.log(obj.Greet());

// Math Method
let num2 = 3.665;

// Round near after decimal number like if up to 3.5 then its return answer 4 if thats less than 3.5 like 3.4 then this return
// 3
// console.log(Math.round(num2));

// For Power like 6 ki power 2
// console.log(Math.pow(6,2));

// FOr Sequre Root
// console.log(Math.sqrt(9));

// Always Positive
// console.log(Math.abs(-3.14));

// floor used for round down
// console.log(Math.floor(num2));

// Ceil used for round up like 3.14 to 4
// console.log(Math.ceil(num2));

// Math sin
// console.log(Math.sin(90));

// Math Cos
// console.log(Math.cos(90));

//Math minmum value
// console.log(Math.min(1,2,4,5,6,7));

// Math Maximum Value
// console.log(Math.max(1,2,4,5,6,7));

// Math log used for calculate log of num
// console.log(Math.log(90));

// Used for Exponent
// console.log(Math.exp(3));

// Genrate Random Number from 0-1
// console.log(Math.random());

// Genreate Random number from 1-5
// console.log(Math.floor(Math.random()*5));

// Numbers methods of Javascript

let num4 = 3.456;

// fixed mean fixed before decimal point
// console.log(num4.toFixed());

// fixed number after decimal point
// console.log(num4.toFixed(1));

// set numbers after decimal point
// console.log(num4.toPrecision(2));

// return the number of value of variable
// console.log(num4.valueOf());

// convert boleon to number
// console.log(Number(true));

//
// console.log(Number(new Date()));

// function greet1(callback){
// callback();
// }
// function greet(){
//     console.log("Hi EveryOne");

// }

// greet1(greet);

// function gradeCheck(grade) {
//   switch (true) {
//     case grade == "A":
//       console.log("You got an", grade, ": amazing!");
//       break;
//     case grade == "B":
//       console.log("You got an", grade, ": well Done!");
//       break;
//     case grade == "C":
//       console.log("You got an", grade, ": well Done!");
//       break;
//     case grade == "D":
//       console.log("You got an", grade, ": well Done!");
//       break;
//     default:
//       console.log("Sorry your grade is", grade, ":You Failed  !");
//       break;
//   }
// }
// function getGrade(score, callback) {
//   let grade;
//   switch (true) {
//     case score >= 90:
//     grade = "A";
//     break;
//       case score >= 80:
//       grade="B";
//       break;
//     case score >= 70:
//       grade="C";
//       break;
//     case score >= 60:
//       grade="C";
//       break;
//     default:
//       grade="F";
//   }
//   callback(grade);
// }

// getGrade(80, gradeCheck);

// function getGrade(score, callback) {
//     let grade;
//     switch (true) {
//     case score >= 90:
//     grade = "A";
//     break;
//     case score >= 80:
//     console.log(score);
//     grade = "B";
//     break;
//     case score >= 70:
//     grade = "C";
//     break;
//     case score >= 60:
//     grade = "D";
//     break;
//     default:
//     grade = "F";
//     }
//     callback(grade);
//    }
//    getGrade(85, gradeCheck);





// let promise = new Promise(function(resolve, reject){
// let x = 20;
// if(x>=20){
//     resolve
//     console.log("Success!");
// }
// else{
//     reject("Too Low");
// }
// });
// promise.then(
//     function(value){
//         console.log("Success: ", value);      
//     },
//     function(error){
//         console.log("Error: ", error);
//     }
// );


let promise = new Promise(function(resolve, reject){
    resolve("Success!");
})

promise.then( value => {
    console.log(value);
    return "We";
}).then(value =>{
    cnsole.log(value);
    return "can";
    
}).then(value =>{
    console.log(value);
    return "chain"
}).then( value => {
    console.log(value);
    return "promise"
}).then(value =>{
    console.log(value);
    
}).catch(value=> {
    console.log(value);
    
})