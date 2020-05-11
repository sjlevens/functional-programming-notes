const compose = (...fns) => a => fns.reduceRight((soFar, nextFn) => nextFn(soFar), a)

const add1 = x => x + 1

const add3 = compose(add1, add1, add1)

console.log(add3(10))

console.log(compose(add1, add3)(10))