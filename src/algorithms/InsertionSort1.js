
async function InsertionSort(arr, update, speed, setIsSorted, setInProgress){

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

    for(let i=1;i< arr.length;i++){
        let value = arr[i];
        let j = i-1;
        update(arr, -1, j+1, 1, 0, 1, false);
        await new Promise(done => setTimeout(() => done(), speed));
        while(j>=0 && arr[j] > value){
            update(arr, j, j+1, 0, 0, 0, true);
            await new Promise(done => setTimeout(() => done(), speed));
            arr[j+1] = arr[j];
            arr[j] = value;
            update(arr, -1, j, 1, 0, 0, false);
            j--;
        }
        arr[j+1] = value;
        update(arr, -1, j+1, 1, 1, 1, false);
        await new Promise(done => setTimeout(() => done(), speed));
        update(arr, -1, -1, -1, -1, -1, false);
        // await new Promise(done => setTimeout(() => done(), speed));
    }
    update(arr, -1, -1, -1, -1, -1, false);
    setIsSorted(true);
    setInProgress(false);
    console.log(arr);

}

export default InsertionSort;