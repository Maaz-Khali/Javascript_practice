 
const gussesEl = document.querySelector('#guesses')
const puzzleEl = document.querySelector('#puzzle')
let game1 
// puzzleEl.textContent = game1.Puzzle
// gussesEl.textContent = game1.statusMessage

//const game2 = new Hangman('Maaz Khalid', 1)

//console.log(game2.getPuzzle())
//console.log(game2.guesses)

window.addEventListener('keypress',(e)=>{
    const guess = String.fromCharCode(e.charCode)
    //gussesEl.textContent = game1.guesses
    game1.makeGuess(guess)
    render()
     
})

const render = async ()=>{
    gussesEl.textContent = game1.statusMessage
    puzzleEl.innerHTML = ''

    game1.Puzzle.split('').forEach((letter)=>{
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })
}
  getPuzzle('2').then((puzzle)=>{
     console.log(puzzle)
  },(err)=>{
      console.log(`Error :${err}`)
  }
  )
getCountry().then((location)=>{
    console.log(`you are currently in ${location.region} ${location.city} ${location.country}`)
    console.log(location)
}).catch((error)=>{
    console.log(error)
})

const startGame = async () =>{
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}


 document.querySelector('#reset').addEventListener('click', startGame)
startGame()



console.log('some thing ')
// fetch('http://puzzle.mead.io/puzzle',{}).then((responce)=>{
//     if(responce.status === 200){
//         return responce.json()
//     }else{
//         throw new Error('unable to fetch data')
//     }
// }).then((data)=>{
//     console.log(data.puzzle)
// }).catch((error)=>{
//     console.log(error)
// })


// const request = new XMLHttpRequest()
// request.addEventListener('readystatechange', (e) =>{
//     if(e.target.readyState === 4 && e.target.status === 200 ){
//         const data = JSON.parse(e.target.responseText)
//         console.log(data)
//     }else if(e.target.readyState === 4){
//         return 'An error has taken place'
//     }
// })

// request.open('GET', 'http://puzzle.mead.io/puzzle')
// request.send()

// const countryCode= "US"
// const countryRequest= new XMLHttpRequest()
// countryRequest.addEventListener('readystatechange', (e) =>{
//     if(e.target.readyState === 4 && e.target.status === 200){
//         const data = JSON.parse(e.target.responseText)
//         const country = data.find((country) => country.alpha2Code === countryCode)
//         console.log(country.name)
//     }else if(e.target.readyState === 4){
//         console.log('unable to fetch data')
//     }
// })
// countryRequest.open('GET','http://restcountries.eu/rest/v2/all')
// countryRequest.send()
