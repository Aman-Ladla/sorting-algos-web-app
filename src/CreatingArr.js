
function createArray(size) {

    const arr = [];

    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * 100) + 1);
    }

    return arr;

}

export default createArray;