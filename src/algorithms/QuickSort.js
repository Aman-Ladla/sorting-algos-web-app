let positionedIndexArr = [];

async function QuickSort(arr, low, high, update, speed, setIsSorted, setInProgress){
    await QuickSortImpl(arr, low, high, update, speed);
    positionedIndexArr = [];
    await new Promise(done => setTimeout(() => done(), speed));
    update(arr,-1,-1,false,-1,positionedIndexArr);
    setIsSorted(true);
    setInProgress(false);
}

async function QuickSortImpl(arr, low, high, update, speed){
    if(low < high){
        let index = await partition(arr, low, high, update, speed);
        await QuickSortImpl(arr, low, index-1, update, speed);
        await QuickSortImpl(arr, index+1, high, update, speed);
    }
}

async function partition(arr, low, high, update, speed){
    let pivot = arr[high];    //element that goes to desired position
    let i = low-1;
    await new Promise(done => setTimeout(() => done(), speed));
    update(arr, -1, -1, high ,false, positionedIndexArr);
    for(let j = low; j <= high-1; j++){
        if(arr[j] <= pivot){
            i++;
            await new Promise(done => setTimeout(() => done(), speed));
            update(arr, i, j, high, true, positionedIndexArr);
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            
        }
    }
    positionedIndexArr.push(i+1);
    await new Promise(done => setTimeout(() => done(), speed));
    update(arr, i+1, high, i+1, true,positionedIndexArr);
    let temp = arr[i+1];
    arr[i+1] = arr[high];
    arr[high] = temp;
    await new Promise(done => setTimeout(() => done(), speed));
    update(arr,-1,-1,-1,false,positionedIndexArr);
    return i+1;
}

export default QuickSort;