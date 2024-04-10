//task1

// let myElem = document.getElementById("test")
// let myElem = document.querySelector("div#test")
// myElem.innerHTML = "Last"
// console.log(myElem)


//task2

// let image = document.querySelector(".image")
// image.src = "cat.jpg"
// alert(image.outerHTML)


//task3

// let myElements = document.querySelectorAll('div > p');
// let i = 0;
// myElements.forEach(element => {
//     console.log(`${"Selector text " + i++}: ${element.innerHTML}`);
// });

//task4

// let myList = document.querySelector("#list");
// console.log(myList.firstElementChild.textContent, 
//     myList.lastElementChild.textContent, 
//     myList.firstElementChild.nextElementSibling.textContent, 
//     myList.lastElementChild.previousElementSibling.textContent, 
//     myList.firstElementChild.nextElementSibling.nextElementSibling.textContent);

// console.log(myList.children[0].textContent, 
//     myList.children[4].textContent, 
//     myList.children[1].textContent, 
//     myList.children[3].textContent, 
//     myList.children[2].textContent);

//task5

// let header = document.querySelector("h1");
// let myDiv = document.querySelector("#myDiv");
// let myList = document.getElementsByTagName("li");
// let span = document.querySelector("span");

// header.style.backgroundColor = 'lightgreen';

// myDiv.children[0].style.fontWeight = "900";
// myDiv.children[1].style.color = "red";
// myDiv.children[2].style.textDecoration = "underline";
// myDiv.children[3].style.fontStyle = "italic";

// for (element of myList){
//     element.style.display = "inline";
//     element.style.marginRight = "-4px";
// }

// span.style.visibility='hidden';


//task6

// let input1 = document.getElementById("input1").value;
// let input2 = document.getElementById("input2").value;

// input1 = prompt("Enter value", "My value 1");
// input2 = prompt("Enter value", "My value 2");

// document.getElementById("input1").value = input2;
// document.getElementById("input2").value = input1;


//task7

// let body = document.createElement("body");
// let main = document.createElement("main");
// let div = document.createElement("div");
// let p = document.createElement("p");

// main.className = "mainClass check item";
// div.id = "myDiv";

// p.textContent = "First paragraph";

// document.body.appendChild(body);
// body.appendChild(main);
// main.appendChild(div);
// div.appendChild(p);

// console.log(document.querySelector("main"))
