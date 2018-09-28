// Given number, return whether valid or not
//   From rightmost digit, which is the check digit, double the value of every second digit
//   If the result of this doubling operation is greater than 9, add the digits of the product (or subtract 9)
//   Take the sum of all the digits
//   If the total modulo 10 is equal to 0, then the number is valid

// Check Digit
//   The check digit is obtained by computing the sum of the non-check digits then computing 9 times the value modulo 10


function luhnCheck(value) {
  if (typeof value === "number") {
    var toString = value.toString();
    var lastIndex = toString.length - 1;
    var testDigit = Number(toString.charAt(lastIndex));
    var digits = [];
    for (var i = 0; i < lastIndex; i++) {
      digits.push(Number(toString.charAt(i)));
    }

    //Double every second digit from end
    for (var j = lastIndex - 1; j >= 0; j -= 2) {
      digits[j] = digits[j] * 2;
      //Turn double digit numbers into single digit
      if (digits[j] > 9) {
        digits[j] = digits[j] - 9;
      }
    }

    //Sum digits and testDigit
    var sum = 0;
    for (var k = 0; k < digits.length; k++) {
      sum += digits[k];
    }
    sum += testDigit;

    return sum % 10 === 0;

  } else {
    return false;
  }
}

luhnCheck(2873498287);

module.exports = luhnCheck;