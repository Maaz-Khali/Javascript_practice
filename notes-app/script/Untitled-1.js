//const now = new Date()
//const timestamp = now.getTime()
//const yele = new Date(timestamp)
//console.log(yele)
/*console.log(now.toString())
console.log(`year: ${now.getFullYear()}`)
console.log(`month: ${now.getMonth()}`)
console.log(`day: ${now.getDate()}`)
console.log(`hour: ${now.getHours()}`)
console.log(`minute: ${now.getMinutes()}`)*/

const hello = new Date('Dec 12 2001 00:23:43')
const hi = new Date('July 01 2002 14:20:00')
const timestamp_1 = hello.getTime()
const timestamp_2 = hi.getTime()
if (timestamp_1 < timestamp_2) {
    console.log(hello.toString())
    
}
else{
    console.log(hi.toString())
}