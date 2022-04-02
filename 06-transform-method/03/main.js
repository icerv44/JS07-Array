let compareNumber = (a, b) => {
  if (a > b) return 1;
  if (a === b) return 0;
  if (a < b) return -1;
};

const arr = [11, 17, 23, 13, 7, 19];

arr.sort(compareNumber);
console.log(arr);
