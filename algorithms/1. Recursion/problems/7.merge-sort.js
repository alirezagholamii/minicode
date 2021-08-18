'use strict'

function mergeSort(arr, start, end) {
    if (start < end) {
        const mid = Math.trunc((start + end) / 2)
        mergeSort(arr, start, mid)
        mergeSort(arr, mid + 1, end)
        merge(arr, start, mid, end)
    }
}
function merge(arr, start, mid, end) {
    const result = [];
    let i = start;
    let j = mid + 1;
    let k = 0;

    while (i <= mid && j <= end) {
        if (arr[i] <= arr[j]) {
            result[k] = arr[i];
            i++;
            k++;
        } else {
            result[k] = arr[j];
            j++;
            k++
        }
    }

    // add the rest
    while (i <= mid) {
        result[k] = arr[i];
        i++;
        k++
    }
    while (j <= end) {
        result[k] = arr[j];
        j++;
        k++;
    }
    // mutate original arr
    for (let index = start; index <= end; index++) {
        arr[index] = result[index - start]
    }


}

const someArray = [7,8,1,-5,-9,-1,0,12,1];
mergeSort(someArray,0,someArray.length-1);
console.log(someArray);

