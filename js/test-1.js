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