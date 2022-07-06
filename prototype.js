function Person(name,surname) {
    this.name = name,
    this.surname = surname,
    this.getFullName = function() {
    return  `My name is ${this.name} and surname is ${this.surname}`
   

    }
}



const p1 = new Person("Batman","Bruce")
const p2 = new Person("Clark","Superman")

// Person.prototype.getFullName  = function() {
//     return  `My name is ${this.name} and surname is ${this.surname}`
// }

console.log(p1.getFullName())
console.log(p2.getFullName())