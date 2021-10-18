function a() {
    console.log('hi');
}

a.call() // a() => allows us to call the function

a.apply() // a() => do the same thing barrow method from ather object or function

const wizard = {
    name = 'Raed',
    health: 100,
    heal() {
        return this.health = 100;
    }
}

const archer = {
    name: 'Robin Hood',
    health: 30,
}

wizard.heal.call(archer)

apply // takes an array of paramets

wizard.bind() // return a new function with surtane concept and parameters => it dosen't run the function (store for letter use)


// call and apply are usefull for bowring methods from an object
// bind is usefull for us to call function