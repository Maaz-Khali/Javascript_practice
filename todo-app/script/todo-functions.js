//fetch existing todos from localStorage
const getSavedtodo = function(){
    const todoJSON = localStorage.getItem('todos')
if (todoJSON !== null){
    return JSON.parse(todoJSON)

}else{
    return[]
}

}

// Save the notes to localStorage
const saveTodo = function(todos){
    localStorage.setItem('todos', JSON.stringify(todos))
}

 
//Render application todos based on filters
const renderTodos= function(todos, filters){
    let filteredTodos = todos.filter(function(todo){
        return todo.title.toLowerCase().includes(filters.searchText.toLowerCase())
        
    })
    /* alternate method of check box
    const renderTodos = function (todos, filters) {
        const filteredTodos = todos.filter(function (todo) {
            const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
            const hideCompletedMatch = !filters.hideCompleted || !todo.completed
    
            return searchTextMatch && hideCompletedMatch
        })*/
    
    filteredTodos =filteredTodos.filter(function(todo){
        return !todo.completed || !filters.hideCompleted
       /* if (filters.hideCompleted){
            return !todo.completed
            // we use this when completed: 'no' return todo.completed.toLowerCase().includes('no') 
        }else{
            return true
        } */
    })




    const left=filteredTodos.filter(function(todo){
        return !todo.completed
        //return todo.completed.toLowerCase().includes('no')
    
    })


    document.querySelector('#todos').innerHTML =''

    
document.querySelector('#todos').appendChild(generateSummaryDOM(left));
if (filteredTodos.length > 0) {
    filteredTodos.forEach(function(todo){
    
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
} else {
    const emptyMessage = document.createElement('p')
    emptyMessage.classList.add('empty-message')
    emptyMessage.textContent ='No to-dos to show'
    document.querySelector('#todos').appendChild(emptyMessage)

}


}

///-------------------Get DOM elements for an individual note------------//
const generateTodoDOM = function(todo){
   const todoEl = document.createElement('label')
   const containerEl = document.createElement('div')
   const checkbox=document.createElement('input')
   const todoText = document.createElement('span')
   const removeButton = document.createElement('button')
   
    //checkbox toggle
    const toggleTodo = function(id){
        const todo= todos.find(function(todo){
            return todo.id ===id
        })
        if (todo !== undefined) {
            todo.completed = !todo.completed
        }
    }


   //setup todo checkbox
   checkbox.setAttribute('type', 'checkbox')
   checkbox.checked = todo.completed
   containerEl.appendChild(checkbox)
   checkbox.addEventListener('change', function(){
    toggleTodo(todo.id)
    saveTodo(todos)
    renderTodos(todos, filters)
   })
   
   // Setup the todo text
   todoText.textContent = todo.title
   containerEl.appendChild(todoText)

   // remove todo function
   const removeTodos  = function(id){
    const TodoIndex = todos.findIndex(function(todo){
        return todo.id === id
    })
     if(TodoIndex > -1){
         todos.splice(TodoIndex, 1)
     }

}
   //setup class
   todoEl.classList.add('list-item')
   containerEl.classList.add('list-item__container')
   todoEl.appendChild(containerEl)

   //setup  the remove
   removeButton.textContent = 'remove'
   removeButton.classList.add('button', 'button--text')
   todoEl.appendChild(removeButton)
   removeButton.addEventListener('click', function(){
    removeTodos(todo.id)
    saveTodo(todos)
    renderTodos(todos, filters)
    })

    
   return todoEl

}

//-------------------------Get summary ----------------------//
const generateSummaryDOM= function(left){
    const para=document.createElement('h2')
    const plural = left.length === 1 ? '' : 's'
    para.classList.add('list-item')
para.textContent=`You have ${left.length} todo${plural} left`
return para
}

