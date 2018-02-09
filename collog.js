// Require the colorer function
const colorer = require('./colorer')

// This is a print function that logs the arguments in colors
/* Strings: yellow,
   Numbers, NaN: cyan,
   undefined: red background, white text,
   Arrays: red,
   Objects: green,
   Functions: purple,
*/
function collog () {
  if (arguments.length === 0) {
    console.log('Nothing to print...')
  }

  // Convert our arguments aray like obj to array
  var args = Array.prototype.slice.call(arguments)

  // Call this function for each arguments supplied
  args.forEach(elem => {
    // log elem in different colors based on the type of the data
    colorer(elem)
  })
}

module.exports = collog
