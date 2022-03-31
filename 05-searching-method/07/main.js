const tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];

let updateTask = (id, newName) => {
  tasks.forEach((element, index, arr) => {
    if (Number(element.id) === Number(id)) {
      tasks[index].name = newName;
    }
  });
};
updateTask(2, "Travelling");
console.log(tasks);
