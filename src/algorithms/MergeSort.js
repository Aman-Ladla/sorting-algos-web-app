/**
 * Update Params:
 * 1st -> Array
 * 2nd -> low
 * 3rd -> mid
 * 4th -> k
 * 5th -> left array current index
 * 6th -> right array current index
 * 7th -> 0 Element from left array / 1 element from right array
 * 8th -> 0 Down translate / 1 Up translate
 * 9th -> index already sorted in current session
 * 10th -> translation of element from its initial position
 * 11th -> Elements that have been partially sorted with given color
 * 12th -> Colors of individual elements
 */


async function MergeSort(arr, update, speed, setIsSorted, setInProgress, colorEleArr, colorArr, setTime) {

    async function mergeSort1(arr, low, high) {

        if (low < high) {
            let m = low + (high - low) / 2;

            await mergeSort1(arr, low, m);
            await mergeSort1(arr, m + 1, high);

            await merge1(arr, low, m, high);

        }

    }

    async function merge1(arr, low, mid, high) {

        let n1 = mid - low + 1;
        let n2 = high - mid;

        let left = [];
        let right = [];

        for (let i = 0; i < n1; i++) {
            left.push(arr[low + i]);
        }

        for (let i = 0; i < n2; i++) {
            right.push(arr[mid + i + 1]);
        }


        let i = 0, j = 0;

        let k = low;

        while (i < n1 && j < n2) {
            if (left[i] < right[j]) {
                arr[k] = left[i];
                i++;
            }
            else {
                arr[k] = right[j];
                j++;
            }
            k++;
        }

        while (i < n1) {
            arr[k] = left[i];
            i++;
            k++;
        }

        while (j < n2) {
            arr[k] = right[j];
            j++;
            k++;
        }
    }

    let temp = [...arr];

    // let st = new Date().getMilliseconds();
    let st = performance.now();
    console.time('time');
    await mergeSort1(temp);
    let et = performance.now();
    // let et = new Date().getMilliseconds();

    console.timeEnd('time');


    await mergeSort(arr, 0, arr.length - 1, update, speed, colorEleArr, colorArr);

    update(arr, -1, -1, -1, -1, -1, -1, -1, [], [], [], []);
    setTime((et - st).toFixed(2));
    setIsSorted(true);
    setInProgress(false);

}


async function mergeSort(arr, low, high, update, speed, colorEleArr, colorArr) {

    if (low < high) {
        let m = low + Math.floor((high - low) / 2);

        await mergeSort(arr, low, m, update, speed, colorEleArr, colorArr);
        await mergeSort(arr, m + 1, high, update, speed, colorEleArr, colorArr);

        await merge(arr, low, m, high, update, speed, colorEleArr, colorArr);
        await new Promise(done => setTimeout(() => done(), speed));

    }

}

async function merge(arr, low, mid, high, update, speed, colorEleArr, colorArr) {

    let n1 = mid - low + 1;
    let n2 = high - mid;

    let isPositioned = [];
    let isPositionedTx = [];

    let left = [];
    let right = [];

    for (let i = 0; i < n1; i++) {
        left.push(arr[low + i]);
    }

    for (let i = 0; i < n2; i++) {
        right.push(arr[mid + i + 1]);
    }

    let i = 0, j = 0;

    let k = 0;

    let temp = [...arr]

    while (i < n1 && j < n2) {
        if (left[i] < right[j]) {
            // console.log("lefty form " + (k - i));
            update(temp, low, mid, k, i, j, 0, 0, isPositioned, isPositionedTx, colorEleArr, colorArr);
            await new Promise(done => setTimeout(() => done(), speed));
            arr[k + low] = left[i];
            isPositioned.push(low + i);
            isPositionedTx.push(k - i);
            // console.log("isPositioned post" + isPositioned);
            i++;
        }
        else {
            // console.log("righty form " + ((low + k) - (mid + j + 1)));
            update(temp, low, mid, k, i, j, 1, 0, isPositioned, isPositionedTx, colorEleArr, colorArr);
            await new Promise(done => setTimeout(() => done(), speed));
            arr[k + low] = right[j];
            isPositioned.push(mid + j + 1);
            isPositionedTx.push((low + k) - (mid + j + 1));
            // console.log("isPositioned post" + isPositioned);
            j++;
        }
        k++;
    }

    while (i < n1) {
        // console.log("lefty form " + (k - i));
        update(temp, low, mid, k, i, j, 0, 0, isPositioned, isPositionedTx, colorEleArr, colorArr);
        await new Promise(done => setTimeout(() => done(), speed));
        arr[k + low] = left[i];
        isPositioned.push(low + i);
        isPositionedTx.push(k - i);
        // console.log("isPositioned post" + isPositioned);
        i++;
        k++;
    }

    while (j < n2) {
        // console.log("righty form " + ((low + k) - (mid + j + 1)));
        update(temp, low, mid, k, i, j, 1, 0, isPositioned, isPositionedTx, colorEleArr, colorArr);
        await new Promise(done => setTimeout(() => done(), speed));
        arr[k + low] = right[j];
        isPositioned.push(mid + j + 1);
        isPositionedTx.push((low + k) - (mid + j + 1));
        // console.log("isPositioned post" + isPositioned);
        j++;
        k++;
    }

    update(temp, low, mid, k, i, j, -1, 1, isPositioned, isPositionedTx, colorEleArr, colorArr);
    await new Promise(done => setTimeout(() => done(), speed));

    // if(colorEleArr.some(row => row.includes(isPositioned[0]))){

    for (let i = 0; i < isPositioned.length; i++) {
        for (let j = 0; j < colorEleArr.length; j++) {
            if (colorEleArr[j].includes(isPositioned[i])) {
                // console.log("removing " + colorEleArr[j]);
                colorEleArr.splice(j);
                colorArr.splice(j);
            }
        }
    }

    // for(let i=0;i<colorEleArr.length;i++){
    //     if(colorEleArr[i][0] === isPositioned[0]){
    //         console.log("removing");
    //         colorEleArr.splice(i);
    //         colorArr.splice(i);
    //         break;
    //     }
    // }
    colorEleArr.push(isPositioned);

    // let randomColor = Math.floor(Math.random()*16777215).toString(16);

    function getRandomColor() {
        var letters = '45789ABCD'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * letters.length)];
        }
        return color;
    }

    // let i1=0;
    // while(i1 !== 6-randomColor.length){
    //     color += "0";
    //     i1++;
    // }

    // color += randomColor;

    colorArr.push(getRandomColor());

    // console.log("colorEleArr " + colorEleArr.toString);
    // console.log("ispositioned" + isPositioned);

    update(arr, -1, -1, -1, -1, -1, -1, -1, [], [], colorEleArr, colorArr);
    // await new Promise(done => setTimeout(() => done(), speed));
}

export default MergeSort;