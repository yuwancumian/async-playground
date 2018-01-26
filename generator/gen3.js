function* gen(x){
  var y = yield x + 2;
  return 4;
}

var g = gen(1);
g.next() // { value: 3, done: false }
g.next(2) // { value: 2, done: true }
