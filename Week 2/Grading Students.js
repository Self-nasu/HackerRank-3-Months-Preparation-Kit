function gradingStudents(grades) {
    // Write your code here
    const finalgrade = [];
    for (let i in grades) {
        let num = grades[i];
        let rounder = Math.ceil(num / 5) * 5;
        if (rounder < 40) {
            finalgrade.push(num); //no changes
        } else {
            if ((rounder - num) < 3) {
                finalgrade.push(rounder);
            }
            if ((rounder - num) >= 3) {
                finalgrade.push(num);
            }
        }
    }
    return finalgrade
}