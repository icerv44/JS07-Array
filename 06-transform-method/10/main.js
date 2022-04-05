let names = ["Jack", "John", "Bill", "John", "Rick", "Bill", "John"];
// expected result: {Jack: 1, John: 3, Bill: 2, Rick: 1}

let countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++;
  } else {
    allNames[name] = 1;
  }
  return allNames;
}, {});

console.log(countedNames);

// let unDuplicate = [];
// let result = [];

// let checkDuplicate = (arr) => {
//   for (let i = 0; i <= arr.length - 1; i++) {
//     if (unDuplicate.indexOf(arr[i]) === -1) {
//       unDuplicate.push(arr[i]);
//     }
//   }

//   for (let i = 0; i <= unDuplicate.length - 1; i++) {
//     let countR = 0;
//     for (let i = 0; i <= names.length - 1; i++) {
//       if (unDuplicate[i] === names[i]) {
//         console.log(unDuplicate[i] + "   " + names[i]);
//         countR++;
//       }
//     }
//     console.log(countR);
//     // unDuplicate[i].countL = countR;
//   }
// };

// checkDuplicate(names);

// console.log(unDuplicate);
