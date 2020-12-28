# Binary Conversion - JS

### Table of contents
  - [Description](https://github.com/clediscover/Binary-Conversion-JS#description)
  - [Easy way for binary conversion](https://github.com/clediscover/Binary-Conversion-JS#here-is-an-easy-way-to-convert-binary-to-decimal-and-decimal-to-binary)
  - [How to use this JS library](https://github.com/clediscover/Binary-Conversion-JS#how-to-use)
    - [Conversion for binary to decimal](https://github.com/clediscover/Binary-Conversion-JS#steps-for-binary-to-decimal)
    - [Conversion for decimal to binary](https://github.com/clediscover/Binary-Conversion-JS#steps-for-decimal-to-binary)
  - [Complete example](https://github.com/clediscover/Binary-Conversion-JS#complete-example)

### Description
  - A javascript library that has a conversion for binary to decimal and decimal to binary number. Decimal value in decimal to binary converter should not exceed 999,999.
  - I am aware that there is an easy way to convert binary to decimal and decimal to binary. I made this because I want to enhance my skill in javascript.

### Here is an easy way to convert "Binary to Decimal" and "Decimal to Binary"
  #### Binary to Decimal
  ```javascript
  const binaryToDecimal = (binary) => {
    return parseInt(binary, 2).toString(10);
  }
  
  // Output: '43'
  binaryToDecimal('101011');
  ```

  #### Decimal to Binary
  ```javascript
  const decimalToBinary = (decimal) => {
    return (decimal >>> 0).toString(2);
  }
  
  // Output: '101011'
  decimalToBinary(43);
  ```

### How to use
  #### Steps for Binary to Decimal
  1. Import `BinaryToDecimal` class. Make sure you are on the same path as lib directory.
```javascript
const BinaryToDecimal = require('lib/script').BinaryToDecimal;
```
  2. Now use the `BinaryToDecimal` class. When using this make sure the value for its parameter is binary number. It accepts string or number data type. Such as **101010** and **'101010'**.
```javascript
new BinaryToDecimal(101010);
new BinaryToDecimal('101010');
```
  3. Try using `BinaryToDecimal` class with not a binary number.
```
Error: This value is not binary. Make sure it only contains 0 or 1 and not start with 0.
```
  4. Get the decimal value of binary number.
```javascript
const binary = new BinaryToDecimal(101010);
console.log(binary.decimal); // Use the decimal property
```

  #### Steps for Decimal to Binary
  1. Import `DecimalToBinary` class. Make sure you are on the same path of lib directory.
```javascript
const DecimalToBinary = require('lib/script').DecimalToBinary;
```
  2. Now use the `DecimalToBinary` class. When using this make sure the value for its parameter is decimal number. It accepts string or number data type. Such as **8672** and **'8672'**.
```javascript
new DecimalToBinary(8672);
new DecimalToBinary('8672');
```
  3. Try using `DecimalToBinary` class with not a decimal number.
```
Error: This value is not decimal. Make sure it only contains 0-9 and not start with 0.
```
  4. Try using `DecimalToBinary` class that exceeds 999,999 decimal.
```
Error: Value should not exceed 999,999 decimal!
```
  5. Get the binary value of decimal number.
```javascript
const decimal = new DecimalToBinary(8672);
console.log(decimal.binary); // Use the binary property
```

### Complete example
  ```javascript
    const BinaryToDecimal = require('lib/script').BinaryToDecimal;
    const DecimalToBinary = require('lib/script').DecimalToBinary;

    // Create an instance of BinaryToDecimal class
    const twoBitsBinary = new BinaryToDecimal('10');
    const fourBitsBinary = new BinaryToDecimal(1110);

    // Create an instance of DecimalToBinary class
    const twoDigitsDecimal = new DecimalToBinary(15);
    const fourDigitsDecimal = new DecimalToBinary(2_304);

    // Get the decimal value by using the decimal property
    console.log(twoBitsBinary.decimal);
    console.log(fourBitsBinary.decimal);

    // Get the binary value by using the binary property
    console.log(twoDigitsDecimal.binary);
    console.log(fourDigitsDecimal.binary);
  ```