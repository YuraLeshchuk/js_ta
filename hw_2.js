//task1

// let x = 1;

// let y = 2;

// let res1 = String(x) + y;

// console.log(res1); // "12"

// console.log(typeof res1); // "string"

// let res2 = Boolean(x) + String(y);

// console.log(res2); // "true2"

// console.log(typeof res2); // "string"

// let res3 = Boolean(x + y);

// console.log(res3); // true

// console.log(typeof res3); // "boolean"

// let res4 = parseFloat(Boolean(x) + String(y));

// console.log(res4); // NaN

// console.log(typeof res4); // "number"


//task2

// let number = prompt("Enter your number");
// result1 = (number%2===0 && number>0) ? true: false;
// result2 = (number%7===0) ? true: false;
// console.log(result1);
// console.log(result2);


//task3

// const myArray = [];
// myArray[0] = 1;
// myArray[1] = "new element";
// myArray[2] = true;
// let x = null;
// myArray[3] = x;

// console.log(myArray)
// console.log(myArray.length)

// let userInput = prompt("Enter any value", "test")
// myArray[4] = userInput;
// console.log(myArray[4])

// myArray.shift()
// console.log(myArray)


//task4

// let cities = ["Rome", "Lviv", "Warsaw"];
// result = cities.join("*")
// console.log(result)


//task5

// let isAdult = +prompt("How old are you?")
// if(isAdult >= 18){
//     console.log("You are adult")
// } else {console.log("Lucky you are, you are not adult")}


//task6

// let lenght1 = prompt("Put lenght 'A'", 1);
// if(isNaN(parseInt(lenght1))){
//     console.log("Incorrect data");
// }

// let lenght2 = prompt("Put lenght 'B'", 1);
// if(isNaN(parseInt(lenght2))){
//     console.log("Incorrect data");
// }

// let lenght3 = prompt("Put lenght 'A'", 1);
// if(isNaN(parseInt(lenght3))){
//     console.log("Incorrect data");
// }

// if (lenght1 === lenght2 && lenght1 === lenght3){
//     console.log("Sides are equal");
// } else {"Sides are not equal"}

// let halfP = (lenght1 + lenght2 + lenght3)/2;
// let square = Math.sqrt(halfP*(halfP-lenght1)*(halfP-lenght2)*(halfP-lenght3));
// console.log(square.toFixed(3));

//task7

// const time = new Date()
// currentTime = time.getHours()

// if(currentTime <= 5){
//     console.log("Доброї ночі");
// } else if (currentTime > 5 && currentTime <= 11){
//     console.log("Доброго ранку")
// } else if (currentTime > 11 && currentTime <= 17){
//     console.log("Доброго дня")
// } else {
//     console.log("Доброго вечора")
// }


// switch(true){
//     case currentTime <= 5:
//         console.log("Доброї ночі");
//         break;
//     case currentTime > 5 && currentTime <= 11:
//         console.log("Доброго ранку");
//         break;
//     case currentTime > 11 && currentTime <= 17:
//         console.log("Доброго дня");
//         break;
//     default:
//         console.log("Доброго вечора")
// }
