let names = ["Jack", "John", "Bill", "John", "Rick", "Bill", "John"];
// expected result: {Jack: 1, John: 3, Bill: 2, Rick: 1}

let unDuplicate = [];
let result = [];

let checkDuplicate = (arr) => {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (unDuplicate.indexOf(arr[i]) === -1) {
      unDuplicate.push(arr[i]);
    }
  }

  for (let i = 0; i <= unDuplicate.length - 1; i++) {
    let countR = 0;
    for (let i = 0; i <= names.length - 1; i++) {
      if (unDuplicate[i] === names[i]) {
        console.log(unDuplicate[i] + "   " + names[i]);
        countR++;
      }
    }
    console.log(countR);
    // unDuplicate[i].countL = countR;
  }
};

checkDuplicate(names);

console.log(unDuplicate);

// let a = names.foreach((element) => {
//     if (unDuplicate.indexOf(element) === -1) {
//       unDuplicate.push(element);
//     }
//   });

//   let b = unDuplicate.foreach((element, index) => {
//     let countR = 0;
//     for (let i = 0; i <= names.length; i++) {
//       if (element === names[i]) {
//         countR++;
//       }
//     }
//     unDuplicate[index].count = countR;
//   });
