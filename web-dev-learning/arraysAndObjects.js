const players = [
  { name: "Haaland", goals: 36 },
  { name: "Mbappe", goals: 30 },
  { name: "Saka", goals: 15 },
];

const playerNames = players.map((player) => {
    return player.name;
})

const addNumbers = (a,b) => {
    return a + b;
}

const topGoalScorer = players.filter(player => {
    return player.goals > 20;
})

console.log(topGoalScorer);

const totalGoals = players.reduce((sum, player) => {
    return sum + player.goals;
}, 0)


const newPlayer = {name: "Rasheed", goals: 101};

const updatedList = [...players, newPlayer];
console.log(updatedList);

function concatNames(){
    let combined = "";
    for(const player of players){
        combined += player.name;
    }
    return combined;
}

console.log(concatNames());

const sortedGoalScorers = [...players].sort((a,b) => {
    return b.goals - a.goals;
})

console.log(sortedGoalScorers);
