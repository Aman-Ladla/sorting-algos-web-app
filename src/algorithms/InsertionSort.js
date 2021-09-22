
async function InsertionSort(arr, update, speed, setIsSorted, setInProgress){
    
   for(let i=1;i< arr.length;i++){
       let value = arr[i];
       let j = i-1;
       await new Promise(done => setTimeout(() => done(), speed));
       update(arr,i,-1,false,false);
        while(j>=0 && arr[j] > value){
            arr[j+1] = arr[j];
            arr[j] = value;
            //await new Promise(done => setTimeout(() => done(), speed));
            update(arr,j,j+1,true,false);
            j--;  
            console.log(arr);
        }
        arr[j+1] = value;
        console.log(arr);
   } 
    update(arr, -1, -1, false);
    setIsSorted(true);
    setInProgress(false);
    console.log(arr);

}

export default InsertionSort;