// // basic function
// // 1.
// function sum1(num1, num2) {
//     console.log("sum1 -> num1 + num2: ", num1 + num2)
// }
// sum1(3, 5)
// // 2
// let sum2 = function (num1, num2) {
//     let sum = num1 + num2
//     console.log("sum2 -> num1 + num2: ", sum)
// }
// sum2(3, 5)

// // Arrow function
// // 3
// let sum3 = (num1, num2) => console.log("sum3 -> num1 + num2: ", num1 + num2)

// sum3(3, 5)



// ternary operator
// if (2 > 5) 
// console.log("5")
// else
// console.log("2")

// let ans = (2 > 5)? 5: (2 == 2)? 2 : 0
// console.log(ans)



// spread operator

// let smallArr = [10, 11, 12, 13]

// let arr = [1, 2, 4, 5, 19, 3, ...smallArr]


// console.log("arr : ", arr)
// console.log("spead operator ...arr : ", ...arr)


// let arr1 = [1, 3, 5, 7]
// let arr2 = [9, 11]



// console.log([...arr1, ...arr2])

// // [1, 3, 5, 7, 100, 200, 9, 11]

// console.log([...arr1, 100, 200, ...arr2])

// Rest Operator

// function sum(n1, n2, n3, n4, n5, ...nums) {
//     console.log(nums)

// }

// sum(1, 2, 3, 4, 5, 6, 6, 7, 8, 9)




// // 4. Function default parameters

// function sum(n1, n2 = 5, n3 = 6, n4 = 7) {
//     return n1 + n2 + n3 + n4
// }

// console.log(sum(3))

// 5. Destructuring (W.R.T Arrays & Objects)


// let numbers = [2, 5, 6, 3, 4, 33, 6, 8]

// const [num1, num2, , num, , ...nums] = numbers

// console.log(num1, num2, num)


// let person = {
//     name: "Ali",
//     age: "22",
//     height: "5.9 f",
//     qualification: "BSCS"
// }


// let {name: firstName, qualification: qual, ...restProps} = person


// console.log(firstName, qual, restProps)

// // 8. Template literals

// let nam = "Ali"

// console.log("Hello Everyone, " + nam + " is a good person.") // Hello Everyone, Ali is a good person.
// console.log(`Hello Everyone, ${nam} is a good person.`)

// 7. Block Scoping (var vs let vs const)

// var - global scope
// let - block - {}
// const - constant


// var x = 7;

// function func(){
//     var x = 5
//     console.log(x)  // 5
// }
// func()
// console.log(x) // 

// let x = 5;
// x = 10


function saySomething(x) {
    return new Promise(resolve => {
    setTimeout(() => {
    resolve("something" + x);
    }, 2000);
    });
   }
   async function talk(x) {
    const words = await saySomething(x);
    console.log(words);
   }
   talk(2);
   talk(4);
   talk(8);
   