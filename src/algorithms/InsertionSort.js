
async function InsertionSort(arr, update, speed, setIsSorted, setInProgress){
    
   for(let i=0;i< arr.length-1;i++){
        for(let j=i+1;j>0;j--){
            if(arr[j-1]>arr[j]){
                update(arr, j-1, j, true);
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
                await new Promise(done => setTimeout(() => done(), speed));
                update(arr, j-1, j, false);
            }
            else{
                await new Promise(done => setTimeout(() => done(), speed));
                update(arr, j-1, j, false);
                break;
            }
        }
   } 
    update(arr, -1, -1, false);
    setIsSorted(true);
    setInProgress(false);

}

export default InsertionSort;