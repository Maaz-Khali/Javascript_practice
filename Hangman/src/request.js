
///////////using awaits init
const getPuzzle = async(wordCount) =>{
  const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`,{})
  if(response.status === 200){
    const data = await response.json()
    return data.puzzle
  }else{
    throw new Error('unable to fetch data')
  }
}
/////////using promises
const getPuzzleOld = (wordCount) =>{
  return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`,{}).then((responce)=>{
 if(responce.status === 200){
   return responce.json()
 }else{
   throw new Error('unable to fetch data')
 }
}).then((data)=>{
return data.puzzle
})
}




const getCountry = async () =>{
  const response = await fetch('http://ipinfo.io/json?token=605e84e273f48b', {})
  if (response.status === 200) {
    return response.json()

  } else {
    throw new Error('Unable to fetch data')
  }}


// const getPuzzle = (wordCount) => new Promise((resolve, reject)=>{
//   const request = new XMLHttpRequest()
//   request.addEventListener('readystatechange', (e) =>{
//       if(e.target.readyState === 4 && e.target.status === 200 ){
//         const data = JSON.parse(e.target.responseText)
//          return resolve(data.puzzle)
//       }else if(e.target.readyState === 4){
//           reject('An error has taken place')

//       }
//   })

//   request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//   request.send()

// })

////////////////--------------------Synchronous version of getpuzzle------------------///////////////
const getPuzzleSync = () =>{

    const request = new XMLHttpRequest()
 request.open('GET', 'http://puzzle.mead.io/slow-puzzle', false)
 request.send()

 request.addEventListener('readystatechange', (e) =>{
    if(request.readyState === 4 && request.status === 200 ){
      const data = JSON.parse(request.responseText)
      return data.puzzle
    }else if(request.readyState === 4){
       throw new Error('things did not go well')
    }
})
}

export { getPuzzle as default }