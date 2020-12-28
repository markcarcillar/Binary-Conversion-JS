class BinaryToDecimal{
  constructor(binary) {
    if (!BinaryToDecimal.isBinary(binary)) throw 'This value is not binary. Make sure it only contains 0 or 1 and not start with 0.';
    this.binary = binary;
    this.decimal = this.getDecimal();
  }

  static isBinary(binary) {
    const notBinaryPattern = new RegExp('[^01]');
    binary += '';

    if (notBinaryPattern.test(binary)) {
      return false;
    }
    return true;
  }

  static baseOf(bits) {
    return 2 ** (bits - 1);
  }

  getDecimal() {
    // Declare variables
    let binary = this.binary + '';
    let joinedBinary = '';
    let splitedBinary;
    let decimal = 0;
    let bits = 1;

    // Joined binary by comma (,) and split it by comma
    // Example: 10101 --> [1, 0, 1, 0, 1]
    for (let index = 0; index < binary.length; index++) {
      joinedBinary += binary[index] + ',';
    }
    splitedBinary = joinedBinary.split(',');
    splitedBinary = splitedBinary.slice(0, splitedBinary.length - 1);

    // Add the decimal value if the splitedBinary array has a value of 1
    // This will be base on its bits
    for (let index = splitedBinary.length - 1; index > -1; index--) {
      if (splitedBinary[index] === '1') {
        decimal += BinaryToDecimal.baseOf(bits);
      }
      bits++;
    }

    return decimal;
  }
}

class DecimalToBinary {
  constructor(decimal) {
    if (!DecimalToBinary.isDecimal(decimal)) throw 'This value is not decimal. Make sure it only contains 0-9 and not start with 0.';
    if (parseInt(decimal) > 999_999) throw 'Value should not exceed 999,999 decimal!';
    this.decimal = decimal;
    this.binary = this.getBinary();
  }

  static isDecimal(decimal) {
    const notDecimalPattern = new RegExp('[^0-9]');
    decimal += '';

    if (notDecimalPattern.test(decimal)) {
      return false;
    }
    if (decimal.startsWith('0')) {
      return false;
    }
    return true;
  }

  static getMaxBase(decimal) {
    // Returns max base and max base digit
    // For instance: 9 returns [8, 4]
    // First value is max base which is 1000 in binary
    // Second value is max base digit (See max base has 4 digits)
    let maxBase, maxBaseDigit;
    for (let index = 0; index < Number.MAX_VALUE; index++) {
      if (BinaryToDecimal.baseOf(index) > decimal) {
        maxBase = BinaryToDecimal.baseOf(index - 1);
        maxBaseDigit = index - 1;
        break;
      }
    }
    return [maxBase, maxBaseDigit];
  }

  static baseBinary(bits) {
    // Returns binary base on its base
    // For instance: 32 returns 100000
    // Using this function with a decimal that is not base of 2 gets
    // the max base and returns its binary
    // For instance: 17 returns 10000
    // 17 is not a base of 2
    // 10000 binary in decimal is 16 and this is the highest base of 2 that does not exceed 17
    let binary = '1', maxBaseDigits = DecimalToBinary.getMaxBase(bits)[1];
    for (let index = 1; index < maxBaseDigits; index++) {
      binary += '0';
    }
    return binary;
  }

  getBinary() {
    // Returns binary in string data type
    // Highest decimal can accept is 65,535 otherwise it will return inaccurate answer
    // For instance: 2304 returns 100100000000
    const binaryAsArray = [];
    let decimal = this.decimal, binary = 0, maxBase; 

    for (let index = 0; index < Number.MAX_VALUE; index++) {
      if (decimal === 0) {
        break;
      }
      maxBase = DecimalToBinary.getMaxBase(decimal)[0];
      binaryAsArray.push(DecimalToBinary.baseBinary(maxBase));
      decimal -= maxBase;
    }

    for (let index = binaryAsArray.length - 1; index > -1; index--) {
      binary += parseInt(binaryAsArray[index]);
    }

    if (binary > 9_007_199_254_740_991) return `Inaccurate: ${binary}`;

    return binary += '';
  }
}

module.exports.BinaryToDecimal = BinaryToDecimal;
module.exports.DecimalToBinary = DecimalToBinary;