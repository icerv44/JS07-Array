const arr = [2, 3, 5, 7, 11];
let tmpArr = [];
let squareArr = (arr) => {
  arr.forEach((element) => {
    let num = Math.pow(Number(element), 2);
    tmpArr.push(num);
  });
  console.log("New Array : " + tmpArr);
};

let squareArr2 = arr.forEach((element, index, arr) => {
  arr[index] = Math.pow(Number(element), 2);
});

//squareArr(arr);

console.log(arr);
