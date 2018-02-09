// Require the collog npm module
const collog = require('../collog.js')

// Sample data for testing
var o = {
  a: 1,
  b: 2,
  // JSON.stringify() rewrites 'undefined' to 'null'
  c: ['a', 'b', undefined]
}

var s = 'sample text'
var x
var y = null

// NaN is printed in cyan because typeof NaN is actually a 'number'
var z = NaN
var n = 123

var a = [1, 2, 3, function () { var foo = 1 }, { a: 2 }]

var f = function () {
  console.log('Foo')
}

collog(true, false, x, y, z, o, s, n, f, a, a[4])
collog(
  (function () { })()
)
collog(`Text: ${s}, function: ${f}`)
console.log(f)
console.log(f.toString())
collog()
