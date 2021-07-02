const promises = (id) => {
    return new Promise((resolve, reject) => {
        console.log("Inside promises.")
        if(id === 3){
            reject(`reject from promises ${id}`)
        }
        else{
            resolve(`Return from promises ${id}`)
        }
    })
}

const out = promises(1);
out.then((res) => console.log(res)).catch((res) => console.log(res))

const start = () => {
    console.log("calling promises")
        const res1 = promises(2)
        const res2 = promises(3)
        console.log("Hello World")
        Promise.all([res1, res2]).then((value) => {
            console.log(value)
        })
        .catch((value) => {
            console.log(value)
        })
}

start()