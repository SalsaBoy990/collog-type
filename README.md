# Collog-type

Function that logs its arguments in different colors based on their data type.

    /* Strings: yellow text,
      Numbers, NaN: cyan text,
      undefined: cyan background, bold white text,
      null: magenta background, bold white text,
      true: green background, bold white text
      false: red background, bold white text
      Arrays: cyan text, JSON pretty format
      Objects: green text, JSON pretty format
      Functions: purple text
    */


## Installation


    npm install collog-type


## Usage


    const collog = require('collog-type')

    // or whatever
    function f () {
      console.log('Foo')
    }

    // call the function
    collog(f, 123, 'text', { a: 1 }, undefined, [ 1, 2, 3 ])


## Sample


![alt text](https://raw.githubusercontent.com/SalsaBoy990/imagesRepo/master/collog_sm.jpg "collog in cmd")


## Testing

Navigate to `node_modules\collog-type` in your project folder, and run

    npm test


## Release Notes

* 1.0.0 Initial release

## License

MIT