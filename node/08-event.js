const events = require("events");

const emitter = new events.EventEmitter();

emitter.on("customEvent",(param1,param2)=>{
    console.log(param1,param2);
})

emitter.emit('customEvent','hello','hi')