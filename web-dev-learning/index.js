/*console.log("Hello");
console.log("I like pizza");*/

//document.getElementById("header").textContent = "Sandwiches";

// Variables

/*let x = 21;
let firstName = "Rasheed";
let favoriteNumber = 7;
let isStudent= true;
let y = 21.2;

console.log(typeof y);
console.log(`Your name is ${firstName}`);
console.log(`Favorite number: ${favoriteNumber}`);
console.log(isStudent);

document.getElementById("p1").textContent = `Your name is ${firstName}`;*/

// Variables


// Arithmetic Operators
/*
let students = 31;
students += 1;
students -=1;
students *= 2;
students /= 3;
students %= 3;
students **=2;

students++;
students--;

console.log(students);*/

// Arithmetic Operators


//Accepting User Input
/*
let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
}
*/
//Accepting User Input


// Const Values
/*
const PI = 3.14;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius)
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference;

}
    */

// Const Values


// Math

/*let x = 3;
let y = 2;
let z = 5;

//z = Math.round(x);
//z = Math.floor(x);
//z = Math.ceil(x);
//Math.trunc
//Math.pow
//sqrt
//log
//sin
//cos
//tan
//abs
//console.log(Math.sign(x));
let max = Math.max(x,z,y);
console.log(max);
let min = Math.min(x,y,z);
console.log(min);*/


// Math


// Random Number generator using floor to round down and get the whole integer
/*
let randomNum = Math.floor(Math.random() * 6);
console.log(randomNum);
*/
// Random Number Generator


//if statements
/*
let studentsAge = 12;

if(studentsAge > 10){
    console.log("You are allowed to get on the ride");
}
else{
    console.log("You are not allowed to hop on the ride");
}
*/


//Basic user input//
/*let student;
student = prompt("Input name: ");
console.log("Student name is:",student);*/



/*

// Simple to accept name value and then display it
let studentName;
document.getElementById("mySubmit").onclick = function(){
    studentName = document.getElementById("myText").value;

    if(studentName === "Rasheed" || studentName === "rasheed"){
        document.getElementById("myH3").textContent = `Hello ${studentName}`;
    }
    else{
        document.getElementById("myH3").textContent = "You lame bruh";
    }
}
    */


/*   ////Switch statements
let studentName;
document.getElementById("mySubmit").onclick = function(){
    studentName = document.getElementById("myText").value;
    switch(studentName){
        case "Rasheed":
            document.getElementById("myH3").textContent = `${studentName} is Cool`;
            break;
        case "Bob":
            document.getElementById("myH3").textContent = `${studentName} is stupid`;
            break;
        case "Steve":
            document.getElementById("myH3").textContent = `${studentName} is okay`;
            break;
        case "Johnny":
            document.getElementById("myH3").textContent = `${studentName} is funny`;
            break;
        default:
            document.getElementById("myH3").textContent = "Input the cool name bruh!";
            break;
    }
}
    */


// while, for-while, do-while loops
/*
let studentName;
document.getElementById("mySubmit").onclick = function(){
    studentName = document.getElementById("myText").value;
    let output = "";
    for(let i = 0; i < 3; i++){
        output += studentName + "<br>";
    }
    document.getElementById("myH3").innerHTML = output; //innerHTML basically renders it as html so make line breaks


}*/

/*

let i = 0;
let studentName;
document.getElementById("mySubmit").onclick = function(){
    studentName = document.getElementById("myText").value;
    output = "";
    while(i < 3){
        output += studentName + "<br>";
        i++;
        
    }
    document.getElementById("myH3").innerHTML = output;
}
*/



