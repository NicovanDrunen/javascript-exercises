const reverseString = function(string) {
    const array = string.split("");
    let reverseString = '';
    array.forEach(letter => {
        reverseString = letter + reverseString;
    });
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
