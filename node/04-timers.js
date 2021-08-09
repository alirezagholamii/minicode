const waitTime = 5000;

const timerFinished = () => {
    clearInterval(interval)
    console.log("done")

}

setTimeout(timerFinished, waitTime)



const waitInterVal = 500;
let currentTime = 0;
const incTime = () => {
    currentTime += waitInterVal;
    // console.log(`waiting ${currentTime/1000} second delay`);
    const p = Math.floor((currentTime / waitTime) * 100)
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ... ${p}%`)
}
const interval = setInterval(incTime, waitInterVal);