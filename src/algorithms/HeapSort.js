let sortedIndex = [];

async function HeapSort(arr, update, speed, setIsSorted, setInProgress, setTime) {

    async function heapify(arr, i, n) {

        let largest = i;

        let l = 2 * i + 1;
        let r = 2 * i + 2;

        if (l < n && arr[l] > arr[largest]) {
            largest = l;
        }

        if (r < n && arr[r] > arr[largest]) {
            largest = r;
        }

        if (largest !== i) {
            let temp = arr[i];
            arr[i] = arr[largest];
            arr[largest] = temp;
            await heapify(arr, largest, n);
        }

    }

    async function heapSort(arr) {

        let n = arr.length;

        for (let j = n / 2 - 1; j >= 0; j--) {
            await heapify(arr, j, n);
        }

        for (let i = n - 1; i > 0; i--) {

            let temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;

            await heapify(arr, 0, i);
        }

    }

    let temp = [...arr];

    // let st = new Date().getMilliseconds();
    let st = performance.now();
    console.time('time');
    await heapSort(temp);
    let et = performance.now();
    // let et = new Date().getMilliseconds();

    console.timeEnd('time');




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
    sortedIndex = [];
    update(arr, -1, -1, sortedIndex, false, false);
    setTime((et - st).toFixed(2));
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