//Prototypal Inheritance
class Person{
    constructor(firstName, lastName, age, likes = []){
        this.firstName = firstName
        this.lastName =lastName
        this.age =age
        this.likes= likes
    }

    getBio(){
        let Bio =`${this.firstName} is ${this.age} years old`
    this.likes.forEach((like) => {
        Bio += ` and ${this.firstName} likes ${like}`
        
    })
    return Bio
}

    set fullName (fullName){
        const name= fullName.split(' ')
 this.firstName = name[0]
 this.lastName = name[1]
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person{
    constructor(firstName, lastName, age, position, likes){
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio(){
        return `${this.fullName} is a ${this.position}.`
    }
    getYearsLeft(){
        return 65 - this.age
    }
  
}
class student extends Person{
    constructor(firstName, lastName, age, grades){
        super(firstName, lastName, age)
        this.grades = grades
    }
    getbio(){
        if(this.grades >= 70){
            return 'Passed'
        }else {
            return 'failed'
        }
    }
    updateChange(change){
        this.grades += change
    }
}

 const me = new Employee('Maaz','Khalid', 20, 'Front-end developer', ['Teaching', 'driving'])
console.log(me)
me.fullName= "Imran Khan"
 console.log(me.getBio())
console.log(me.getYearsLeft())


 const me2 = new Person('Babar','Azam', 25,['football', 'batting'])
 console.log(me2.getBio())


 const me3 = new student('Ahmed','Khan','19','90')
 
 me3.updateChange(-30)
 console.log(me3)
 console.log(me3.getbio())