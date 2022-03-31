let styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll");

styles[styles.length] = "Classic";

delete styles[0];

styles.forEach((element) => {
  console.log("Element : " + element);
});

console.log("Length : " + styles.length - 1);
