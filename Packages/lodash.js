const lodash = require('lodash')

const _chunk = lodash.chunk(['a', 'b', 'c', 'd'], 2)
console.log(_chunk)

const _compact = lodash.compact([0, 1, 2, false, '', 3])
console.log(_compact)

const array = [1]
const _concat = lodash.concat(array, 2, [3], [[4]])
console.log(_concat)

const _drop = lodash.drop([1, 2, 3], 2)
console.log(_drop)

console.log(lodash.dropRight([1, 2, 3], 2))

var users = [
    {'user': 'A', 'active': true},
    {'user': 'C', 'active': true},
    {'user': 'D', 'active': false}
]
const filteredUsers = lodash.dropRightWhile(users, function(o) { return !o.active; });
console.log(filteredUsers)

console.log(lodash.indexOf([1, 2, 3, 2], 2, 2))
