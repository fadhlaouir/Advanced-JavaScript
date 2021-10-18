function a() {
    let grandpa = 'grandpa'
    return function b() {
        let father = 'father'
        return function c() {
            let son = 'son'
            return `${grandpa} > ${father} > ${son}`
        }
    }
}

a()()()

const one = a();

// closure => help you to access variable outside of a function inside of that function

function boo(string) {
    return function(name) {
        return function(name2) {
            console.log(`${string} ${name} ${name2}`)
        }
    }
}
const boo = (string) => (name) => (name2) =>
    console.log(`${string} ${name} ${name2}`)

boo('hi')('raed')('ghofrane')

const booString = boo('hi')
const booStringName = booString('raed')
const booStringName2 = booStringName('ghofrane')