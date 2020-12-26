# Binary Conversion - JS

### Description
  - A javascript library that has a conversion for binary to decimal number.

### How to use
  1. Import `BinaryToDecimal` class. Make sure you are on the same path of lib directory.
```javascript
import {BinaryToDecimal} from "lib/script";
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

### Complete code example
  ```javascript
    import {BinaryToDecimal} from "lib/script";

    // Create an instance of BinaryToDecimal class
    const twoBitsBinary = new BinaryToDecimal('10');
    const fourBitsBinary = new BinaryToDecimal(1110);
    const eightBitsBinary = new BinaryToDecimal(11101110);
    const sixteenBitsBinary = new BinaryToDecimal(1110111011101110);

    // Get the decimal value by using the decimal property
    console.log(twoBitsBinary.decimal);
    console.log(fourBitsBinary.decimal);
    console.log(eightBitsBinary.decimal);
    console.log(sixteenBitsBinary.decimal);
  ```