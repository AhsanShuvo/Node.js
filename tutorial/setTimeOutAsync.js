

const secondInternal = () => {
    console.log("second internal..")
    setTimeout(() => {
        console.log("second internal time out")
    }, 0)
    console.log("second internal ends...")
}

const internal = () =>{
    console.log("second time out start")
    setTimeout(() => {
        secondInternal()
        console.log("Inside second time out.")
    }, 0)
}

module.exports = internal