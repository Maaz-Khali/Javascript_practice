let todos = getSavedtodo()

//fitering data

const filters ={
    id:uuidv4(),
    searchText:'',
    hideCompleted: false
}




renderTodos(todos, filters)



document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})
document.querySelector('#todo-form').addEventListener('submit', function(e){
    e.preventDefault()
    const title = e.target.elements.todoTask.value.trim()
    if(title.length > 0){
    todos.push({
        id : uuidv4(),
        title,
        completed: false
    })
    saveTodo(todos)
    renderTodos(todos, filters)
   
    e.target.elements.todoTask.value=''    
}
    
})

//checkbox
document.querySelector('#check-todo').addEventListener('change', function(e){
  filters.hideCompleted= e.target.checked
  renderTodos(todos, filters)
    })

/*

/listen for a new todo creation
document.querySelector('#add').addEventListener('click', function(){
    console.log('I m going to add new todo')
})

//listen for todo text change
document.querySelector('#enter-todo').addEventListener('input', function(e){
    console.log(e.target.value)
})
const ps= document.querySelectorAll('p')
ps.forEach(function(ps){
   if(ps.textContent.includes('the')){
       ps.remove();
   }
})*/
