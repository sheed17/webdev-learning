const player = [{name: "Rasheed", team: "Real Madrid", goals: "100"},
                {name: "Steve", team: "Barcelona", goals: 2}
];

const updatedPlayer = {...player[0], assists: 5};

console.log(updatedPlayer);

const stats = [{shots: 50, passes: 100},
                {shots: 49, passes: 200}
];

const combinedObjects = player.map((p, index) => {
    return {...p, ...stats[index]};
})

console.log(combinedObjects);

const combiningIntoOne = [...player, ...stats];
console.log(combiningIntoOne);

const scores = [1,2,3];
//scores.push(4); changing adding to the original array

const newScores = [...scores, 4]; //creating a new array with the same values and adding one
console.log(newScores);
