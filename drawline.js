var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var state = "rect";
var lastC = [null ,null];
console.log(document.getElementById("toggle"));
console.log(document.getElementById("toggle"));

document.getElementById("toggle").addEventListener("click", toggle);
document.getElementById("clear").addEventListener("click", clear);
document.getElementById("slate").addEventListener("click", draw);

function draw(e) {
  console.log("draw");
  e.preventDefault();
  var mouseX = e.offsetX;
  var mouseY = e.offsetY;
  if (lastC[0] == null) {
    lastC[0] = mouseX;
    lastC[1] = mouseY;
  }
  if (state == "rect") {
    rect(mouseX, mouseY);
  }
  if (state == "circ") {
    circle(mouseX, mouseY);
  }
}

function rect(x, y) {
  console.log("rect at " + x + ", " + y);
  ctx.fillStyle = "#ff0000";
  ctx.beginPath();
  ctx.moveTo(lastC[0], lastC[1]);
  ctx.fillRect(x, y, 10, 10);
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.fill();
  lastC[0] = x;
  lastC[1] = y;

}

function circle(x, y) {
  console.log("circle at " + x + ", " + y);
  console.log("lastC: " + lastC);
  ctx.fillStyle = "#0000ff";
  ctx.beginPath();
  ctx.moveTo(lastC[0], lastC[1]);
  ctx.arc(x, y, 5, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
  lastC[0] = x;
  lastC[1] = y;
}

function toggle() {
  console.log("toggle from " + state);
  if (state == "rect") {
    state = "circ";
    console.log("toggle to " + state);
  }
  else if (state == "circ") {
    state = "rect";
    console.log("toggle to " + state);
  }
  lastC[0] = null;
}

function clear() {
  console.log("clear");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, 600, 600);
  lastC[0] = null;
}
