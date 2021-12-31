class Hangman{
    constructor(word, guesses){
        this.word = word.toLowerCase().split('')
        this.guesses= guesses
        this.guessedLetter= []
        this.status = "playing"
    }
    calculateStatus(){
        const finished = this.word.every((letter) => {
            return this.guessedLetter.includes(letter) || letter ===' '
        })
        if(this.guesses === 0){
            this.status = 'failed'
        } else if(finished){
            this.status = 'finished'
        }else{
            this.status = 'playing'
        }
    }

    get statusMessage(){
    if (this.status === 'playing'){
        return `Guess left ${this.guesses}`

    }else if (this.status ==='failed'){
        return `Nice try the word was '${this.word.join('')}'`
    }
    else
    {
        return ' Great work! You Guessed the right word'
    }

}
get   Puzzle(){
    let puzzle = ''

    this.word.forEach((letter) =>{
 (this.guessedLetter.includes(letter) || letter ===' ')?puzzle += letter:puzzle += '*'
    })
   return puzzle
}

makeGuess(guess){
    guess = guess.toLowerCase()
    const unique = !this.guessedLetter.includes(guess)
    const isBadGuess = !this.word.includes(guess)
    if(this.status !== 'playing'){
        return undefined
    }

    if (unique) {
        this.guessedLetter.push(guess)
        
    }
    if (isBadGuess && unique){
        this.guesses--
    }
    this.calculateStatus()
}


}

export { Hangman as default }

//////////////--------------Alternate method of class-------------////////////

// const Hangman = function(word, guesses){
//     this.word = word.toLowerCase().split('')
//     this.guesses= guesses
//     this.guessedLetter= []
//     this.status = "playing"
 
// }
// Hangman.prototype.calculateStatus = function(){
//     const finished = this.word.every((letter) => {
//         return this.guessedLetter.includes(letter)
//     })
    
//     // const UnguessedLetter = this.word.filter((letter) =>{
//     //     return !this.guessedLetter.includes(letter)
//     // })
//     //     const finished= UnguessedLetter.length === 0

//     // alternate method
//     //let finished = true

//     //     this.word.forEach((letter) =>{
//     //         if (this.guessedLetter.includes(letter)) {

//     //         } else {
//     //             finished = false
//     //         }
//     //     })
//     if(this.guesses === 0){
//         this.status = 'failed'
//     } else if(finished){
//         this.status = 'finished'
//     }else{
//         this.status = 'playing'
//     }
// }
// Hangman.prototype.statusMessage = function(){
//     if (this.status === 'playing'){
//         return `Guess left ${this.guesses}`

//     }else if (this.status ==='failed'){
//         return `Nice try the word was '${this.word.join('')}'`
//     }
//     else
//     {
//         return ' Great work! You Guessed the right word'
//     }

// }

// Hangman.prototype.getPuzzle= function(){
//     let puzzle = ''

//     this.word.forEach((letter) =>{
//  (this.guessedLetter.includes(letter) || letter ===' ')?puzzle += letter:puzzle += '*'
//     })
//    return puzzle
// }
// Hangman.prototype.makeGuess = function (guess){
//     guess = guess.toLowerCase()
//     const unique = !this.guessedLetter.includes(guess)
//     const isBadGuess = !this.word.includes(guess)
//     if(this.status !== 'playing'){
//         return undefined
//     }

//     if (unique) {
//         this.guessedLetter.push(guess)
        
//     }
//     if (isBadGuess && unique){
//         this.guesses--
//     }
//     this.calculateStatus()
// }

