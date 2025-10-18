/*function walkDog(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Walking Dog");
        }, 3000);
    })
}


async function waiting(){
    try{
        const walkingDog = await walkDog();
        console.log(walkingDog);
    }
    catch(error){
        console.error("Could not grab the leash and walk that");
    }
}

waiting();*/

/*
function running(){
    return new Promise((resolve, reject) => {
        const running = true;
        if(running){
            setTimeout(() => {
            resolve("Going for a run");
        }, 3000);
    }
    else{
        reject("You can't run today");
    }
}
    )
}

async function waiting(){
    const run = await running();
    console.log(run);
}

waiting();
*/
async function concatUsers(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    if(!res.ok){
        throw new Error("error");
    }
    const placeholder = " ";
    const concating = () => {
        for(const d of data){
            placeholder += d.name;
        }
    }
    console.log(concating);
}

async function getFirstThreeUsers(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const posts = await res.json();
    if(!res.ok){
        throw new Error("Error");
    }
    posts.splice(0, 3).forEach(p => {
        console.log(`${p.data}`);
    })
}
concatUsers();
getFirstThreeUsers();
