const scores = [
  { score: 90, subject: "HTML", weight: 0.2 },
  { score: 95, subject: "CSS", weight: 0.3 },
  { score: 85, subject: "JavaScript", weight: 0.5 },
];
let Total = 0;
let calScores = (arr) => {
  arr.forEach((element) => {
    Total = Total + element.score * element.weight;
  });
};

calScores(scores);
console.log(Total);
