console.time('start')

var React = require('react')
var ReactDOM = require('react-dom')
var arr = Array.apply(null, Array(5)).map(function (_, i) {return i;}).join(',')
// .map((item, i) => {
//   return i
// })
// var arr = [1,2,3].join(',')
console.log(arr)
var hello = React.createElement('div', null, arr)
ReactDOM.render(hello, document.getElementById('container'), function(){
  console.timeEnd('start')
  
})
