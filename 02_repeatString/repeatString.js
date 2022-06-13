const repeatString = function(string, repeat) {
    concatString = ''
    if (repeat  < 0) {
        return 'ERROR'
    }
    for (i = 0; i < repeat; i++) {
        concatString += string
    }
    return concatString
};

// Do not edit below this line
module.exports = repeatString;
