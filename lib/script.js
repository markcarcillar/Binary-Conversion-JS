class BinaryToDecimal{
  constructor(binary) {
    if (!BinaryToDecimal.isBinary(binary)) {
      throw 'This value is not binary. Make sure it only contains 0 or 1 and not start with 0.';
    }

    this.binary = binary;
    this.decimal = this.getDecimal();
  }

  static isBinary(binary) {
    const notBinaryPattern = new RegExp('[^01]');
    binary += ''; // Converts binary param to string

    if (notBinaryPattern.test(binary)) {
      return false;
    }
    if (binary.startsWith('0')) {
      return false;
    }
    return true;
  }

  static baseOf(bits) {
    return 2 ** (bits - 1);
  }

  getDecimal() {
    // Declared variables
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

module.exports.BinaryToDecimal = BinaryToDecimal;