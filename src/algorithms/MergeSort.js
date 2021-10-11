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
 */


async function MergeSort(arr, update, speed, setIsSorted, setInProgress){


    await mergeSort(arr, 0, arr.length-1, update, speed);

    // update(arr, -1, -1, -1, -1, -1, -1, -1, []);

    setIsSorted(true);
    setInProgress(false);

}


    async function mergeSort(arr,low,high, update, speed){

        if(low < high){
            let m = low + Math.floor((high - low)/2);

            await mergeSort(arr, low, m, update, speed);
            await mergeSort(arr, m+1, high, update, speed);

            await merge(arr,low, m, high, update, speed);
            await new Promise(done => setTimeout(() => done(), speed));

        }

    }

    async function merge(arr, low, mid, high, update, speed){

    let n1 = mid - low + 1;
    let n2 = high - mid;

    let isPositioned = [];
    let isPositionedTx = [];

    let left = [];
    let right = [];

    for (let i=0;i<n1;i++){
        left.push(arr[low+i]);
    }

    for(let i=0;i<n2;i++){
        right.push(arr[mid + i + 1]);
    }

    let i=0, j=0;

    let k = 0;

    let temp = [...arr]

    while(i<n1 && j<n2){
        if(left[i]<right[j]){
            // console.log("lefty form " + (k - i));
            update(temp, low, mid, k, i, j, 0, 0, isPositioned, isPositionedTx);
            await new Promise(done => setTimeout(() => done(), speed));
            arr[k + low] = left[i];
            isPositioned.push(low+i);
            isPositionedTx.push(k-i);
            // console.log("isPositioned post" + isPositioned);
            i++;
        }
        else{
            // console.log("righty form " + ((low + k) - (mid + j + 1)));
            update(temp, low, mid, k, i, j, 1, 0, isPositioned, isPositionedTx);
            await new Promise(done => setTimeout(() => done(), speed));
            arr[k + low] = right[j];
            isPositioned.push(mid+j+1);
            isPositionedTx.push((low + k) - (mid + j + 1));
            // console.log("isPositioned post" + isPositioned);
            j++;
        }
        k++;
    }

    while (i < n1) {
        // console.log("lefty form " + (k - i));
        update(temp, low, mid, k, i, j, 0, 0, isPositioned, isPositionedTx);
        await new Promise(done => setTimeout(() => done(), speed));
        arr[k + low] = left[i];
        isPositioned.push(low+i);
        isPositionedTx.push(k-i);
        // console.log("isPositioned post" + isPositioned);
        i++;
        k++;
    }

    while (j < n2) {
        // console.log("righty form " + ((low + k) - (mid + j + 1)));
        update(temp, low, mid, k, i, j, 1, 0, isPositioned, isPositionedTx);
        await new Promise(done => setTimeout(() => done(), speed));
        arr[k + low] = right[j];
        isPositioned.push(mid+j+1);
        isPositionedTx.push((low + k) - (mid + j + 1));
        // console.log("isPositioned post" + isPositioned);
        j++;
        k++;
    }

    update(temp, low, mid, k, i, j, -1, 1, isPositioned, isPositionedTx);
    await new Promise(done => setTimeout(() => done(), speed));

    update(arr, -1, -1, -1, -1, -1, -1, -1, [], []);
    // await new Promise(done => setTimeout(() => done(), speed));
}

export default MergeSort;