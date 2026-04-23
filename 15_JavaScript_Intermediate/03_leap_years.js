// Check and Learn More About Leap Years: https://www.mathsisfun.com/leap-years.html

function isLeap(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                console.log("Leap year.");
            } else {
                console.log("Not leap year.");
            }
        } else {
            console.log("Leap year.");
        }
    } else {
        console.log("Not leap year.");
    }
}

isLeap(1948);
