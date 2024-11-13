function diagonalDifference(arr) {
    // Write your code here
    let noOfRows = arr.length;
    let noOfClos = arr.length
    let leftDsum = 0;
    let rightDsum = 0;
    for (let i = 0 ; i < noOfRows; i++) {
        for (let j = 0; j < noOfClos; j ++) {
            if (i == j) {
                leftDsum += arr[i][j];
                rightDsum += arr[i].reverse()[j];
            }
        }
    } 
    
    let final = leftDsum - rightDsum;
    return Math.abs(final)
    
}