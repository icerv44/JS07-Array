const array = [1, 2, 30, 400];
// result: [2, 4, 60, 800]
let tmpArr = array.map((item) => item * 2);
console.log("result: " + tmpArr);

const array2 = [1, 2, 3, 4];
// result: ["1", "2", "3", "4"]
let tmpArr2 = array2.map((item) => item.toString());
console.log("result: " + tmpArr2);

const array3 = [1, "1", 2, {}];
// result: ["number", "string", "number", "object"]
let tmpArr3 = array3.map((item) => typeof item);
console.log("result: " + tmpArr3);

const array4 = ["apple", "banana", "orange"];
// result: ["APPLE", "BANANA", "ORANGE"]
let tmpArr4 = array4.map((item) => item.toUpperCase());
console.log("result: " + tmpArr4);

const array5 = [1, 3, 4, 5, 6, 7, 8];
// result: ["odd", "odd", "even", "odd", "even", "odd", "even"]
let tmpArr5 = array5.map((item) => {
  if (item % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
});
console.log("result: " + tmpArr5);

const array6 = [1, -3, 2, 8, -4, 5];
// result: [1, 3, 2, 8, 4, 5]
let tmpArr6 = array6.map((item) => {
  if (item < 0) {
    return item * -1;
  } else {
    return item;
  }
});

console.log("result: " + tmpArr6);

const array7 = [100, 200.25, 300.84, 400.3];
// result: ["100.00", "200.25", "300.84", "400.30"]
let tmpArr7 = array7.map((item) => item.toFixed(2));
console.log(tmpArr7);

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const array8 = [0, 5, 10, 7, 6, 5, 0];
// result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]
let tmpArr8 = array8.map((item) => month[item].substring(0, 3));
console.log(tmpArr8);

const array9 = [1, 16, 81, 256, 625, 1296];
// result: [1, 2, 3, 4, 5, 6]
let tmpArr9 = array9.map((item) => Math.sqrt(Math.sqrt(item)));
console.log(tmpArr9);

const array10 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
];
// result: ["apple", "banana", "watermelon"]
let tmpArr10 = array10.map((item) => item.name);
console.log(tmpArr10);

const array11 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
];
// result: [14, 18, 32]
let tmpArr11 = array11.map((item) => item.age);
console.log(tmpArr11);

const array12 = [
  { name: "apple", surname: "London" },
  { name: "banana", surname: "Bangkok" },
  { name: "watermelon", surname: "Singapore" },
];
// result: ["apple London", "banana Bangkok", "watermelon Singapore"]
let tmpArr12 = array12.map((item) => item.name + " " + item.surname);
console.log(tmpArr12);

const array13 = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-01" },
  { name: "watermelon", birth: "1985-12-01" },
];
let currentYear = new Date().getFullYear();
// result: [
//   { name: "apple", birth: "2000-01-01", age: 21 },
//   { name: "banana", birth: "1990-10-01", age: 31 },
//   { name: "watermelon", birth: "1985-12-01", age: 36 },
// ]
let tmpArr13 = array13.map((item) => {
  item.age =
    Number(new Date().getFullYear()) - Number(item.birth.substring(0, 4));
});
console.log(array13);

const array14 = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-10" },
  { name: "watermelon", birth: "1985-12-30" },
];
// result: [
//     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
//     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
//     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// ]
const month2 = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let tmpArr14 = array14.map((item) => {
  let strDate = new Date(item.birth);
  return (
    "<tr><td>" +
    item.name +
    "</td><td>" +
    strDate.getDay() +
    " " +
    month2[Number(strDate.getMonth())].substring(0, 3) +
    " " +
    strDate.getFullYear() +
    "</td></tr>"
  );
});
console.log(tmpArr14);
