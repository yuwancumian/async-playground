function* gen() {
    yield  123 + 456;
}
var a = gen().next()
console.log(a)
