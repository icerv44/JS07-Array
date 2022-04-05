let alphabets = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
// expected result: ['a', 'b', 'c', 'e', 'd']
let tmp = [];

let checkDuplicate = (arr) => {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (tmp.indexOf(arr[i]) === -1) {
      tmp.push(arr[i]);
    }
  }
};

checkDuplicate(alphabets);

console.log(tmp);