//Checkboxes
/*
 const myCheckbox = document.getElementById("myCheckbox");
 const myPayPal = document.getElementById("myPayPal");
 const myVisa = document.getElementById("myVisa");
 const myMasterCard = document.getElementById("myMasterCard");
 const mySubmit = document.getElementById("mySubmit");
 const subResult = document.getElementById("subResult")
 const paymentResult = document.getElementById("paymentResult");


mySubmit.onclick = function(){
    if(myCheckbox.checked){
        subResult.textContent = "You are subscribed";
    }
    else{
        subResult.textContent = "You are not subscribed";   
    }


    if(myVisa.checked){
        paymentResult.textContent = "You are paying with visa";
    }
    else if(myPayPal.checked){
        paymentResult.textContent = "You are paying with paypal";
    }
    else if(myMasterCard.checked){
        paymentResult.textContent = "You are paying with mastercard";
    }
    else{
        paymentResult.textContent = "You didn't select a payment"
    }
}
    */


//String methods
/*
let username = "     Rasheed";
console.log(username.indexOf("e"));
console.log(username.lastIndexOf("e"));
console.log(username.length);
console.log(username.trim());
console.log(username.repeat(3));

*/
/// Method chaining
/*
username = window.prompt("Enter your username: ");
username = username.trim().split(" ").join("");
console.log(username);
*/


// functions
/*
function happyBirthday(username, age){
    console.log("Happy Birthday to You!\n");
    console.log("Happy Birthday to You!\n");
    console.log("Happy Birthday to You!\n");
    console.log(`Happy Birthday dear ${username} you are ${age}`);
}

happyBirthday("Rasheed", 22);
happyBirthday("Sam", 52);


function addValues(x, y){
    let z = x + y;
    return z;
}

console.log(addValues(4,2));
*/

//arrays
/*
let fruits = ["Apples", "Oranges", "Bananas"];

fruits.unshift("Mangos");
fruits.shift();
fruits.push("Coconuts");
fruits.pop();

fruits.sort();
//reverse

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
    */



/*
 //Spread:
 // allows iterable elements to be seperated into elements

//let numbers = [1,2,3,4,5];
// console.log(Math.max(numbers)); //nan

//console.log(Math.max(...numbers)); //seperates and can be evaluated

let username = "Rasheed"
let letters = [...username].join(" ");

console.log(letters);

let fruits = ["Apples", "Oranges", "Bananas"];
console.log(...fruits);
let veggies = ["brocolli", "mushroom"];
console.log(...veggies);

combined = [...fruits, ...veggies, "salad", "idktbh"];
console.log(combined);
*/



//Rest
//allows a function to work x amount of arguments by bundling them into an array

/*
function openFridge(...foods){
    console.log(...foods);
}
function getFood(...foods){
    return foods;
}

const food1 = "Pizza";
const food2 = "Ice Cream";
const food3 = "Hotdogs";
const food4 = "Burritos";

const foods = getFood(food1, food2, food3, food4);
console.log(foods);
*/




//callbacks - function that is passed as an argument to another function, say hello first then after that say goodbye
// 1. Hello
// 2. Goodbye in that order
/*
function hello(callback){
    console.log("Hello");
    callback();
}

function goodbye(){
    console.log("goodbye");
}

hello(goodbye);

*/


//for each, made easier in js rather than names : name
/*
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(display);


function display(element){
    console.log(element);
}
    */


//maps same as for each returns a new array when it is finished
/*
const dates = ["2025-10-01", "2025-09-02", "2025-07-03"];

function formatDates(element){
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

const formattedDates = dates.map(formatDates);
console.log(formattedDates);
*/




// filter elements if it does not return true then it will be filtered out
//filtered is then made into a new array of elements

/*
let numbers = [1,2,3,4,5,6,7,8,9];

function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 3 === 0;
}

let evenNums = numbers.filter(isEven);
console.log(evenNums);

let oddNums = numbers.filter(isOdd);
console.log(oddNums);

*/


//reduce
// reduce the elements of an array to a single value
//basically starts at the first element then iterates through so its a lot easier to add elements together etc then building a sum function on your own

/*
const grades = [55, 31, 78, 99, 84];

function maxGrade(accumulator, element){
    return Math.max(accumulator, element);
}

showGrade = grades.reduce(maxGrade);
console.log(showGrade);
*/

/*
const num = [10, 20, 30];

function sum(acc, element){
    return acc + element;
}

showNum = num.reduce(sum);
console.log(showNum);
*/



