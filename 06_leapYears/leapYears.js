const leapYears = function(year) {

    // determines whether or not a given year is a leap year

    if (year%4 == 0) {
        
        if (year%100 !== 0 || year%400 == 0) {
            
            return true;
        }
        else {

            return false;
        }

    }
    else {

        return false;

    }

    // This is just asking the things commented below
    // It's not that difficult...

};

// Leap years are divisible by 4
// Divisible by 100 are not leap years
// Unless they are divisible by 400


// npm test leapYears.spec.js -- --watch


// Do not edit below this line
module.exports = leapYears;
