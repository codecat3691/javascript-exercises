const sumAll = function(iniNum, finNum) {


    // Takes 2 integers, returns the sum of every number between, including them.


    console.log("The Initial Number is:", iniNum);

    console.log("The Final Number is:", finNum);


    if (iniNum < 0 || finNum < 0) {
        
        return 'ERROR';

        // No negative Numbers
    }

    else if (typeof iniNum !== "number" || typeof finNum !== "number") {
        
        return 'ERROR';

        // Only Numbers, not any other type
    }
    
    else if(iniNum > finNum){
        
        let storeIni = iniNum;
        iniNum = finNum;
        finNum = storeIni;

        // This just changes initial to final and vice versa
        // if initial is greater than final
        
    }

    let completeSum = iniNum;
    let addByOne = iniNum;

    for (let index = iniNum; index < finNum; index++) {

        addByOne+=1;

        completeSum+=addByOne;

        //  Times |  addByOne |  completeSum
        //    1          1            1
        //    2          2            3
        //    3          3            6
        //    4          4            10
    

        // This is just adding with a for loop
    }

    console.log("The Complete Sum is:", completeSum);

    return completeSum;

    // Returns the sum of every number between them and including them.

};

sumAll(1, 4);

// npm test sumAll.spec.js -- --watch

// Do not edit below this line
module.exports = sumAll;
