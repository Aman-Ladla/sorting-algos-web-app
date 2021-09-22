
async function InsertionSort(arr, update, speed, setIsSorted, setInProgress){
    
   for(let i=1;i< arr.length;i++){
       let value = arr[i];
       let j = i-1;
       update(arr,i,-1,false,false);
       await new Promise(done => setTimeout(() => done(), speed));
        while(j>=0 && arr[j] > value){
            update(arr,j+1,-1,false,false);
            update(arr,j,j+1,true,false);
            await new Promise(done => setTimeout(() => done(), speed));
            arr[j+1] = arr[j];
            arr[j] = value;
            update(arr,j+1,-1,false,false);
            j--;  
        }
        arr[j+1] = value;
        update(arr,arr.indexOf(value),-1,false,false);
        update(arr,arr.indexOf(value),-1,false,true);
        await new Promise(done => setTimeout(() => done(), speed));
   } 
    update(arr, -1, -1, false);
    setIsSorted(true);
    setInProgress(false);
    console.log(arr);

}

export default InsertionSort;