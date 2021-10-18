// 7 types

// Primitive :=> data that represent a signle type
Number;
String;
Boolean;
undefined;
null;
Symbol("just me");
Object; // {} [] function are object

// Non-Primitive :=> data that represent a multiple type
{}
[];

function a() {}

// var variables can be re-declared and updated
// let can be updated but not re-declared.
// const cannot be updated or re-declared

let obj = {
    a: "a",
    b: "b",
    c: {
        deep: "try and copy me",
    },
};

let clone = Object.assign({}, obj);
let clone2 = {...obj };
let superClone = JSON.parse(JSON.stringify(obj));

obj.c.deep = "hahahah";
console.log(obj);
console.log(clone);
console.log(clone2);
console.log(superClone);