function breakingRecords(scores) {
    let minval = scores[0];
    let maxval = scores[0];

    let breakmost = 0;
    let breakleast = 0;
    
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > maxval) {
            maxval = scores[i]; 
            breakmost++;          
        } else if (scores[i] < minval) {
            minval = scores[i];   
            breakleast++;         
        }
    }

    return [breakmost, breakleast];
}