const os = require('os')

const user = os.userInfo()
console.log(user)

const systemInfo = {
    name: os.type(),
    release: os.release(),
    totMemory: os.totalmem(),
    freeMemory: os.freemem()
}
console.log(systemInfo)