const person = {
    name: "Batman",
    sayMyName: function() {
        return `My name is ${this.name}`
    }
}
const ans = person.sayMyName()
console.log(ans)