function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let count = 0;
    const pairs = [];
    for (let i = 0; i < n; i++) {
        for (let j = 1; j < n; j++) {
            let minval = Math.min(ar[i],ar[j]);
            let maxval = Math.max(ar[i],ar[j]);
            let pair = [minval,maxval];
            if (i < j && (minval + maxval) % k == 0) {
                pairs.push(pair);
                count += 1;
                
            }
        }
    }
    
    console.log(pairs);
    
    return count
}