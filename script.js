const circle = document.getElementById("circle");
const up = document.getElementById("up");
const down = document.getElementById("down");

let rotateValue = circle.style.transform;
let rotateSum;

up.onclick = function () {
  rotateSum = rotateValue + "rotate(-90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
};
down.onclick = function () {
  rotateSum = rotateValue + "rotate(90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
};
