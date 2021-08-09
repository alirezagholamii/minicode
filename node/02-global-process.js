console.log(process.pid);
console.log(process.versions.node);
// anything we type, when we run a node file, 
// gets added to this process.argv array
console.log(process.argv); 

// node 02-global-process.js alireza gholami
const [,,firstName,lastName] = process.argv;
console.log('my arguments are: ',firstName,lastName);


const grab = (flag)=>{
    const indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag]
}
const greeting = grab("--greeting")

// node 02-global-process.js alireza gholami --greeting Salam
console.log('greeting value: ',greeting);