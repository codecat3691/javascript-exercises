const reverseString = function(text) {  // this was empty, added text

    // Added all this code with explanations.
    
    // Simple, write a function that returns its input, reversed.

    //Split the string
    let splitText = text.split("");
    console.log("Split equals to:", splitText);          
                                     
    // = ['h', 'e', 'l', 'l', 'o']
    // Puts the string into an empty array
    // Separates every letter into an index
    // From left to right.

    // Reverse the array formed
    let revText = splitText.reverse();
    console.log("Reverse equals to:", revText)

    // = ['o', 'l', 'l', 'e', 'h']
    // This just reverse the previous array


    // Join the array into a string
    let joinText = revText.join("");
    console.log("Join equals to:", joinText)

    // = olleh
    // joins all the indexes of the array together into an empty string
    // completing the exercise...

    // npm test reverseString.spec.js -- --watch
    // This will keep testing on runtime, exit with Q.

    return joinText;
};

reverseString("hello");

// Do not edit below this line
module.exports = reverseString;
