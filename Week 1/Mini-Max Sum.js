function miniMaxSum(arr) {
    // Write your code here
    const assArr = arr.sort();
    let min = 0;
    let max = 0;
    let i =0;
    while (i < arr.length -1) {
        min += assArr[i];
        max += assArr[i+1];
        i +=1;
    }
    console.log(min, max);
}