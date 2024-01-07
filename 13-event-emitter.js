const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', ()=> {
    console.log(`data received user`)
})

customEmitter.on('response', ()=> {
    console.log('some other logic here')
})

customEmitter.emit('response', '')