const arr = [-3, 2, 0, -7, 4, 6];
let compareNumber = (a, b) => {
  if (a > b) return 1;
  if (a === b) return 0;
  if (a < b) return -1;
};
let arr2 = arr.map((item) => Math.pow(item, 2));
arr2.sort(compareNumber);
arr2.reverse;
console.log(arr2);
