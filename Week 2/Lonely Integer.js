function lonelyinteger(a) {
    // Write your code here
    for (let i = 0; i < a.length; i++) {
        let lonley = true; 
        for (let j = 0; j < a.length; j++) {
            if (i != j && a[i] == a[j]) {
                lonley = false;
                break;
            }
        }
        if (lonley == true) {
            return a[i];
        }
    }
}