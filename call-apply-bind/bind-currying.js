// function currying
function multiply(a, b) {
    return a * b;
}

multiply(2, 4)

let multiplyByTwo = multiply.bind(this, 2)