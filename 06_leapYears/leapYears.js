const leapYears = function(year) {
    // leap years are divisible by 4, except century years which are divisible by 400 only.
    // if % 4 = 0, then leap year.
    // if year has 00 at the end, (if % 100 = 0) then if % 400 = 0 is leap year
    if (year % 100 == 0 && year % 400 == 0) {
        return true;
    } else if (year % 100 != 0 && year % 4 == 0) {
        return true;
    } else {
        return false;
    }

    
};




// Do not edit below this line
module.exports = leapYears;
