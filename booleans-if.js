// console.log('42' == 42) //true
// console.log('42' === 42) //false

// console.log('42' != 42) //false
// console.log('42' !== 42) //true

const status = 200;
if (status === 200) {
  console.log("OK!");
} else if (status === 4000) {
  console.log("Error!");
} else {
  console.log("Unknown status");
}

const message = status === 2000 ? "OK" : "Error";
console.log(message);
