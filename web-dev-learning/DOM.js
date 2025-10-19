//1. 
Task:
Dynamically create a <ul> list.
Append each name as an <li> to the DOM.


const names = ["rasheed", "bob", "john"];

const ul = document.createElement("ul");

const showNames = names.forEach((name, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1} ${name}`;
    ul.appendChild(li);
})

const container = document.getElementById("namesContainer");
container.appendChild(ul);

//2.
Tasks:
Render each player with their name and goals.


Style players with goals ≥ 20 in green.


Display total goals at the bottom.
*/

const players = [
  { name: "Rasheed", goals: 10 },
  { name: "Mbappe", goals: 20 },
  { name: "Haaland", goals: 25 }
];
const displayPlayers = document.getElementById("displayPlayers");
const displayInfo = players.forEach((player) => {
    const p1 = document.createElement("p");
    const playerData = `${player.name}: Goals: ${player.goals}`;
    p1.textContent = playerData;
    displayPlayers.appendChild(p1);
})

const topScorers = players.filter((player) => {
    const scorers = player.goals >= 20;
    return scorers;
})

const h2 = document.createElement("h2");
h2.textContent = "Players who have scored 20 or more goals!";
displayPlayers.appendChild(h2);

topScorers.forEach((player) => {
    const p1 = document.createElement("p");
    p1.textContent = `${player.name}: ${player.goals}`;
    displayPlayers.appendChild(p1);
})

const h3 = document.createElement("h3");
h3.textContent = "totals goals this season!";
displayPlayers.appendChild(h3);

const totalGoals = players.reduce((sum, player) => {
    const totalGoals = sum += player.goals;
    return totalGoals;
}, 0)

const p2 = document.createElement("p");
p2.textContent = `Total goals: ${totalGoals}`;
displayPlayers.appendChild(p2);



//3.
Problem 3 — Cards Layout
Given:
const products = [
  { name: "Headphones", price: 49.99 },
  { name: "Keyboard", price: 89.99 },
  { name: "Monitor", price: 199.99 }
];

Tasks:
Loop through and display each product in a “card” (div with border + padding).


Inside each card, show product name and price.


Create the cards dynamically — no hardcoded HTML.

const card = document.getElementById("card");
const likeButton = document.getElementById("likeButton");
let count = 0;

const likingAction = likeButton.addEventListener("click", () => {
  count++;
  likeButton.textContent = `like Counter: ${count}`;
  if(count < 0){
    likeButton.textContent = "Like button not available";
  }
})

card.appendChild(likeButton);






