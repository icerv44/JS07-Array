let tmp = [];
let arr2 = [9, 5, 4, 7, 3, 8, 1];

let filterRange = (arr, a, b) => {
  arr.forEach((element, index) => {
    if (Number(element) <= b && Number(element) >= a) {
      tmp.push(element);
    }
  });
};

filterRange(arr2, 4, 7);

console.log(tmp);
