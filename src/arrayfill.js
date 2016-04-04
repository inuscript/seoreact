var React = require('react')
var ReactDOM = require('react-dom')
var arr = new Array(5).fill('').map((item, i) => {
  return i
})
// console.log(arr)
var hello = React.createElement('div', null, arr.join(','))
ReactDOM.render(hello, document.getElementById('container'))