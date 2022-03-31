const array = [29, 17, 13, 47, 23, 31];
let sum = 0;

let calArr = array.forEach((element, index, arr) => {
  sum += Number(element);
});

console.log("Sum : " + sum);
