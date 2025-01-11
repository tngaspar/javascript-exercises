const sumAll = function(firstNum, lastNum) {
    if (firstNum < 0 || lastNum < 0) 
        return 'ERROR';
    if (firstNum !== Math.floor(firstNum) || lastNum !== Math.floor(lastNum))
        return 'ERROR';
    if (typeof firstNum !== 'number' || typeof lastNum !== 'number') 
        return 'ERROR'

    lowestNum = Math.min(firstNum, lastNum);
    highestNum = Math.max(firstNum, lastNum);

    sum = 0;    
    for (let i = lowestNum; i <= highestNum; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
