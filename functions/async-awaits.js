const getPromiseCallBack= (num) => new Promise((resolve, reject)=>{
    setTimeout(()=>{
     typeof num ==='number' ? resolve(num *2) : reject('rejected')
         }, 2000)
   
})


const getData = async() =>{
   let data = await getPromiseCallBack(2)
    data = await getPromiseCallBack(data)
   return data
//    getPromiseCallBack(2).then((data)=>{
//        console.log(data)
//    })
}


 getData().then((data) =>{
     console.log('Data',data)
     }).catch((error)=>{
     console.log('Error',error)
 })