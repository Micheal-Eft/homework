function wellcoming(name) {
    console.log('Hello ' + name)
}

function search(array) {
    for (i = 0 ; i < array.length ; i++) {
        if (array[i] > 10) {
            console.log('found: ' + array[i])
        }
    }
}

function calc(firNum, secNum, action) {
    if (action === '+') {
        return firNum + secNum
    }
    if (action === '-') {
        return firNum - secNum
    }
    if (action === '*') {
        return firNum * secNum
    }
    if (action === '/') {
        return firNum / secNum
    }
}

const name = 'Micheal'
wellcoming(name)

const numbers = [1, 10, 2, 15, 3, 20]
search(numbers)

answer = calc(5, 10, '+')
console.log('answer: ' + answer)

// ================================================

const user = {

    name: 'Mecheal',
    age: 20,
    admin: false,
    hello(name) {
        console.log('Hello ' + name)
    }

}

user.hello('Misha')

const users = [
    {
        name: 'Misha',
        age: 20,
        admin: false
    },
    {
        name: 'Oleg',
        age: 25,
        admin: true
    },
    {
        name: 'Masha',
        age: 21,
        admin: false
    }
]

sumNotAdminUsers = 0

for (i=0 ; i < users.length ; i++){
    if (users[i].admin == false){
        sumNotAdminUsers++
    }
}
console.log('quantity not admin users: ' + sumNotAdminUsers)