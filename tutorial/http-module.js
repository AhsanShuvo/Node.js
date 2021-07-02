const http = require('http')
const {readFile} = require('fs')
let text = '';

readFile('./content/first.txt', 'utf8', (err, result) =>{
    if(err){
        text = err.message
    }
    text = result
    loadServer();
})

function loadServer(){
    const server = http.createServer((req, res) => {
        if(req.url === '/'){
            res.end('Welcome to our home page!')
        }
        else if(req.url === '/about'){
            res.end('Welcome to our about page!')
        }
        else {
            res.end(text)
        }
    })
    
    server.listen(5000)
}
