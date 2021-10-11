let positionedIndexArr = [];

async function QuickSort(arr, low, high, update, speed, setIsSorted, setInProgress){
    await QuickSortImpl(arr, low, high, update, speed);
    positionedIndexArr = [];
    update(arr,-1,-1,-1,false,positionedIndexArr);
    setIsSorted(true);
    setInProgress(false);
}

async function QuickSortImpl(arr, low, high, update, speed){
    if(low < high){
        let index = await partition(arr, low, high, update, speed);
        await QuickSortImpl(arr, low, index-1, update, speed);
        positionedIndexArr.push(low);
        await QuickSortImpl(arr, index+1, high, update, speed);
        positionedIndexArr.push(index+1);
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
            console.log("Inside for loop ",i,j,arr[i],arr[j]);
            await new Promise(done => setTimeout(() => done(), speed));
            update(arr, i, j, high, true, positionedIndexArr);
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;   
            update(arr, i, j, high, false, positionedIndexArr);
        }
        else{
            await new Promise(done => setTimeout(() => done(), speed));
            update(arr, i+1, j, high, false, positionedIndexArr);
        }
    }
    positionedIndexArr.push(i+1);
    console.log("Outside For loop ",i,high,arr[i+1],arr[high]);
    await new Promise(done => setTimeout(() => done(), speed));
    update(arr, i+1, high, i+1, true,positionedIndexArr);
    let temp = arr[i+1];
    arr[i+1] = arr[high];
    arr[high] = temp;
    await new Promise(done => setTimeout(() => done(), speed));
    update(arr, i+1, high, i+1, false, positionedIndexArr);
    return i+1;
}

export default QuickSort;