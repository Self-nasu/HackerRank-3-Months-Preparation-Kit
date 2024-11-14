function countingSort(arr) {
    // Write your code here
    const frqArr = [];
    for (let i = 0; i < 100 ; i++) {
        frqArr.push(0);
    }
    for (let i = 0; i < arr.length; i++) {
        frqArr[arr[i]] += 1;
    }
    return frqArr;
}