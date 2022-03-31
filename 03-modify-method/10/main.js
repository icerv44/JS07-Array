const cars = ["volvo", "toyota", "honda", "ford"];
let tmpCars = ["mazda", "bmw", "nissan"];
let indexCars = 0;

let calCars = cars.forEach((element, index, arr) => {
  if (cars[index] === "honda") {
    //cars.splice(cars[index], 0, tmpCars);
    indexCars = index;
  }
});

console.log(indexCars);
cars.splice(indexCars + 1, 0, "mazda", "bmw", "nissan");

//cars[indexCars].concat(tmpCars);
console.log(cars);
