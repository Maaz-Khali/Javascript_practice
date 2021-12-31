'use strict'
let data

const processData = () =>{
    data  ='65767889976'
}
processData()
console.log(data)






//console.log(uuidv4())

//reading the existing code from localStorage
const getSavedNotes = () => {
  
const notesJSON = localStorage.getItem('notes')

    return notesJSON ? JSON.parse(notesJSON):[] 
    
}
// Remove  note from a function
const removeNotes  = (id) => {
    const noteIndex = notes.findIndex((note) =>  note.id === id )
     if(noteIndex > -1){
         notes.splice(noteIndex, 1)
     }

}



// generate the DOM structure for a note
const generateNoteDOM = (note) =>{
    const noteEl = document.createElement('a')
    const textEl = document.createElement('p')
   const statusEl = document.createElement('p')
   
    // const button = document.createElement('button')

    // //setup the remove note
    // button.textContent = 'x'
    // noteEl.appendChild(button)
    // button.addEventListener('click', () =>{
    //     removeNotes(note.id)
    //     saveNotes(notes)
    //     renderNotes(notes, filters)
    //     })
        //setup the note title text
        if (note.title.length > 0) {
            textEl.textContent = note.title
        } else {
            textEl.textContent = 'Unnamed note'
        }
        
        textEl.classList.add('list-item__title')
        noteEl.appendChild(textEl)
        
        //setup link
        noteEl.setAttribute('href',  `/edit.html#${note.id}`)
        noteEl.classList.add('list-item')

        //setup the status message 
        statusEl.textContent= generateLastEdited(note.updatedAt)
        statusEl.classList.add('list-item__subtitle')
        noteEl.appendChild(statusEl)

        return noteEl
    }

    // sort your notes by one of three phase
    const sortNotes = (notes, sortBy) =>{
        if (sortBy === 'byEdited'){
            return notes.sort((a, b)=>{
                if (a.updatedAt > b.updatedAt){
                    return -1
                }else if(a.updatedAt < b.updatedAt) {
                    return 1
                }else{
                    return 0
                }

            })
        } else if(sortBy === 'byCreated'){
            return notes.sort((a,b)=>{
                if (a.createdAt > b.createdAt){
                    return -1
                }else if (a.createdAt < b.createdAt){
                    return 1
                }
                else{
                    return  0
                }
            })
        } else if(sortBy === 'alphabetical'){
            return notes.sort((a,b) =>{
                if (a.title.toLowerCase() > b.title.toLowerCase()){
                    return -1
                }else if (a.title.toLowerCase() < b.title.toLowerCase()){
                    return 1
                }
                else{
                    return  0
                }
            })
        } else{
            return notes
        }
    }


    // save the notes to local storage
    const saveNotes = (note)=>{
        localStorage.setItem('notes', JSON.stringify(notes))
    }

//render notes
const renderNotes =  (notes, filters) => {
     const notesEl =document.querySelector('#notes')
   let filteredNotes = notes.filter( (note) => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
        
    })
   
    notesEl.innerHTML = ''
    
    if(filteredNotes.length > 0){
        filteredNotes.forEach( (note) => {
            const noteEl= generateNoteDOM(note)
            
            notesEl.appendChild(noteEl)
        })

    }else{
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = 'No notes to show'
        emptyMessage.classList.add('empty-message') /// how to add class in js
        notesEl.appendChild(emptyMessage)
    }

   
}

const generateLastEdited =  (timestamp) => {
    return  `Last edited ${moment(timestamp).fromNow()}`

}