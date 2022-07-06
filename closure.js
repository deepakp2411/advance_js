// closure a function when returns from another function 

function outer() {
    let a = 2;
    
    function inner() {
        a++
        console.log(a)
    }
    return inner
}

const ans = outer()
ans()
ans()
ans()
ans()
ans()