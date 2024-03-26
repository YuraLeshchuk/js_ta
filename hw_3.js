//task1

// const myArray = [2, 3, 4, 5];

// result1 = 1;
// for (let i = 0; myArray.length > i; i++){
//     result1 *= myArray[i]
// }

// let i = 0;
// result2 = 1;
// while(i < myArray.length){
//     result2 *= myArray[i];
//     i++;
// }

// console.log(result1)
// console.log(result2)


//task2

// for (let i = 0; i <= 15; i++){
//     result = i%2;
//     switch(result === 0){
//         case true: 
//             console.log(`${i} is even`);
//             break;
//         default:
//             console.log(`${i} is odd`);
//             break; 

//     }
// }


//task3

// function randArray(n){
//     myArray = [];
//     for (let i = 0; i < n; i++){
//         myArray.push(Math.floor(Math.random() * 501) + 1);
//     }

//     return myArray

// }

// console.log(randArray(5))


//task4

// let a = prompt("Enter number", 3);
// let b = prompt("Enter degree", 4);

// function raiseToDegree(a, b){
//     return Math.pow(parseInt(a), parseInt(b));
// }

// console.log(raiseToDegree(a, b))


//task5

// function findMin(){
//     let myArr = [];
//     for (let elements of arguments){
//         myArr.push(elements);
//     }
//     let min = Math.min(...myArr);
//     return min;
// }

// console.log(findMin(-1, 8, 0, -2.6))


//task6

// function findUnique(arr){
//     let i = 0
//     arr.forEach((element, index) => {
//         if (element === arr[index+1]){
//             i++      
//         }
//     });
//     if (i === 1){
//         return false;
//     } else {
//         return true
//     }
// }

// console.log(findUnique([1, 2, 3, 5, 50]));


//task7

// function lastElem(arr, x) {
//     let newArr = []
//     let counter = arr.length;
//     for (x; x > 0; x--) {
//         if (counter <= 0) {
//             break;
//         };
//         newArr.push(arr[counter-1])
//         counter--;
//     }
//     return newArr
// }

// console.log(lastElem([3, 4, 10, -5], 5))


//task8

// function convert(myStr){
//     let newArr = []
//     for (let element of myStr.split(" ")){
//         let upperElement = element.replace(element[0], element[0].toUpperCase())
//         newArr.push(upperElement)
//     }
//     return newArr.join(" ")
// }

// console.log(convert('i love java script'))