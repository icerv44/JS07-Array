const alphabets = ["a", "b", "a", "c", "a", "d"];
let tmpArr = [];

let calAlpha = alphabets.forEach((element, index, arr) => {
  if (alphabets[index] === "a") {
    console.log(element);
    tmpArr.push(index);
  }
});

console.log(tmpArr);
