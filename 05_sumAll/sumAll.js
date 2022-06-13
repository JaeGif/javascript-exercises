const sumAll = function(lower, upper) {
    let sum = 0;
    if (Number.isInteger(lower) && Number.isInteger(upper)) {
        if (lower < upper) {
        let array = Array.from({length: upper}, (x, i) => i + lower);
        for (element in array) {
            sum += array[element]
        }
        } else if (lower > upper) {
            let array = Array.from({length: lower}, (x, i) => i + upper);
            for (element in array) {
                sum += array[element]
    }
    }

    } else {
        return 'ERROR'
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;