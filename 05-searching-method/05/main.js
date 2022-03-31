const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

let searchName = inventory.filter((item) => item.name === "cherries");

console.log(searchName);
