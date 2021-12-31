//callback

const getCallBack= (num, callback) => {
    
setTimeout(() =>{////run code after a certain amount of time
if(typeof num === 'number'){
    callback(undefined, num*2)
}   else{
    console.log('Number must be provided')
}
}, 2000)
}

getCallBack(14,(err,data)=>{
    if(err){
        console.log(err)
    }else{
        getCallBack(data, (err,data)=>{
            if(err){
                console.log('err')
            }else{
                console.log(data)
            }
        })
    }
})

//promise
const getPromiseCallBack= (num) => new Promise((resolve, reject)=>{
        setTimeout(()=>{
         typeof num ==='number' ? resolve(num *2) : reject('rejected')
                }, 2000)
       
    })

getPromiseCallBack(2).then((data)=>{
getPromiseCallBack(data).then((data)=>{
    console.log(`promiseed numbeer:${data}`)
},(err)=>{
    console.log(err)
})
},(err)=>{
    console.log(err)
})

getPromiseCallBack('10').then((data)=>{
    return getPromiseCallBack(data)
}).then((data)=>{
    return getPromiseCallBack(data)
}).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})




// const  myPromise = getPromiseCallBack(123)
// myPromise.then((data)=>{//for resolvee
//     console.log(data)
// },(err)=>{///for reject
//     console.log(err)
// })

// myPromise.then((data)=>{//for resolvee
//     console.log(data)
// },(err)=>{///for reject
//     console.log(err)
// })