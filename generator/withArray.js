function* gen(){
    yield* ["a", "b", "c"];
}
var g = gen()

console.log(g.next())
console.log(g.next())
