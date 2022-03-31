const names = ["Mike", "Sid", "Jack", "Bill"];
// 1. Mike
// 2. Sid
// 3. Jack
// 4. Bill

let showNames = names.forEach((element, index, arr) => {
  console.log(index + 1 + ". " + element);
});
