// const myFunction = () => {
//     const message = 'this is a message'
//     const printMsg = () =>{
//         console.log(message)
//     }
//     return printMsg()
// }
// const MyPrintMsg= myFunction()

// MyPrintMsg()

const crateCounter = () => {
    let count = 0
    return{
        increment(){
            count++
        },
        decrement(){
            count--
        },
        get(){
            return count
        }
    }
}

const counter = crateCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())

/// addr
const createAdd= (a) =>{
    return (b) =>{
        return a+b
    }
}

const add = createAdd(14)
console.log(add(-9))
console.log(add(6))

///tipper
const createTipper = (a)  =>{
    return (b) =>{
        return a* b
    }
}

const tip = createTipper(.15)
console.log(tip(230))