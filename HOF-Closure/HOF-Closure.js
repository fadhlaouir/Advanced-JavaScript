// HOF => it's a function returning another function
const hof = () => () => 5
hof()()

// Closure => define a function inside another function
const closure = function() {
    let count = 0;
    return function increment() {
        count++
        return count
    }
}
const incr = closure()
incr()