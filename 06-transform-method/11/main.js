let str = "I live in Thailand";
// expected result: {i: 4, l: 2, v: 1, e:1, n: 2, t: 1, h:1, a:2, d:1}
let tmp = [];

for (let i = 0; i <= str.length; i++) {
  if (str.substring(i, i + 1) !== " ") {
    tmp.push(str.substring(i, i + 1));
  }
}

console.log(tmp);

let countString = tmp.reduce(function (preValue, curValue) {
  if (curValue in preValue) {
    preValue[curValue]++;
  } else {
    preValue[curValue] = 1;
  }
  return preValue;
}, {});

console.log(countString);
