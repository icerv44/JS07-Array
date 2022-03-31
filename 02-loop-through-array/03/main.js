const summary = [{ netPrice: 900 }, { netPrice: 475 }, { netPrice: 100 }];
const sales = [
  { Price: 900, discount: 0.1 },
  { Price: 475, discount: 0.5 },
  { Price: 100 },
];

let tmpSum = [];

let calArr = sales.forEach((element, index, arr) => {
  let sum = 0;
  let disc = Number(sales[index].discount);
  let netP = Number(sales[index].Price);
  if (isNaN(disc)) {
    disc = 0;
  }
  console.log("Disc : " + disc + "\nnetP : " + netP);
  summary[index].netPrice = netP - netP * disc;
});

console.log(summary);
