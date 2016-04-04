var React = require('react')
var ReactDOM = require('react-dom')
var qs = require('querystring')
console.time('app')
function createItem(i){
  return React.createElement('div', null, i)
}

var childs = []
for(i = 0; i < 10000; i++){
  childs.push(createItem(i))
}
var hello = React.createElement('div', null, childs)
ReactDOM.render(hello, document.getElementById('container'), function(){
  console.timeEnd('app')

})