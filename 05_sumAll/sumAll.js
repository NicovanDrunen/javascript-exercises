const sumAll = function(firstNumber, secondNumber) {
    if (typeof firstNumber != "number" || typeof secondNumber != "number" || firstNumber < 0 || secondNumber < 0) {
        return "ERROR";
    }
    if (firstNumber > secondNumber) {
        let temp = firstNumber;
        firstNumber = secondNumber;
        secondNumber = temp;
    }
    let returnValue = 0;
    for (let i = firstNumber; i <= secondNumber; i++) {
        returnValue += i;
    }
    return returnValue;
};

// Do not edit below this line
module.exports = sumAll;
