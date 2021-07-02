
const { readFile } = require('fs').promises
/*const util = require('util')
const readFilePromise = util.promisify(readFile)
const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, res) => {
            if(err){
                reject(err)
            }
            else{
                resolve(res)
            }
        })
    })
} */

const start = async() => {
    try{
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'utf8')
        console.log(first, second)
    }
    catch(err){
        console.log(err)
    }
}

start()