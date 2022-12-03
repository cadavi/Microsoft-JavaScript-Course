//converting Strings to Integers
let num1 = "150";
let flo1 = "1.50";

console.log("*****Converting Strings to Integers*****");
console.log(parseInt("100"));
console.log(parseInt(num1));
console.log(parseInt("ABC"));
console.log(parseInt("0xF")); //Hexadecimal number

//Converting Strings to Floats
console.log("*****Converting Strings to Floats*****");

console.log(parseFloat("1.00"));
console.log(parseFloat(flo1));
console.log(parseFloat("ABC"));

//More conversions examples
console.log("*****More Conversion Examples*****");
//Numbers after special characters are ignored.
console.log(parseInt("1.5"));
console.log(parseInt("1 + 1"));

//Using Template Literals
console.log(parseInt(`${1 + 1}`));

//Converting Numbers to Strings
console.log("*****Converting Numbers to Strings*****");
num1 = 150;
flo1 = 1.5;

console.log(num1.toString());
console.log(flo1.toString());
console.log((100).toString());
