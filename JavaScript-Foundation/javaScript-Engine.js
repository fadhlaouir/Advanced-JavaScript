const isHappy = true;

// JS Engine
function jsengine(code) {
    return code.split(/\s+/)
}

jsengine('var a = 5');

// Interpreter : translate and read the file ligne by ligne

// Compiler : dosen't translate, create a translation and compile to a language that is understand by the machine 

function someCalculation(x, y) {
    return x + y;
}

for (let i = 0; i < 1000; i++) {
    someCalculation(4, 5)
}