require('./classof')

// See more about colors in shell/terminal: http://jafrog.com/2013/11/23/colors-in-terminal.html
// Also see this for more info: https://gist.github.com/vratiu/9780109

// Text colors, ANSI escape sequences in hexadecimal
let close = '\x1b[0m'
let red = '\x1b[31m'
let green = '\x1b[32m'
let yellow = '\x1b[33m'
let purple = '\x1b[35m'
let cyan = '\x1b[36m'
// white and bold text
let whiteBold = '\x1b[1;37m'

// Background colors, ANSI escape sequences in hexadecimal
let bgRed = '\x1b[41m'
let bgGreen = '\x1b[42m'
let bgMagenta = '\x1b[45m'
let bgCyan = '\x1b[46m'

// This is the colorer function
module.exports = function (elem) {
  if (typeof elem === 'string') {
    // Strings in yellow
    console.log(yellow + elem + close)
  } else if (typeof elem === 'number') {
    // Numbers in red
    console.log(red + elem + close)
  } else if (elem === undefined) {
    // undefined: cyan background, white text
    console.log(bgCyan + whiteBold + elem + close)
  } else if (elem === null) {
    // null: magenta background, white text
    console.log(bgMagenta + whiteBold + elem + close)
  } else if (elem === true) {
    // true: green background, white text
    console.log(bgGreen + whiteBold + elem + close)
  } else if (elem === false) {
    // false: red background, white text
    console.log(bgRed + whiteBold + elem + close)
  } else if (isArray(elem)) {
    // Arrays in cyan, JSON pretty format
    // console.log(red + '[ ' + elem.join(', ') + ' ]' + close)
    console.log(cyan + JSON.stringify(elem, null, 2) + close)
  } else if (isObject(elem)) {
    // Objects in green, JSON pretty format
    console.log(green + JSON.stringify(elem, null, 2) + close)
  } else if (isFunction(elem)) {
    // Functions in purple
    console.log(purple + elem.toString() + close) // get the 'code' property
  } else {
    console.log('Unknown argument type')
    throw new Error('Exception: Unknown argument type')
  }
}
