/**
 * Update Params:
 * 1st -> Array
 * 2nd -> index of first value greater than pivot
 * 3rd -> index of current element being compared
 * 4th -> index of pivot element
 * 5th -> boolean for swap (true - swap, false - not swap)
 * 6th -> array containing indices of elements on the correct position
 * 7th -> low
 * 8th -> index of current element (till where the purple color should appear)
 */

let positionedIndexArr = [];

async function QuickSort(
    arr,
    low,
    high,
    update,
    speed,
    setIsSorted,
    setInProgress,
    setTime,
    setPsIndex
) {
    async function partition1(arr, low, high) {
        let pivot = arr[high];

        let i = low - 1;

        for (let j = low; j <= high; j++) {
            if (arr[j] < pivot) {
                i++;
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

        let temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;

        return i + 1;
    }

    async function quick(arr, low, high) {
        if (low < high) {
            let part = await partition1(arr, low, high);

            await quick(arr, low, part - 1);
            await quick(arr, part + 1, high);
        }
    }

    let temp = [...arr];

    // let st = new Date().getMilliseconds();
    let st = performance.now();
    // console.time('time');
    await quick(temp);
    let et = performance.now();
    // let et = new Date().getMilliseconds();

    // console.timeEnd('time');

    await QuickSortImpl(arr, low, high, update, speed, setPsIndex);
    positionedIndexArr = [];
    setPsIndex(-1);
    update(arr, -1, -1, -1, false, positionedIndexArr, -1, -1);
    setTime((et - st).toFixed(2));
    setIsSorted(true);
    setInProgress(false);
}

async function QuickSortImpl(arr, low, high, update, speed, setPsIndex) {
    if (low < high) {
        let index = await partition(arr, low, high, update, speed, setPsIndex);
        await QuickSortImpl(arr, low, index - 1, update, speed, setPsIndex);
        positionedIndexArr.push(low);
        await QuickSortImpl(arr, index + 1, high, update, speed, setPsIndex);
        positionedIndexArr.push(index + 1);
    }
}

async function partition(arr, low, high, update, speed, setPsIndex) {
    setPsIndex(0);
    await new Promise((done) => setTimeout(() => done(), speed));

    let pivot = arr[high]; //element that goes to desired position
    let i = low - 1;
    update(arr, -1, -1, high, false, positionedIndexArr, low, high);
    setPsIndex(1);
    // await new Promise(done => setTimeout(() => done(), speed));
    for (let j = low; j <= high - 1; j++) {
        setPsIndex(2);
        // await new Promise(done => setTimeout(() => done(), speed));
        if (arr[j] <= pivot) {
            setPsIndex(3);
            i++;
            update(arr, i, j, high, true, positionedIndexArr, low, j);
            await new Promise((done) => setTimeout(() => done(), speed));
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            update(arr, i, j, high, false, positionedIndexArr, low, high);
        } else {
            update(arr, i + 1, j, high, false, positionedIndexArr, low, j);
            await new Promise((done) => setTimeout(() => done(), speed));
        }
    }
    setPsIndex(4);
    update(arr, i + 1, high, high, true, positionedIndexArr, low, high);
    positionedIndexArr.push(i + 1);
    await new Promise((done) => setTimeout(() => done(), speed));
    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    update(arr, i + 1, high, i + 1, false, positionedIndexArr, low, high);
    return i + 1;
}

export default QuickSort;
