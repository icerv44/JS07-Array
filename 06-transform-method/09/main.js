let arr = [3.24, 2.78, 3.86, 1.37, 0.52];
let compareNumber = (a, b) => {
  if (a > b) return 1;
  if (a === b) return 0;
  if (a < b) return -1;
};
arr.sort(compareNumber);
console.log(arr);

let min = arr[0];
let max = arr[arr.length - 1];

console.log("Max : " + max + "\nMin : " + min);
