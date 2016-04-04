require("babel-polyfill")
console.time('start')

var arr = [1,2,3].fill().map(function (_, i) {
  return i;
}).join(',')

// async function(){
//   console.log("aa")
// }
// Object.assign({}, {a: "b"})