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
   


let num = [1,3,5,7];
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


let arr2 =num.sort(function(a, b){return b -a});
console.log(arr2);







