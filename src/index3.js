var React = require('react')
var ReactDOM = require('react-dom')

var hello = React.createElement('div', null, 'hello')
setTimeout(function(){
  ReactDOM.render(hello, document.getElementById('container'))
}, 1000)
