console.time('start')

var React = require('react')
var ReactDOM = require('react-dom')
// var arr = Array.apply(null, Array(5)).map(function (_, i) {return i;}).join(',')
var arr = Array.from([1,2,4]).map(function (_, i) {
  return i;
}).join(',')

var hello = React.createElement('div', null, arr)
ReactDOM.render(hello, document.getElementById('container'), function(){
  console.timeEnd('start')
  
})
