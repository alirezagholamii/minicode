const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("How you doin?", (answer) => {
    console.log(answer);
})

