
let notes = getSavedNotes()


const filters = {

    searchText: '',
    sortBy:'byEdited'
}
renderNotes(notes, filters)




document.querySelector('#create-notes').addEventListener('click', function (e) {
    const id = uuidv4()
    const timestamp = moment().valueOf()
    notes.push({
       id: id,
        title: '',
        body:'',
        createdAt: timestamp,
        updatedAt: timestamp
    })
    saveNotes(notes)
    location.assign(`edit.html#${id}`)

})


document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})


    /*   document.querySelector('#name-form').addEventListener('submit', function(e){
           e.preventDefault()
           console.log(e.target.elements.firstName.value)
            e.target.elements.firstName.value =''
        })*/
///for checkbox
/*document.querySelector('#for-fun').addEventListener('change', function(e){
    console.log(e.target.checked)
})
*/
 
//Query and rmove
//const p= document.querySelector('p')
//console.log(p)
//p.remove()

      

/*const ps=document.querySelectorAll('p')
ps.forEach(function(p){
    p.textContent='********'
    //p.remove()
    //console.log(p.textContent)
})
const newPara =document.createElement('p')
newPara.textContent= 'This is my new javascript program'
document.querySelector('body').appendChild(newPara);

///previous video's stuff
const notes=[{
    title:'my book',
    body:'meri kitab'},
    {
        title:'my house',
        body:'mera ghar'},
        {
            title:'my family',
            body:'meri family'}
    ]

   
    //const user ={
      //  name: 'Maaz',
        //Age: '19'

    //}
    //const userJSON = JSON.stringify (user)//convert object to string
    //console.log(userJSON);
    localStorage.setItem('user', userJSON)
      
   /* localStorage.setItem('location', 'Islamabad')
    localStorage.removeItem('location')
    console.log(localStorage.getItem('location'))
    //localStorage.clear()

    const userJSON = localStorage.getItem('user')
    const user = JSON.parse(userJSON)
    console.log(`${user.name} is ${user.Age}`)
 */

