

async function BubbleSort(arr, update, speed) {

    let flag;

    let flag1;

    for (let i = 1; i < arr.length; i++) {
        flag = false;
        for (let j = 0; j < arr.length - i; j++) {
            flag1 = false;
            if (arr[j] > arr[j + 1]) {
                update(arr, j, j+1, true);
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                flag = true;
                flag1 = true;
            }
            await new Promise(done => setTimeout(() => done(), speed));
            update(arr, -1, -1, false);
        }
        if (!flag) {
            break;
        }
    }

    console.log("sorted array is " + arr);

}

export default BubbleSort;