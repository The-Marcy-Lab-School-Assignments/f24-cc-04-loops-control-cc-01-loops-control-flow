# Code Challenge: Loops and Control Flow

## Instructions

1. Clone down this assignment to your `code-challenges' directory in VScode.
2. Code your solution using JavaScript in `index.js`.
3. **Be sure to run and test your code throughly!**
4. By the end of Code Challenge, **commit and push your changes up to Github**.
5. Using the browser, verify that your solution is in your remote repo on Github.

## Code Problems

1. Write a function named `countFromOne` that takes in an integer argument, and console.logs all the integers from 1 up to the given integer.
2. Write a function named `countEveryOdd` that takes in an integer argument, and console.logs all the *odd* integers from 1 up to the given integer, including the given integer.
    
    ```
    countEveryOdd(10) // logs 1 3 5 7 9
    
    ```
    
3. Write a function `isNegative` that takes in a number parameter and returns true if the number is a negative value and false if the number is a positive value.
    
    ```
    isNegative(3)         //returns false
    isNegative(-2)        //returns true
    isNegative(Math.PI)   //returns false
    
    ```
    
4. Write a function named `betweenFiveAndTwenty` that takes in an integer parameter, and checks whether a given integer is within 5 and 20. It returns `true` if it is and `false` if not.
    
    ```
    betweenFiveAndTwenty(12) // returns true
    betweenFiveAndTwenty(5) // returns true
    betweenFiveAndTwenty(100) // returns false
    
    ```
    
5. Write a function named `sumOfThreeOrFive` that returns the sum of all the multiples of 3 or multiples of 5 from 1 to 1000, exclusive.
    
    ```
    sumOfThreeAndFive() //returns 233168
    
    ```
    
6. Write a function named `isAllLowerCase` that takes in a string parameter, and returns true or false if the string consists of only lowercase letters.
    
    ```
    isAllLowerCase("hello") //returns true
    isAllLowerCase("seven eleven") //returns true
    isAllLowerCase("Seven eleven has the best slushies") //returns false
    
    ```
    

### Bonus(optional)

1. Write a function named `countMultiplesOfFive` that takes in an array of integers and returns the number of integers in the array that are multiples of five.
    
    ```
    countMultiplesOfFive([1,2,3,4,5,6,7,8,9,10]) // returns 2
    countMultiplesOfFive([15,23,35,45,67]) // returns 3
    countMultiplesOfFive([2,6,14]) // returns 0
    
    ```
