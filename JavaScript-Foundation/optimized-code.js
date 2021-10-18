//inline caching
function findUser(user) {
    return `found ${user.firstName} ${user.lastName}`;
}

const userData = {
    firstName: 'Raed',
    lastName: 'Fadhlaoui'
}

findUser(userData);

// hidden classes
function Animal(x, y) {
    this.x = x;
    this.y = y;
}

const obj1 = new Animal(1, 2);
const obj2 = new Animal(3, 4);

obj1.a = 30;
obj2.b = 100;