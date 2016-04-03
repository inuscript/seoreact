var React = require('react')
var ReactDOM = require('react-dom')

var hello = React.createElement('div', null, 'hello')
console.log(hello)
ReactDOM.render(hello, document.getElementById('container'))