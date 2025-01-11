const repeatString = function(string, numberRepetitions) {
    if (numberRepetitions < 0) {
        return 'ERROR';
    }

    let repeatedString = '';
    
    for (let i =0; i < numberRepetitions; i ++){
        repeatedString += string;
    }

    return repeatedString;
};

// console.log(repeatString('hey',4))

// Do not edit below this line
module.exports = repeatString;
