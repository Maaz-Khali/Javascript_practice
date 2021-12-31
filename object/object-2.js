let tempConvert = function(F){
    return{
        F,
     celsius:(F - 32)* 5 / 9,
     kelvin: (F - 32)* 5 / 9 + 273 
    }
}
let temp = tempConvert(68)
console.log(temp)