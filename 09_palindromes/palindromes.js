const palindromes = function (str) {
    var re = /[^A-Za-z]/g;      // regex to filter for only letters
    str = str.toLowerCase().replace(re, '');    // convert str to all the same for == , remove filtered by regex
    var len = str.length;       
    for (var i = 0; i < len/2; i++) {       // every string in a palindrome is flipped across a midpoint compare letters until
                                            // the midpoint is reached
      
        if (str[i] !== str[len - 1 - i]) {  // check the letters outside in if any of them don't match, evaluate false
          return false;
        }
    }
    return true;
}
// Do not edit below this line
module.exports = palindromes;
