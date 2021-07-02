const second = require('./setTimeOutAsync')

console.log("Program starts...")

const start = () =>{
    setTimeout(() => {
        second()
        console.log("first time out")
    }, 0)
}

start()
console.log("program ends...")