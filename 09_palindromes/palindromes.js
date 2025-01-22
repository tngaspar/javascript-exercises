const palindromes = function (string) {
    // remove punctuation and spaces
    string = string.toLowerCase().replace(/[^a-z0-9]/g, '')
    
    for (let i=0; i < string.length / 2; i++){
        if(string[i] !== string[string.length -1 - i]) return false;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
