const getTip = (amount)=>{
    if (typeof amount==='number'){
        return amount * 0.25
    }else{
        throw 'amount must be a numbr'
    }
}
const result = getTip(2)
console.log(result)
