const add = () =>{return arguments[0] + arguments[1]}

console.log(add(11,22,33,44))
const car ={
    colour:'Red',
    //getSummary: function(){
    //return `this car is ${this.colour}`//if we use arrow function instead of regular than color would be undefined
//or we can also display this function like
getSummary(){
    return `this car is ${this.colour}`
}    
}

console.log(car.getSummary())