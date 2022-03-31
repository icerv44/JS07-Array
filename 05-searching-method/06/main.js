const tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];

let searchtasks = tasks.filter((item) => Number(item.id) === 2);

console.log(searchtasks.length);
