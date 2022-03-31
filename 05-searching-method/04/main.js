const nums = [7, 9, -5, -1, 0, 3];
// expexted result: -5
const tmp = [];

let calNums = nums.forEach((element, index, arr) => {
  if (Number(nums[index]) < 0) {
    // console.log(nums[index]);
  }
});

let calNums2 = nums.find(function (element, index, arr) {
  if (Number(element) < 0) {
    // console.log(element);
  }
});

let calNums3 = nums.findIndex(function (element, index, arr) {
  if (Number(element) < 0) {
    tmp.push(element);
    // console.log(element);
  }
});

console.log(tmp[0]);
