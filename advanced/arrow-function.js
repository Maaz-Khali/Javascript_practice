
const square = (num) =>  num * num

const squareLong = (num) => {
    return num * num
    }
console.log(squareLong(5))
console.log(square(5))

const people = [{
    name: 'Maaz',
    age: 20
},
{
    name: 'ali',
    age: 32
},
{
    name: 'umar',
    age: 50
}]
////////------regular function-----------//////
/*const under30 =  people.filter( function(people){
    return people.age < 30
})*/
//////////----arrow function;
const under30 = people.filter((people)=> people.age < 30)
console.log(under30)
const age32 = people.find((people)=> people.age=== 32)
console.log(age32.name)