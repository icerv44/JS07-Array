// const sales = [10, 300, 200, 100, 50, 30];

// const result = sales.forEach((element, index, array) => {
//   console.log("Element : " + element);
//   console.log("Index : " + index);
//   console.log("Array : " + array);
//   console.log("");
// });

let sum = 0;
let arr = [];

arr[0] = 0;
arr[1] = 1;
arr[2] = 1;
let calFibo = (num) => {
  for (let i = 3; i <= num; i++) {
    //arr[i] = Number(arr[i - 1] + 1);
    arr[i] = Number(arr[i - 1]) + Number(arr[i - 2]);
    arr.push(sum);
  }
};

calFibo(20);

console.log(arr);
