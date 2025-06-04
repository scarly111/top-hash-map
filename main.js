const HashMap = require('./hash-map')

const test = new HashMap()

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

console.log(test.length()) // 12

// overwrite some existing values
test.set('apple', 'green apple')
test.set('frog', 'dark green')
console.log(test.get('apple')) // 'green apple'
console.log(test.get('frog')) // 'dark green'
console.log(test.length()) // Still 12

// trigger resize
test.set('moon', 'silver')
console.log(test.length()) // 13
console.log(test.get('moon')) // 'silver'

// check functionality
console.log(test.has('lion')) // true
console.log(test.remove('lion')) // true
console.log(test.has('lion')) // false
console.log(test.length()) // 12

console.log(test.keys())    // All keys
console.log(test.values())  // All values
console.log(test.entries()) // All entries

test.clear();
console.log(test.length()) // 0
console.log(test.entries()) // []
