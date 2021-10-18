// Promise

// ASYNC AWAIT with ES8
// a function that return a promise . benefit :=> make code easier to read

movePlayer(100, 'left')
    .then(() => movePlayer(400, 'Left'))
    .then(() => movePlayer(10, 'Right'))
    .then(() => movePlayer(330, 'Left'))

// with ASYNC AWAIT 
async function playerStart() {
    const firstMove = await movePlayer(100, 'Left') // pause
    await movePlayer(400, 'Left') //pause
    await movePlayer(10, 'Right') //pause
    await movePlayer(330, 'Left') //pause
}

// without ASYNc
fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(console.log(resp));
// with async
async function fetchUser() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json();
    console.log(data)
}

// A promise is an Object that may produce a single value some time in the future
// Either a resolved value, or a reson that it's not resolved (rejected)

// Promise 1 of 3 posible state : fullfield, rejected or pending