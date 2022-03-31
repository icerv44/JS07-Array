// const sales = [10, 300, 200, 100, 50, 30];

// const result = sales.forEach((element, index, array) => {
//   console.log("Element : " + element);
//   console.log("Index : " + index);
//   console.log("Array : " + array);
//   console.log("");
// });

let sum = 0;
let arr = [];

let calFibo = (num) => {
  for (let i = 0; i <= num; i++) {
    if (i === 0) {
      sum = 0;
    } else {
      sum = sum + i;
    }
    arr.push(sum);
  }
};

calFibo(20);

console.log(arr);
