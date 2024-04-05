//task1

// let mentor = {
//     course: "JS fundamental",
//     duration: 3,
//     direction: "web-development"
// };

// function propsCount(currentObject){
//     let objKeys = Object.keys(currentObject);
//     console.log(objKeys.length);
// }

// propsCount(mentor);


// task2

// let city = {
//     name: "Lviv",
//     code: 79000,
//     id: "LV",
//     carNumb: "BC",
//     population: "700k"
// };

// function showProps(obj){
//     console.log(Object.keys(obj));
//     console.log(Object.values(obj));
// };

// showProps(city);


// task3

// class Person{
//     constructor(name, surname){
//         this.name = name;
//         this.surname = surname;
//     }
//     showFullName(){
//         return `${this.surname} ${this.name}`;
//     }
// };

// class Student extends Person{
//     constructor(name, surname, year){
//         super(name, surname);
//         this.year = year;
//     }
//     showFullName(midleName){
//         return (super.showFullName() + ` ${midleName}`);
//     }
//     showCourse(){
//         let result = 2024 - this.year;
//         if(result > 6){
//             return "Incorrect year";
//         } else{
//             return result;
//         }
//     }
// };

// const stud1 = new Student("Petro", "Petrenko", 2021);

// console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
// console.log("Current course: " + stud1.showCourse()); //Current course: 3


// task4

// class Worker{
//     #experience = 1.2;
//     constructor(fullName, dayRate, workingDays){
//         this.fullName = fullName;
//         this.dayRate = dayRate;
//         this.workingDays = workingDays;
//         this.addWorkerToList();
//     }
//     static workersList = [];
//     addWorkerToList(){
//         Worker.workersList.push(this);
//     }
//     showSalary(){
//         console.log(`${this.fullName}: ${(this.dayRate * this.workingDays)}`);
//     }
//     showSalaryWithExperience(){
//         console.log(`${this.fullName}: ${(this.dayRate * this.workingDays * this.#experience)}`);
//     }
//     get showExp(){
//         return this.#experience;
//     }
//     set setExp(value){
//         this.#experience = value;
//     }
// }


// Example usage:

// let worker1 = new Worker("John Johnson", 20, 23);

// console.log(worker1.fullName);

// worker1.showSalary();

// console.log("New experience: " + worker1.showExp);

// worker1.showSalaryWithExperience();

// worker1.setExp = 1.5;

// console.log("New experience: " + worker1.showExp);

// worker1.showSalaryWithExperience();

// let worker2 = new Worker("Tom Tomson", 48, 22);

// let worker3 = new Worker("Andy Ander", 29, 23);

// console.log(Worker.workersList);

// function sorting(listof){
//     console.log("Sorted salary:")
//     listof.sort(function(a,b){
//         return a.showSalaryWithExperience() - b.showSalaryWithExperience();
//     })
    
// }
// sorting(Worker.workersList);

// Sorted salary:
// hw_5.js:119 Tom Tomson: 1267.2  ---- не можу прибрати кол, щоб не виводило двічі
// hw_5.js:119 John Johnson: 690
// hw_5.js:119 Andy Ander: 800.4
// hw_5.js:119 Tom Tomson: 1267.2 -------


// task5

// class GeometricFigure {
//     getArea() {
//         return 0;
//     }
//     toString() {
//         return Object.getPrototypeOf(this).constructor.name;
//     }

// }

// class Triangle extends GeometricFigure{
//     constructor(a, b){
//         super();
//         this.a = a;
//         this.b = b;
//     }
//     getArea(){
//         return 0.5 * this.a * this.b;
//     }
// }

// class Square extends GeometricFigure{
//     constructor(side){
//         super();
//         this.side = side;
//     }
//     getArea() {
//         return Math.pow(this.side, 2);
//     }
// }

// class Circle extends GeometricFigure {
//     constructor(radius) {
//         super();
//         this.radius = radius;
//     }
//     getArea() {
//         return Math.PI * Math.pow(this.radius, 2);
//     }
// }

// function handleFigures(figures){
//     let totalArea = figures.reduce((accumulator, figure) => {
//         if(figure instanceof GeometricFigure){
//             console.log(`Geometric figure: ${figure.toString()} - area: ${figure.getArea()}`);
//             return accumulator + figure.getArea();
//         } else{
//             console.log("Invalid figure object.");
//             return accumulator;
//         }
//     }, 0);
//     return totalArea;
// }


// const figures = [new Triangle(4, 5), new Square(7), new Circle(5)]; console.log(handleFigures(figures));

// Приклад результату:

// Geometric figure: Triangle - area: 10

// Geometric figure: Square - area: 49

// Geometric figure: Circle - area: 78.53981633974483

// 137.53981633974485 // total area