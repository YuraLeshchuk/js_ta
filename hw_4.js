//task1

// function calcRectangleArea() {
//     let width = +prompt("Enter width", 2);
//     let height = +prompt("Enter height", 2);
    
//     try{
//         if (isNaN(parseInt(width)) || isNaN(parseInt(height))) {
//             throw new Error("Input data should be numbers");
//         }
//        let result = width * height;
//        console.log(result);
        
//     } catch(error){
//         console.log(error.message);
//     }
// }

// calcRectangleArea();


//task2

// function checkAge(){
//     let age = prompt("Enter your age", 13);
//     try{
//         if (age === "") {
//             throw TypeError("The field is empty! Please enter your age");
//         }
//         if (isNaN(parseInt(age))){
//             throw TypeError("Input data should be numbers");
//         }
//         if (age < 14){
//             throw RangeError("Your age should be more 14yo.");
//         }
//         console.log("Access alloved");
//     } catch(error){
//         alert(`${error.name}: ${error.message}`);
//     }
    
// }

// checkAge();


//task3

// class MonthException{
//     constructor(message){
//         this.name = "MonthException";
//         this.message = message;
//     }

// }

// function showMonthName(month){
//     const mountsArr = ["January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"];
//     try{
//         if(month <= 0 || month > 12 || isNaN(parseInt(month)) || month === ""){
//             throw new MonthException("Incorrect month number")
//         } else {
//             return mountsArr[month-1]
//         }
//     } catch(error){
//         return `${error.name}: ${error.message}`
//     }
// }

// console.log(showMonthName(1))


//task4

// function showUser(id){
//     if(id < 0){
//         throw new Error('ID must not be negative: ' + id);
//     }
//     return {id};
// }

// function showUsers(ids){
//     const idArr = [];
//     for (let id of ids){
//         try{
//             idArr.push(showUser(id));
//         } catch(error){
//             console.log(error.message);
//         }
//     }
//     return idArr;
// }

// console.log(showUsers([7, -12, 44, 22]));
