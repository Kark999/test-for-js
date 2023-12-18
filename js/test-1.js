// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

// function reverseWords(str) {
//   //   let result = [];
//   //   let wordReversed;
//   //   let strArray = str.split(' ');
//   //   console.log(strArray);
//   //   for (const word of strArray) {
//   //     wordReversed = word.split('').reverse().join('');
//   //     result.push(wordReversed);
//   //   }
//   //   return result.join(' ');
//   return str
//     .split(' ')
//     .map(word => word.split('').reverse().join(''))
//     .join(' ');
// }

////////////////////////////////////////////////////////////////////////////////

// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

// function reverseWords(str) {
//   let str1 = str.split('').reverse().join('');
//   console.log(str1);
//   console.log(str1.split(' ').reverse().join(' '));
//   return str.split('').reverse().join('').split(' ').reverse().join(' ');
// }

// reverseWords('hello world');

////////////////////////////////////////////////////////////////////////////////////////////////////

// Пошук унікального елемента масива

// let array = [1, 1, 1, 3, 3, 2, 2, 5, 5, 9, 9, 1312, 1312, 100];

// function uniqueValue(array) {
//   return array.filter(item => array.indexOf(item) === array.lastIndexOf(item));
// }

// console.log(uniqueValue(array));

////////////////////////////////////////////////////////////////////////////////////////////////////

// https://www.codewars.com/kata/54edbc7200b811e956000556/

// function countSheeps(sheep) {
//   return sheep.filter(present => present === true).length;
// }

////////////////////////////////////////////////////////////////////////////////////////////////////

// https://www.codewars.com/kata/559590633066759614000063/

// function minMax(arr) {
//   return [Math.min(...arr), Math.max(...arr)];
// }

////////////////////////////////////////////////////////////////////////////////////////////////////

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// function count(string) {
//   let resultObj = {};

//   for (let i = 0; i < string.length; i++) {
//     let currentChar = string[i];
//     if (resultObj[currentChar] === undefined) {
//       resultObj[currentChar] = 1;
//     } else {
//       resultObj[currentChar]++;
//     }
//   }

//   return resultObj;
// }

// console.log(count('abbaaaccc'));
// console.log(count('AABBBACCCACACC'));

//===========================================================

// function changeEven(numbers, value) {
//   let result = [];

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       result.push(numbers[i] + value);
//     } else {
//       result.push(numbers[i]);
//     }
//   }

//   return result;
// }
// changeEven([2, 8, 3, 7, 4, 6], 10);
// console.log(result);

//===============================================================

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((total, time) => total + time, 0);

// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(totalPlayTime);
// console.log(averagePlayTime);

//=================================================================================
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// function fakeBin(x) {
//   return x
//     .split('')
//     .map(digit => (digit < '5' ? '0' : '1'))
//     .join('');
// }

// console.log(fakeBin('40293822847536190'));

//======================================================

// function oddOrEven(array) {
//   return array.reduce((sum, a) => sum + a, 0) % 2 ? 'odd' : 'even';
// }
// console.log(oddOrEven([1, 2, 3, 4, 5]));
//=================================================================

// String.prototype.toJadenCase = function () {
//   return this.split(' ')
//     .map(x => x[0].toUpperCase() + x.slice(1))
//     .join(' ');
// };
// console.log('hello world my name is Vasya'.toJadenCase());
//===========================================================================
// function getSum(a, b) {
//   if (a === b) {
//     return a;
//   }
//   const min = Math.min(a, b);
//   const max = Math.max(a, b);
//   let arr = [];
//   for (let i = min; i <= max; i++) {
//     arr.push(i);
//   }
//   return arr.reduce((sum, x) => sum + x, 0);
// }
// function getSum(a, b) {
//   if (a === b) {
//     return a;
//   }
//   let total = 0;
//   for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
//     total += i;
//   }
//   return total;
// }

// console.log(getSum(2, 5));
//===============================================================
// let x = 5;
// let y = 10;

// let temp;

// temp = x;
// x = y;
// y = temp;

// console.log('x=', x);
// console.log('y=', y);
// console.log(z);

// // =============================================================

// x = 10;
// y = 100;

// x = x + y;
// y = x - y;
// x = x - y;

// console.log('x=', x);
// console.log('y=', y);
//===================================================================
// function sumOfDifferences(arr) {
//   arr.sort((a, b) => b - a);
//   let result = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     result.push(arr[i] - arr[i + 1]);
//   }
//   return result.reduce((sum, a) => sum + a, 0);
// }
// console.log(sumOfDifferences([10, 5, 3, 1]));

// the best variant
// function sumOfDifferences(arr) {
//   return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
// }
//==========================================================================
// const sumOfDifferences = arr =>
//   arr
//     .sort((a, b) => b - a)
//     .reduce(
//       (acc, x, i, a) =>
//         arr.length > 1 ? (i + 1 < arr.length ? acc + x - a[i + 1] : acc) : 0,
//       0,
//     );
// console.log(sumOfDifferences([10, 3, 1]));
// console.log(sumOfDifferences([10, 7, 1]));
// console.log(sumOfDifferences([100, 17, 11]));
// console.log(sumOfDifferences([101, 7, 1]));
// console.log(sumOfDifferences([110, 7, 15]));
// console.log(sumOfDifferences([1, 79, 2]));
//===========================================================================
// function squareSum(numbers) {
//   return numbers.reduce((sum, elem) => sum + elem ** 2, 0);
// }
// console.log(squareSum([2, 3, 4, 5]));
// // squareSum([0, 3, 4, 5]);
//=========================================================================
// const number = function (busStops) {
//   return busStops.reduce((a, b) => a + b[0] - b[1], 0);
// };
//the best practice
// const number = busStops =>
//   busStops.reduce((rem, [on, off]) => rem + on - off, 0);

// console.log(
//   number([
//     [3, 0],
//     [9, 1],
//     [4, 10],
//     [12, 2],
//     [6, 1],
//     [7, 10],
//   ]),
// );
function addBinary(a, b) {
  return typeof (a + b).toString(2);
}
console.log(addBinary(5, 7));
