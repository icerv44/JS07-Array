const tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];

let deleteTask = (id) => {
  tasks.forEach((element, index) => {
    if (Number(element.id) === id) {
      tasks.splice(tasks[index], 1);
    }
  });
};

deleteTask(1);

console.log(tasks);
