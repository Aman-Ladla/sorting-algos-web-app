
function createArray(size){

    const arr = [];

    for (let i=0;i<size;i++){
        arr.push(Math.random() * 100 + 1);
    }

    return arr;

}

export default createArray;