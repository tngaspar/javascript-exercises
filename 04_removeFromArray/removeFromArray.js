const removeFromArray = function(array, ...argsToRemove) {
    outputArray = []
    arrayIter: for (i = 0; i < array.length ; i++){
        for(arg of argsToRemove){
            if (array[i] === arg){
                continue arrayIter;
            }
        }
        outputArray.push(array[i])
    }
    return outputArray;
};


// Do not edit below this line
module.exports = removeFromArray;