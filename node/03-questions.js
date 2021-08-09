process.stdout.write('Hello ')
process.stdout.write('World \n\n\n!!!');
const questions = [
    "what's your name?",
    "what would you rather be doing?",
    "what is your preferred programming language?",
]

const ask = (i=0)=>{
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write('>')
}

ask()

const answers = []

process.stdin.on('data',(data)=>{
    answers.push(data.toString().trim())
    // process.stdout.write(`\n ${data.toString().trim()}  \n`);
    // process.exit();
    if(answers.length < questions.length){
        ask(answers.length)
    }else{
        process.exit()
    }
})

process.on('exit',()=>{
    console.log(answers);
})