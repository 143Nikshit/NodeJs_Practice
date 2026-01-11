// event an eventEmitter

var fs = require('fs');
var rs = fs.createReadStream('./demo.txt');
rs.on('open', function(){
    console.log('File opened');
})


var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on("speak", function(name){
    console.log(name, "sir speaking")
})

eventEmitter.emit("speak", "John")