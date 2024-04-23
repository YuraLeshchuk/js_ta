//task1

// let myWindow= window.open("", "", "width=300, height=300");

// setTimeout(function(){
//     myWindow.resizeTo(500, 500);
//     setTimeout(function(){
//         myWindow.moveTo(200, 200);
//         setTimeout(function(){
//             myWindow.close();
//         }, 2000);
//     }, 2000);
// }, 2000); 


//task2

// let textElem = document.getElementById("text");
// let button = document.querySelector("div > button");

// button.addEventListener("click", function(){
//     textElem.style.color = "orange";
//     textElem.style.fontSize = "20px";
//     textElem.style.fontFamily = "Comic Sans MS";

// })

//task3

// let button1 = document.getElementById("button1");
// let button2 = document.getElementById("button2");
// let button3 = document.getElementById("button3");
// let link = document.getElementById("link");

// function eventHandler(event){
//     if(event.type === "click"){
//         document.body.style.backgroundColor = "blue";
//     }
//     if(event.type === "dblclick"){
//         document.body.style.backgroundColor = "pink";
//     }
//     if(event.type === "mousedown"){
//         document.body.style.backgroundColor = "brown";
//     }
//     if(event.type === "mouseup"){
//         document.body.style.backgroundColor = "white";
//     }
//     if(event.type === "mouseenter"){
//         document.body.style.backgroundColor = "yellow";
//     }
//     if(event.type === "mouseleave"){
//         document.body.style.backgroundColor = "white";
//     }
// }

// button1.addEventListener("click", eventHandler);
// button2.addEventListener("dblclick", eventHandler);
// button3.addEventListener("mousedown", eventHandler);
// button3.addEventListener("mouseup", eventHandler);
// link.addEventListener("mouseenter", eventHandler);
// link.addEventListener("mouseleave", eventHandler);


//task4

// let deleteBtn = document.getElementById("delBtn");
// let dropdown = document.getElementById("dropdown");

// deleteBtn.addEventListener("click", function() {
//     let option = dropdown.options[dropdown.selectedIndex];
//     dropdown.removeChild(option);
// })


//task5

// let button = document.getElementById("button");
// let message = document.getElementById("message");

// button.addEventListener("click", function() {
//         message.innerText = "I was pressed!";
//     })

// button.addEventListener("mouseover", function() {
//         message.innerText = "Mouse on me!";
//     })

// button.addEventListener("mouseout", function() {
//          message.innerText = "Mouse is not on me!";
//     })

//task6

// let p = document.createElement("p");
// document.body.appendChild(p);
// let w = window.innerWidth;
// let h = window.innerHeight;
// window.addEventListener("resize", function(){
//     document.querySelector("p").innerHTML = `Width: ${w}, Height: ${h}`;
//   });