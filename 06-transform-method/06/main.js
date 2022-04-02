let copySorted = (arra) => {
  let tmparr = arra.slice();
  tmparr.sort();
  return tmparr;
};

let arr = ["React", "Vue", "Angular"];
let sorted = copySorted(arr);

console.log(sorted); // Angular, React, Vue
console.log(arr); // React, Vue, Angular (no changes)
