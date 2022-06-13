const reverseString = function(string) {
    const stringArray = string.split("").reverse();
    let stringNew = ''
    for (i = 0; i < stringArray.length; i++) {
        stringNew += stringArray[i]
    }
    return stringNew
};

// Do not edit below this line
module.exports = reverseString;
