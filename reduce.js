const reduce = (reducer, initialVal, arr) => {
    var ret = initialVal
    for (let elem of arr) {
        ret = reducer(ret, elem)
    }
    return ret
}

const addToRecord = (record, [key, value]) => ({ ...record, [key]: value })

const someData = [
    ["name", "Sam"],
    ["age", 30],
    ["isDeveloper", true]
]

console.log(reduce(addToRecord, {}, someData))