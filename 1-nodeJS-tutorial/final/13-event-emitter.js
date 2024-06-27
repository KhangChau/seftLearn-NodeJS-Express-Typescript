const eventEmitter = require('events');

const customEmitter = new eventEmitter();

// regist event
customEmitter.on('response',() => {
    console.log('something recieved!');
})
customEmitter.on('response',(name, id) => {
    console.log(`something recieved! ver.2: ${name} with ${id}`);
})


// emit event
customEmitter.emit('response', 'david', '123a');