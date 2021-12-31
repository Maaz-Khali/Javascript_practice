//get knowledge from mdn array
const todo = [{
    title:'pray namaz',
    completed:'no'},
    {
    title: 'programming',
    completed:'yes'},
    {title:'watching match',
    completed: 'no'},
    {title: 'eating food',
    completed: 'yes'},
    {title:'clean room',
    completed: 'no'}
]

const sortNotes= function(todo){
  todo.sort(function(todo){
      if(todo.completed.toLowerCase().includes('no') > todo.completed.toLowerCase().includes('yes') ){
          return -1
      }
      else if(todo.completed.toLowerCase().includes('no') < todo.completed.toLowerCase().includes('yes')){
          return 1
      }
      else{
          return 0
      }
  })    
}
sortNotes(todo)
console.log(todo)
/*
const toGetToDo = function(todo){
    return todo.filter(function(todo){
        const ThingsToDo=todo.completed.toLowerCase().includes('no')
        return ThingsToDo
    })

}

console.log(toGetToDo(todo));

const deleteTodo= function(todo, todotitle){
   let num= todo.findIndex(function(todo){
       return todo.title.toLowerCase() === todotitle.toLowerCase()
   })
   if (num > -1){
       todo.splice(num, 1);

   }
}

deleteTodo(todo, 'watching match')
console.log(todo)

todo.forEach(function (item, index){//passing a function into a function is called call back function
    const num = index +1;
    console.log(`${num}. The first item is ${item}`)
})

for(let count=0; count < todo.length ; count++){
    let num=count+1
    console.log(`${num}. The first item is ${todo[count]}`)
}
console.log(`you have ${todo.length} things todo.`)
console.log(`todo: ${todo[todo.length - 2]}`)
console.log(`todo: ${todo[0]}`)
console.log(todo.splice(2, 1))
todo.push('concentrate')
console.log(todo.shift())

console.log(todo)*/