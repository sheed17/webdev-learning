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

console.log("Hello");

