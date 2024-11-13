function timeConversion(s) {
    // Write your code here
    let timepart = s.slice(s.length - 2, s.length);
    s = s.replace(timepart, "");
    const arr = s.split(/:/);



    if (timepart == "PM") {
        if (arr[0] == 12) {
            arr[0] = "12";
        } else {
            arr[0] = String(Number(arr[0]) + 12);
        }

    } else {
        if (arr[0] == 12) {
            arr[0] = "0";
        } else {
            arr[0] = String(Number(arr[0]));
        }
    }

    if (arr[0].length < 2) {
        arr[0] = "0" + arr[0];
    }

    let finaltime = arr[0] + ":" + arr[1] + ":" + arr[2];

    return finaltime;
}