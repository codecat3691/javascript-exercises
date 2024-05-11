const removeFromArray = function(array, ...remove) {

    // Takes an array and some other arguments then removes them from that array

    // added attributes, ...remove is an array with multiple optional arguments.

    let completeArray=[];
    console.log("The empty array:", completeArray);

    // empty array = []
    
    // Empty array to push results into, for a return in the end.

    for (let i = 0; i < array.length; i++) {

        if (!remove.includes(array[i])){ 
            completeArray.push(array[i]) 
        }
    }

    // if the array index does not includes any of remove items...
    // push that index item into the empty completeArray

    console.log("The complete array with removed items:", completeArray);
    return completeArray; 

    // complete array = ['a', 'c', 'f']


};

removeFromArray(["a", "b", "c", "d", "f"], "d", "b"); // with this example

// npm test removeFromArray.spec.js -- --watch

// Do not edit below this line
module.exports = removeFromArray;
