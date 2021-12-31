const myAge = 20
let message
message = myAge >= 18 ? 'You can vote': 'You cannot vote!'
console.log(message)

const showPage = ()=>{
console.log('showing page')
}

const showErrorPage = () =>{
    console.log('showing error page')
}

myAge >= 21 ? showPage():showErrorPage()

const team =['ali',  'abdullah']


console.log(team.length <=4 ? `Team size:${team.length}`:'Too many people in your team')
