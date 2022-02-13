async function InsertionSort(arr, update, speed, setIsSorted, setInProgress, setTime, setPsIndex) {

    async function insertion(arr) {

        for (let i = 1; i < arr.length; i++) {
            let temp = arr[i];

            let j = i - 1;

            while (j >= 0 && arr[j] > temp) {
                arr[j + 1] = arr[j];
                j--;
            }

            arr[j + 1] = temp;

        }

    }

    let temp = [...arr];

    // let st = new Date().getMilliseconds();
    let st = performance.now();
    console.time('time');
    await insertion(temp);
    let et = performance.now();
    // let et = new Date().getMilliseconds();

    console.timeEnd('time');



    /**
     * Update Params:
     * 1st -> array
     * 2nd -> preceding element
     * 3rd -> current element
     * 4th -> Horizontal 0 / Only Vertical 1
     * 5th -> Down 0 / Up 1
     * 6th -> Without Animation 0 / With animation 1
     * 7th -> No Swap False / Swap True
     */

    for (let i = 1; i < arr.length; i++) {
        setPsIndex(1);
        let value = arr[i];
        let j = i - 1;
        update(arr, -1, j + 1, 1, 0, 1, i, false);
        await new Promise(done => setTimeout(() => done(), speed));
        setPsIndex(2);
        while (j >= 0 && arr[j] > value) {
            setPsIndex(3);
            update(arr, j, j + 1, 0, 0, 0, i + 1, true);
            await new Promise(done => setTimeout(() => done(), speed));
            arr[j + 1] = arr[j];
            arr[j] = value;
            update(arr, -1, j, 1, 0, 0, i + 1, false);
            j--;
        }
        setPsIndex(4);
        arr[j + 1] = value;
        update(arr, -1, j + 1, 1, 1, 1, i + 1, false);
        await new Promise(done => setTimeout(() => done(), speed));
        update(arr, -1, -1, -1, -1, -1, i + 1, false);
        // await new Promise(done => setTimeout(() => done(), speed));
    }
    setPsIndex(-1);
    update(arr, -1, -1, -1, -1, -1, -1, false);
    setTime((et - st).toFixed(2));
    setIsSorted(true);
    setInProgress(false);

}

export default InsertionSort;