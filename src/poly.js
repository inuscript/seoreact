console.time('start')

var arr = new Array(1).fill().map(function (_, i) {
  return i;
}).join(',')
