let GuessRandom = function(num){
    if(num>=1 && num<=5){
        return true
    }
    else{
        return false
    }
}
let x= Math.floor(Math.random()* 7)
console.log(x)
let ab=GuessRandom(x)
console.log(ab)