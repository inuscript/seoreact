var React = require('react')
var ReactDOM = require('react-dom')
var arr = new Array(5).fill('a')
.map((item, i) => {
  return i
})
var arr = [1,2,3]
// console.log(arr)
var hello = React.createElement('div', null, arr.join(','))
ReactDOM.render(hello, document.getElementById('container'))