const filterIn = (predicate, arr) => {
    var newList = [];
    for (let elem of arr) {
        if ( predicate(elem) ) {
            newList.push(elem)
        }
    }
    return newList
}