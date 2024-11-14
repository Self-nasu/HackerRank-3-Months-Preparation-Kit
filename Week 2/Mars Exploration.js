function marsExploration(s) {
    const myset = new Array();
    let changes = 0;
    
    for (let i = 0; i < s.length; i += 3) {
        let sosstr = "";
        let j = i;
        while (j < i + 3 && j < s.length) {
            sosstr += s[j];
            j += 1;
        }
        if (sosstr != "SOS") {
            let char1 = sosstr[0]
            let char2 = sosstr[1]
            let char3 = sosstr[2]
            if (char1 != "S") changes ++;
            if (char2 != "O") changes ++;
            if (char3 != "S") changes ++;
        }
        myset.push(sosstr); 
    }
    

    return changes
}