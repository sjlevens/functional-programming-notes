const FIVE = () => 5
const SIX = () => 6

const add = (val1, val2) => val1 + val2

console.log(add(FIVE(), SIX()))

const add2 = (fn1, fn2) => fn1() + fn2()

console.log(add2(FIVE, SIX))

const wrapInFunction = val => () => val

const addn = (arr) => arr.reduce((fn1, fn2) => wrapInFunction(add2(fn1, fn2)))()

console.log(addn([FIVE, SIX, () => 2, () => 1, () => 3]))