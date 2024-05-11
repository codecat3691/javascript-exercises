const repeatString = function(text, num) {  // Added attributes, text and num

    // Write a function that simply repeats the string a given number of times.

    // Added all of this code
    if(num < 0) {
        return text = "ERROR";
    }

    let finalText = "";

    for (let index = 0; index < num; index++) {
        
        finalText+=text;

        // This just adds the text they input with number of times
        // To an empty string finalText.
    }

    return finalText;
    // All of this code
};

// Do not edit below this line
module.exports = repeatString;
