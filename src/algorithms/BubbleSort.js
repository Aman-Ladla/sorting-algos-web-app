

async function BubbleSort(arr, update, speed, setIsSorted, setInProgress, setTime, setPsIndex) {

    async function bubble(arr) {
        let flag;

        for (let i = 1; i < arr.length; i++) {
            flag = false;
            for (let j = 0; j < arr.length - i; j++) {
                if (arr[j + 1] < arr[j]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    flag = true;
                }
            }
            if (!flag) {
                break;
            }
        }
    }

    let temp = [...arr];

    // let st = new Date().getMilliseconds();
    let st = performance.now();
    console.time('time');
    await bubble(temp);
    let et = performance.now();
    // let et = new Date().getMilliseconds();

    console.timeEnd('time');



    let flag;

    let flag1;

    for (let i = 1; i < arr.length; i++) {
        flag = false;
        for (let j = 0; j < arr.length - i; j++) {
            flag1 = false;
            setPsIndex(1);
            if (arr[j] > arr[j + 1]) {
                setPsIndex(2);
                update(arr, i, j, j + 1, true);
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                flag = true;
                flag1 = true;
            }

            if (!flag1) {
                update(arr, i, j, j + 1, false);
            }

            await new Promise(done => setTimeout(() => done(), speed));
            update(arr, i, j, j + 1, false);
        }
        if (!flag) {
            break;
        }
    }

    setPsIndex(-1);

    update(arr, -1, -1, -1, false);
    setTime((et - st).toFixed(2));
    setIsSorted(true);
    setInProgress(false);

}

export default BubbleSort;