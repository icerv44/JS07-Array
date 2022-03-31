let flag = 0;
let NumArr = [];
let sum = 0;

const isValidNumber = (inp) => {
  if (inp === null || inp.trim() === "" || isNaN(inp)) return false;
  return true;
};

do {
  const input = prompt("Input number ");

  if (isValidNumber(input)) {
    flag = 1;
  } else {
    NumArr.push(input);
  }
} while (flag === 0);

NumArr.forEach((element) => {
  sum += Number(element);
});

console.log("Sum of array is " + sum);
