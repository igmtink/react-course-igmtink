// !Array Map Function
// It's like an a for loop we got all the value of array and multiply each value by 2 and re-assign all new value in new array
const numberArray = [1, 2, 3];
const multipliedNumberArray = numberArray.map((num) => {
  return num * 2;
});

console.log(numberArray, multipliedNumberArray);
// !Output: [1, 2, 3] [2, 4, 6]
