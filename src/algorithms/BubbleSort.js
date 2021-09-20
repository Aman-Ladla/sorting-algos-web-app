

async function BubbleSort(arr, update, speed) {

    let flag;

    for (let i = 1; i < arr.length; i++) {
        flag = false;
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                flag = true;
            }
            // setTimeout(function () {
            // }, 3000);
            update(arr);
            await new Promise(done => setTimeout(() => done(), speed));
        }
        if (!flag) {
            break;
        }
    }

    console.log("sorted array is " + arr);

}

export default BubbleSort;