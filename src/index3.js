var React = require('react')
var ReactDOM = require('react-dom')
var qs = require('querystring')

var q = qs.parse(location.search)
var timeout = parseInt(q["timeout"], 10)
// console.log(timeout)

var hello = React.createElement('div', null, 'hello timeout:' + timeout)

setTimeout(function(){
  ReactDOM.render(hello, document.getElementById('container'))
}, "timeout")
