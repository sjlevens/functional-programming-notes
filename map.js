const makeRecord = name => ({ id: name.toUpperCase() + 'ID', name })

const map = (mapper, arr) => {
    var newList = []
    for( let elem of arr ) {
        newList.push( mapper(elem) )
    }
    return newList
}

console.log(map(makeRecord, ['Sam', 'Jesre'])[1])
