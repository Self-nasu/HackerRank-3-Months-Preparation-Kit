function plusMinus(arr) {
    // Write your code here
    let positive  = 0;
    let zeros = 0;
    let negative = 0;
    
    for (let x in arr) {
        if (arr[x] < 0) negative += 1;
        if (arr[x] == 0) zeros += 1;
        if (arr[x] > 0) positive += 1;
    }
    
    let Pos_ratio = positive / arr.length;
    let Neg_ratio = negative / arr.length;
    let zero_ratio = zeros / arr.length;
    
    console.log(Pos_ratio.toPrecision(6));
    console.log(Neg_ratio.toPrecision(6));
    console.log(zero_ratio.toPrecision(6));
    
}