/*
const numbers = [1,2,3,4,5,6];
const squares = numbers.map(function(element){
    return Math.pow(element, 2);
});

console.log(squares);


*/



//Arrow Functions
/*
//const hello = () => {console.log("Hello")};
const hello = (name, age) => {console.log(`Hello ${name}`)
                                console.log(`You are ${age} years old`)};


hello("Rasheed", 22);

const numbers = [1,2,3,4,5];
const squares = numbers.map((element) => Math.pow(element, 2));

console.log(squares);

*/


//Objects in js 
// //this is for objects when saying person1.firstNamename its the same as this.firstName referring to the object
/*
const person1 = {
    firstName: "Rasheed",
    lastName: "Samady",
    age: 21,
    isEmployed: true,
    sayHello: function(){
        console.log(`Hello ${this.firstName} ${this.lastName}, you are ${this.age}`);
    }

}

console.log(person1.firstName);
person1.sayHello();


*/ 




//Constructors

/*
function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}


const car1 = new Car("Toyota", "Prius", 2013);
const car2 = new Car("Honda", "Accord", 2019);

console.log(car1.make);
console.log(car1.model);

*/


/*
class User{
    static userCount = 0;
    
    constructor(username){
        this.username = username;
        User.userCount++;
    }

    displayUser(){
        console.log(`Username: ${this.username}`);
        console.log(`Current users on the app: ${User.userCount}`);
    }
}

const user1 = new User("Yo");
const user2 = new User("Bro")
const user3 = new User("Wasup");

user1.displayUser();
*/




/*
/// Inheritance

class Animal{
    alive = true;

    eat(){
        console.log(`${this.name} is eating`);
    }
    sleep(){
        console.log(`${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    name = "Rabbit";

    jumping(){
        console.log(`${this.name} is jumping`);
    }
}


const rabbit = new Rabbit();
rabbit.eat();
rabbit.sleep();
rabbit.jumping();

*/




//Super keyword
/*
class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age
    }

    displayNameAndSpecies(){
        console.log(`Name: ${this.name}, Species: ${this.species}`);
    }
}

class Lion extends Animal{
    species = "Lion";

    constructor(name, age, isFast){
        super(name, age);
        this.isFast = isFast;
    }
}



lion = new Lion("Bobby", 21, true);
console.log(lion.name);
console.log(lion.age);
console.log(lion.isFast);
lion.displayNameAndSpecies();
*/


/*
// Getters and Setters
class Animal{
    constructor(name, species){
        this.name = name;
        this.species = species;
    }

    set name(newName){
        this._name = newName;
    }

    set species(newSpecies){
        this._species = newSpecies;
    }

    get name(){
        return this._name;
    }

    get species(){
        return this._species;
    }

}

const animal = new Animal("None", "None");
animal.name = "Johnny";
animal.species = "Snake";

console.log(animal.name);
console.log(animal.species);

//

*/


//Destructuring
/*
const person1 = {
    firstName: "Bobby",
    lastName: "Johnny",
    age: 21,
    job: "RN",
}

const person2 = {
    firstName: "Smith",
    lastName: "John",
    age: 32,
}

const {firstName, lastName, age, job="Bot"} = person2;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);
*/



/*


//Nested Objects
const person1 = {
    firstName: "Bob",
    lastName: "John",
    address: {
        street: "Johnny way",
        city: "Johnny city",
        country: "Yukatan",
    }
}

console.log(person1.address.street);
*/
//Nested Objects
/*
class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address)
    }
}

class Address{
    constructor(city, street, zip){
        this.city = city;
        this.street = street;
        this.zip = zip;
    }
}

const person1 = new Person("John", 21, "Frecy", "Bob Way", 21311);
console.log(person1.name);
console.log(person1.address.city);
*/

//Closures
//function defined in another function inner function has access to outer function
//for increment we return the object because the object created for the function needs a shared variable if we do increment() the number resets and doesnt share which is why we return {increment}, similar to static
/*
function outer(){
    
    let message = "Hello";

    function inner(){
        console.log(message);
    }
    inner();
}
outer();
*/
/*
function createCounter(){
    let count = 0;

    function increment(){
        count++;
        console.log(`Count increased to ${count}`);
    }

    return {increment:increment};
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
*/


