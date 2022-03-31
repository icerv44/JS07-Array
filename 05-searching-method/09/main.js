const array = [9, 17, 23, 5];
let tmpArr = array.filter((element) => Number(element) < 10);
console.log(tmpArr);

const array2 = [1, 2, 3, 4];
let tmpArr2 = array2.filter((element) => Number(element) % 2 === 1);
console.log(tmpArr2);

const array3 = [1, "1", 2, {}];
let tmpArr3 = array3.filter((element) => !isNaN(element));
console.log(tmpArr3);

const array4 = ["apple", "banana", "orange", "pineapple", "watermeon"];
let tmpArr4 = array4.filter((element, index) => array4[index].length > 6);
console.log(tmpArr4);

const array5 = [1, -3, 2, 8, -4, 5];
let tmpArr5 = array5.filter((element) => Number(element) >= 0);
console.log(tmpArr5);

const array6 = [1, 3, 4, 5, 6, 7, 8];
let tmpArr6 = array6.filter((element) => Number(element) % 3 === 0);
console.log(tmpArr6);

const array7 = ["Elephant", "Ant", "Cat", "Eagle", "Zebra"];
let tmpArr7 = array7.filter((element) => element.toString().startsWith("E"));
console.log(tmpArr7);

const array8 = ["APPLE", "oRanGE", "PEACH", "PaPAYA"];
let tmpArr8 = array8.filter((element) => element === element.toUpperCase());
console.log(tmpArr8);

const array9 = ["Krabi", "Chonburi", "Buriram", "Saraburi", "Phrae"];
let tmpArr9 = array9.filter((element) =>
  element.toLowerCase().includes("buri")
);
console.log(tmpArr9);
