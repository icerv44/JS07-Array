let fish = ["angel", "clown", "mandarin", "sturgeon"];
console.log(fish);

// let removeElement = fish.forEach((element, index, arr) => {
//   if (fish[index] === "fish") {
//     fish.slice(fish[index], 1);
//   }
// });

console.log(fish.slice(0, fish[fish.length - 1]));
