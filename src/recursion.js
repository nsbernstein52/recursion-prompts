/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(num) {
  // I: num
  // O: factorial = num! x (num-1) x (num-2) ... x 1
  //   0! := 1
  //   if num !== positive integer, => null
  // assumptions: none

  // verify: n is NOT an integer, return that num is not an integer
  if (!Number.isInteger(num) || num <0) {
    // return (num + " is not a positive integer");
    return null

  // if n < 0, return -1
  } else if (num < 0) {
      return -1

  // if n === 0, return 0
  } else if (num === 0) {
      return 1
  // if n >= 1
  } else {
      return num * (factorial(num -1 ))
  }
};

  // factorial: test data and calls
  let num = "";
  num = "abc"; // string
  console.log("abc=>NaPI: ", factorial(num));
  
  num = -2; // negative 
  console.log("-2=>NaPI: ", factorial(num));
  
  num = 1.5
  console.log("1.5=>NaPI: ", factorial(num));
  
  num = 0;
  console.log("0+>1: ", factorial(num));
  
  num = 5;
  console.log("5=> 120: ", factorial(num));
  
// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  // I: array: array of integers
  // O: sum of all elements
  // assumptions:
  //   Integers
  //   Do not mutate input array

  // make value copy of array to avoid mutating array
  let tempArr = array.slice();
 if (tempArr.length === 0) {
    return 0;
 } else if (tempArr.length === 1) {
    return tempArr[0];
  } else {
    return tempArr.shift() + sum(tempArr);
  }
};

// sum of array of integers: data and tests
let arr = [];
console.log("[]=>0: ", sum(arr));

arr = [1, 2, 3, 4, 5, 6];
console.log("[1,2,..,6]=>:21: ", sum(arr));

arr = [-1, 2, -3, 4, -5, 6];
console.log("[-1, 2, -3, 4, -5, 6]=>:3: ", sum(arr));

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
// function arraySum(array) {
  // I: array: array of integers
  // O: sum of all elements
  // assumptions:
  //   Integers
  //   Do not mutate input array
  
  if (array.length === 0) {
    return 0;
  } else if (array.length > 0) {
    return arraySum(array[0]) + arraySum(array.slice(1));
  } else {
    return array;
  } 
};

// arraySum: sum of nested array of integers: data and tests
// let arr = [];
// console.log("[]=>0: ", arraySum(arr));

// arr = [1,[2,3],[[4]],5];
// console.log("[1,[2,3],[[4]],5]=>15: ", arraySum(arr));

// arr = [1, 2, 3, 4, 5, 6];
// console.log("[1,2,..,6]=>:21: ", arraySum(arr));

// arr = [-1, 2, -3, 4, -5, 6];
// console.log("[-1, 2, -3, 4, -5, 6]=>:3: ", arraySum(arr));

// 4. Check if a number is even.
var isEven = function(n) {
    if (n < 0) {
        n = -n;
    }
    if (n === 0) return true;
    else if (n === 1) return false;
    else return isEven(n - 2)    
};
// isEven: data and tests
let n = 0;
console.log("0=>t: ", isEven(n));
n = 6
console.log("6=>t: ", isEven(n));
n = -4
console.log("-4=>t: ", isEven(n));
n = 3
console.log("3=>f: ", isEven(n));
n = -5
console.log("-5=>f: ", isEven(n));

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n === 1 || n === 0) {
    return 0
  } else if (n < 1) {
    return n + 1 + sumBelow(n + 1)
  } else {
    return n - 1 + sumBelow(n - 1)
  }
};
// sumBelow: data and tests
// let n = 1;
// console.log("1=>0: ", sumBelow(n));
// n = 4;
// console.log("4=>10: ", sumBelow(n));
// n = 0;
// console.log("0=>0: ", sumBelow(n));
// n = -3;
// console.log("-3=>-3: ", sumBelow(n));

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(num1, num2) {
  if (Math.abs(num2 - num1) < 2) {
    return [];
  } else if ((num2 - num1) === 2) {
    return [num1 + 1];
  } else if ((num1 - num2) === 2) {
    return [num2 + 1];
  } else if (num1 < num2) { 
    let rangeArr = range(num1, num2 - 1);
    rangeArr.push(num2 - 1);
    return rangeArr;
  } else { // num1 > num2
    let rangeArr = range(num1, num2 + 1);
    rangeArr.push(num2 + 1);
    return rangeArr;
  }
};
// range: data and tests
let x = 2;
let y = 3;
console.log("2,3: ", range(x, y));
x = 2;
y = 3;
console.log("2,3: ", range(x, y));
x = 2;
y = 4;
console.log("2,4: ", range(x, y));
x = 4;
y = 2;
console.log("4,2: ", range(x, y));
x = 2;
y = 9;
console.log("2,9: ", range(x, y));
x = -5;
y = -1;
console.log("-5,-1: ", range(x, y));
x = 9;
y = 2;
console.log("9,2: ", range(x, y));

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (!Number.isInteger(exp)) {
    return "Not an integer"
  } else if (exp === 0 ) {
    return 1
  } else if (exp > 0) {
    return base * exponent(base, exp - 1)
  } else if (exp < 0) {
    return 1 / exponent(base, (exp * (-1)))
  }    
};
// exponent: data and tests
let base = 2;
let exp = 0;
console.log("2,0=>1: ", exponent(base,exp));
base = 3;
exp = 1;
console.log("3,1=>3: ", exponent(base,exp));
base = 2;
exp = 8;
console.log("2,8=>256: ", exponent(base,exp));
base = 8;
exp = 2;
console.log("8,2=>64: ", exponent(base,exp));
base = 10;
exp = -2;
console.log("10,-2=>0.01: ", exponent(base,exp));

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n <= 0) {
    // base case 0: false
      return false
    } else if (n === 1) {
    // base case 1: true
      return true;
    // base case 1: true
    } else if (n > 0 && n < 1 && 1/n % 2 !== 0) {
    // base case: fraction not a power of 2
      return false;
    } else if (n < 1) {
    // recursive case, n is negative
      return powerOfTwo(n * 2)
    } else if (n > 1) {
    // recursive case, n is positive
      return powerOfTwo(n / 2)
    }
};
/*// powerOfTwo recursive: data & tests
var num = 4;
console.log("4=>true: ", powerOfTwo(num));
num = 1;
console.log("1=>true: ", powerOfTwo(num));
num = 1/2;
console.log("1/2=>true: ", powerOfTwo(num));
num = 1/16;
console.log("1/16=>true: ", powerOfTwo(num));
num = 0;
console.log("0=>false: ", powerOfTwo(num));
num = -6;
console.log("-6=>false: ", powerOfTwo(num));
num = 5;
console.log("5=>false: ", powerOfTwo(num));
num = 1/5;
console.log("1/5=>false: ", powerOfTwo(num)); 
*/

// 9. Write a function that reverses a string.
var reverse = function(string) {
  if (string.length === 0) {
    return "";
  } else {
    let nextChar = string.charAt(string.length - 1);
    let shorterStr = string.slice(0, string.length-1)
    return (nextChar + reverse(shorterStr))
  }
};
// reverse(string): data and tests
let str = "";
console.log('"": ', reverse(str));
str = "abc";
console.log('"abc": ', reverse(str));

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