//ES6 modules exporting and using that in other js file
/*
import {PI, getArea} from './mathUtil.js';

console.log(PI)

const circumArea = getArea(3);
console.log(circumArea);
*/


//asynchronous tasks that work concurrently, JS is a single thread and this allows them to work side by side together and not wait for one to occur then the other to begin
// with callback the function called within the function is executed after the outer function

/*

function func1(callback){
    setTimeout(() => {
        console.log("Task1");
        callback();
    }, 3000)
}

function func2(){
    console.log("Task2");
    console.log("Task3");
    console.log("Task4");
}

func1(func2)
*/




//Error handling
////try, catch, 
/*
try{
    const dividend = window.prompt("Enter dividend");
    const divisor = window.prompt("Enter divisor");

    const result = dividend / divisor;

    if (divisor == 0){
        throw new Error("You can't divide by zero");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Type in Numbers");
    }
    console.log(result);   
}
catch(error){
    console.error(error);
}
finally{
    console.log("You have reached the end");
}

*/




/* Selectors */

// document.getElementById)()
// document.getElementsClassName()
// document.getElementsByTagName()
// document.querySelector()
// document.querySelectorAll()

/*
const myWelcome = document.getElementById("myWelcome");
myWelcome.style.backgroundColor = 'red';
myWelcome.style.textAlign = 'center';

const fruits = document.getElementsByClassName("fruits");
console.log(fruits);

for(let fruit of fruits){
    fruit.style.backgroundColor = 'yellow';
}
fruits[0].style.backgroundColor = 'purple';


const h4Elements = document.getElementsByTagName("h4");
for(let h4elements of h4Elements){
    h4elements.style.color = 'blue';
}


h4Elements[0].style.color = 'orange';

const queryList = document.querySelector(".fruits");
queryList.style.backgroundColor = 'blue';

const element = document.querySelector("li");
element.style.backgroundColor = 'yellow';


const allElements = document.querySelectorAll("li");


for(let elements of allElements){
    elements.style.backgroundColor = 'red';
}

allElements[0].style.backgroundColor = 'purple';

*/ 

// DOM navigation
// firstElementChild
// lastElementChild
// nextElementSibling
// previousElementSibling
// parentElememt
// children

/*const element = document.getElementById("desserts");
const lastElementChild = element.lastElementChild;
lastElementChild.style.backgroundColor = 'red'*/

/*const element = document.getElementById("desserts");
const firstElement = element.firstElementChild;
firstElement.style.backgroundColor = 'yellow';*/


/*const element = document.getElementById('desserts');
const nextElementSibling = element.nextElementSibling;
nextElementSibling.style.backgroundColor = 'green';*/

/*const element = document.getElementById('fruits');
const previousElementSibling = element.previousElementSibling;
previousElementSibling.style.backgroundColor = 'blue';*/

/*const element = document.getElementById("desserts");
const child = element.children;
console.log(child);

for(children of child){
    children.style.backgroundColor = "red";
}*/

/// Appending, prepending, and inserting before
/*
const newH1 = document.createElement("h1");
const newH2 = document.createElement("h1");
const newH3 = document.createElement("h3");


newH1.textContent = 'i like pizza';
newH2.textContent = 'i like hotdogs';
newH3.textContent = 'i like burgers';

document.getElementById("box1").append(newH2);

document.getElementById("box4").prepend(newH3);

const box2 = document.getElementById("box2");
document.body.insertBefore(newH1, box2);
*/


//addEventListener
/*
const myBox = document.getElementById("myBox");

myBox.addEventListener("click", change =>
{
    change.target.style.backgroundColor = "blue";
    change.target.textContent = 'bruh';
}


*/

//Key events
/*

const myBox = document.getElementById("myBox");
myBox.addEventListener("keydown", event =>
{  
    myBox.style.backgroundColor = 'yellow';
    myBox.textContent = 'bruh';
    console.log(`down ${event.key}`);
}
);

myBox.addEventListener("keyup", event =>
{  
    myBox.style.backgroundColor = 'lightblue';
    myBox.textContent = 'bro';
    console.log(`up ${event.key}`);
}
);
*/


