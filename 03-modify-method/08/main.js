const person = ["John", "Jay", "Jim", "Jame"];

let indexJay = person.indexOf("Jay");

person.splice(indexJay, 1);
person.splice(indexJay, 0, "Jack", "Jame");

console.log(person);
