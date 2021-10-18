const multipleBy = function(num1) {
    return function(num2) {
        return num1 * num2
    }
}

const multipleBy = (num1) => num2 => num1 * num2

const multiplyByTwo = multipleBy(2);