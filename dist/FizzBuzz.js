"use strict";
let result = "";
for (let i = 1; i <= 100; i++) {
    if (i > 1) {
        result += "";
    }
    if (i % 15 === 0) {
        result += "FizzBUzz";
    }
    else if (i % 3 === 0) {
        result += "Fizz";
    }
    else if (i % 5 === 0) {
        result += "Buzz";
    }
    else {
        result += i;
    }
}
console.log(result);
