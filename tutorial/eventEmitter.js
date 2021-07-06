const EventEmitter = require('events')
const myEmitter = new EventEmitter()

myEmitter.on("event", () => {
    console.log('Hello! first listener.')
})

myEmitter.on("event", (arg1, arg2) => {
    console.log(`event with parameters ${arg1}. ${arg2} in second listener`)
})

myEmitter.on("anotherevent", (...args) => {
    const parameters = args.join(', ')
    console.log(`events with parameters ${parameters} in third listener`)
})



console.log(myEmitter.listeners('event'))

myEmitter.emit('event', 1, 2, 3, 4, 5)

myEmitter.emit("anotherevent", 1, 2, 3, 4, 5)