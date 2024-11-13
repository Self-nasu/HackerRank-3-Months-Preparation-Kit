function matchingStrings(strings, queries) {
    // Write your code here
    const myarr = [];
    
    for (let i in queries) {
        let count = 0;
        for (let x in strings) {
            if (queries[i] == strings[x]) {
                count +=1;
            }
        }
        myarr.push(count);
    }     
    
    return myarr

}