const titleEl = document.querySelector('#note-title')
const bodyEl = document.querySelector('#note-body')
const removeEl = document.querySelector('#remove-note')
const dateElement=document.querySelector('#last-edited')
const noteId = location.hash.substring(1)
let notes= getSavedNotes()
let note = notes.find( (note) => note.id === noteId)

if (note === undefined) {
    location.assign('/index.html');
}
titleEl.value = note.title
bodyEl.value = note.body
dateElement.textContent = generateLastEdited(note.updatedAt)

titleEl.addEventListener('input', (e) =>{
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    dateElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})
bodyEl.addEventListener('input', (e) =>{
    note.body = e.target.value
    dateElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})
removeEl.addEventListener('click', (e)=>{
    removeNotes(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

window.addEventListener('storage', (e) =>{//any of data in local storage updates
  if (e.key === 'notes') {
     notes = JSON.parse(e.newValue)
     note = notes.find((note)=> note.id === noteId)

   if (note === undefined) {
    location.assign('/index.html');
}
titleEl.value = note.title
bodyEl.value = note.body
dateElement.textContent = generateLastEdited(note.updatedAt)     
  }
})
/* //////--------------------This code is created to figure out how library works-----------------//////
const now =  moment()
//now.minute(1);
now.add(1,'year').subtract(20,'days')
console.log(now.format('MMMM Do, YYYY'))
console.log(now.fromNow())
const nowTimeStamp = now.valueOf()
console.log(moment(nowTimeStamp).toString())

const how = moment()
how.subtract(19,'year').subtract(5, 'month').subtract(16,'days')
console.log(how.format('MMMM Do, YYYY'))
//or
how.year(2002).month(6).date(1)//month starts with index 0
console.log(how.format('MMMM D, YYYY'))
*/