/*
Hide and show 
const myButton = document.getElementById("myButton");
const myBox = document.getElementById("myBox");
myButton.addEventListener("click", event =>{
        myBox.style.display = 'none';
        myButton.textContent = 'show';});
*/



/*
//classLists

let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button => {
    button.classList.add('enabled');
} )

buttons.forEach(button =>{
    button.addEventListener("mouseover", event =>{
        event.target.classList.toggle("hover");
    })
})

buttons.forEach(button =>{
    button.addEventListener("mouseout", event =>{
        event.target.classList.toggle("hover");
    })
}
)

buttons.forEach(button =>{
    button.addEventListener("click", event => {
        event.target.classList.replace('enabled', 'disabled');
    }
    )
})

buttons.forEach(button =>{
    console.log(button);
})
*/

// too many callbacks
/*

function task1(callback){
    setTimeout(() => {
        console.log("Task1 complete");
        callback();
    }, 2000)
}

function task2(callback){
    setTimeout(() => {
        console.log("Task2 complete");
        callback();
    }, 3000)
}

function task3(callback){
    setTimeout(() => {
        console.log("Task3 complete");
        callback();
    }, 1500)
}

function task4(callback){
    setTimeout(() => {
        console.log("Task4 complete");
        callback();
    }, 1000)
}


task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                
            })
        })
    })
})
*/


//promises - an object that manages asynchronous operations so you are not in callback hell

// in the order as to which it called

/*

function walkDog(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const walkDog = true;

            if(walkDog){
                resolve("You walked the dog");
            }
            else{
                reject("You didn't walk the dog");
            }

        }, 3000)
    }
    
    
    )

}

function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const tookTrashOut = true;

            if(tookTrashOut){
                resolve("You took out the trash");
            }
            else{
                reject("You didnt take out the trash");
            }
        }, 2000)
    })
}

function foldedLaundry(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            laundryFolded = false;
            if(laundryFolded){
                resolve("You folded the laundry");
            }
            else{
                reject("You didnt fold the laundry");
            }
        }, 1000)
    })
}


walkDog().then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); return foldedLaundry()})
         .then(value => {console.log(value); return console.log("completed")})
         .catch(error => {console.error(error)});

*/

//async/wait
/*
function fetchUser(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Welcome user!");
        }, 3000);
        
    })
}

function fetchPost(){
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve("New Post!");
        }, 2000);
    })
}

function fetchLike(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("New Comment!");
        }, 1000);
    })
}

async function handleData(){
    try{
        const user = await fetchUser();
        const post = await fetchPost();
        const like = await fetchLike();

        console.log(user);
        console.log(post);
        console.log(like);
    }
    catch(error){
        console.error("Error: Gathering Data Issue!");
    }
}

handleData();
*/

/* JSON

//json JSON.stringify() converts a js object to a json string
//JSON.parse() = converts a json string to a js object

const person = {
    "name": "Bob",
    "age": 21,
    "married": false,
    "hobbies": ["swimming", "golfing", "climbing"]
};

const people = `[{
    "name": "Steve",
    "age" : 27,
    "isEmployed": true,
    "married": false
}, 
{
    "name": "Bob",
    "age" : 21,
    "isEmployed": true,
    "married": true


},
{
    "name": "John",
    "age" : 37,
    "isEmployed": true,
    "married": true
}]`;

const jsonString = JSON.stringify(person);  //converting object to a jsonString
console.log(jsonString);

const jsonStringToObject = JSON.parse(people); //converting json String to object
console.log(jsonStringToObject);
console.log(people);
*/




/*
fetching info from json


fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(`Name: ${value.name}, Employed: ${value.isEmployed}`)))
    .catch(error => console.error(error));


*/

//fetch data from API

async function fetchData(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    if(!response.ok){
        throw new Error("Error could not get URL!");
    }
    const data = await response.json();
    console.log(data);

    }
    catch(error){
        console.log(error);
    }
}
fetchData();