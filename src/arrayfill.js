var React = require('react')
var ReactDOM = require('react-dom')
var arr = new Array(5).fill('a')
.map((item, i) => {
  return i
})
var arr = [1,2,3].join(',')
// console.log(arr)
var hello = React.createElement('div', null, arr)
ReactDOM.render(hello, document.getElementById('container'))