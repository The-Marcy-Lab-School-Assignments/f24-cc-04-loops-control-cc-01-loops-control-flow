//Write your solutions in this file, don't forget to test your functions.

// 1
const countFromOne = (num) => {
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
};

// 2
const countEveryOdd = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
};

// 3
const isNegative = (num) => {
  if (num < 0) {
    return true;
  }

  return false;
};

// 4
const betweenFiveAndTwenty = (num) => {
  if (num >= 5 && num <= 20) {
    return true;
  }

  return false;
};

// 5
const sumOfThreeAndFive = () => {
  let total = 0;

  for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0) {
      total += i;
    } else if (i % 5 === 0) {
      total += i;
    }
  }

  return total;
};

// 6
const isAllLowerCase = (str) => {
  if (str === str.toLowerCase()) {
    return true;
  }

  return false;
};

// BONUS
const countMultiplesOfFive = (arr) => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 5 == 0) {
      count++;
    }
  }

  return count;
};

// TESTS
// countFromOne(10);
// countEveryOdd(10);
// console.log(isNegative(3));         //returns false
// console.log(isNegative(-2));        //returns true
// console.log(isNegative(Math.PI));   //returns false
// console.log(betweenFiveAndTwenty(12)); // returns true
// console.log(betweenFiveAndTwenty(5)); // returns true
// console.log(betweenFiveAndTwenty(100)); // returns false
// console.log(sumOfThreeAndFive());
// console.log(isAllLowerCase('hello')); //returns true
// console.log(isAllLowerCase('seven eleven')); //returns true
// console.log(isAllLowerCase('Seven eleven has the best slushies')); //returns false
// console.log(countMultiplesOfFive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // returns 2
// console.log(countMultiplesOfFive([15, 23, 35, 45, 67])); // returns 3
// console.log(countMultiplesOfFive([2, 6, 14])); // returns 0
