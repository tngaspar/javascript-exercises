const fibonacci = function(n) {
    n = Number(n);
    if (n === 0) return 0;
    if (n < 0) return "OOPS";

    previousVal = 0;
    currentVal = 1;
    for (let i = 1; i < n; i++){
        aux = currentVal;
        currentVal += previousVal;
        previousVal = aux;
    }

    return currentVal;
};

// Do not edit below this line
module.exports = fibonacci;
