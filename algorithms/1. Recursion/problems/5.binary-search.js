'use strict'

function binarySearch(arr, left, right, x) {
    if (left > right) {
        return -1
    }

    const mid = Math.trunc((left + right) / 2)
    if (x === arr[mid]) {
        return mid
    }
    if (x < arr[mid]) {
        binarySearch(arr,left,mid-1,x)
    }

    return binarySearch(arr,mid+1,right,x)
}

console.log(binarySearch([0,1,2,3,4,5,6,7,8,9],0,10,5));
console.log(binarySearch([0,1,2,3,4,5,60,70,80,90],0,10,90));

