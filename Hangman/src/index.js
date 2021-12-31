import uuidv4 from 'uuid/v4'
import validator from 'validator'
import Hangman from './hangman'
import getPuzzle from './request'
const gussesEl = document.querySelector('#guesses')
const puzzleEl = document.querySelector('#puzzle')
let game1 
// puzzleEl.textContent = game1.Puzzle
// gussesEl.textContent = game1.statusMessage
console.log(validator.isEmail('andrew@mead.com'))
console.log(uuidv4())
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
/*getCountry().then((location)=>{
    console.log(`you are currently in ${location.region} ${location.city} ${location.country}`)
    console.log(location)
}).catch((error)=>{
    console.log(error)
})*/

const startGame = async () =>{
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}


 document.querySelector('#reset').addEventListener('click', startGame)
startGame()



console.log('some thing ') 