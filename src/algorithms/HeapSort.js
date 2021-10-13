let sortedIndex = [];

async function HeapSort(arr, update, speed, setIsSorted, setInProgress) {
    let size = arr.length;

    for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
        await maxHeapify(arr, size, i, update, speed);
    }
    for (let i = size - 1; i >= 0; i--) {
        update(arr, 0, i, sortedIndex, true, false);
        await new Promise(done => setTimeout(() => done(), speed));
        sortedIndex.push(i);
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        update(arr, i, 0, sortedIndex, false, false);
        await maxHeapify(arr, i, 0, update, speed);
    }
    console.log(arr);
    sortedIndex = [];
    update(arr, -1, -1, sortedIndex, false, false);
    setIsSorted(true);
    setInProgress(false);
}

async function maxHeapify(array, size, l, update, speed) {
    let largest = l;
    let left = 2 * l + 1;
    let right = 2 * l + 2;

    if (left < size && array[left] > array[largest]) {
        largest = left;
    }

    if (right < size && array[right] > array[largest]) {
        largest = right;
    }

    if (largest !== l) {
        update(array, l, largest, sortedIndex, true, true);
        await new Promise(done => setTimeout(() => done(), speed));
        let temp = array[l];
        array[l] = array[largest];
        array[largest] = temp;
        update(array, l, largest, sortedIndex, false, true);
        await maxHeapify(array, size, largest, update, speed);
    }
}
export default HeapSort;