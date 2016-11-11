function drawLine(aX, aY, bX, bY, width) {
    ctx.beginPath();
    ctx.moveTo(aX, aY);
    ctx.lineTo(bX, bY);
    ctx.lineWidth = width;
    ctx.stroke();
    ctx.closePath();
}

function strokeCircle(x, y, radius, width, color) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.lineWidth = width;
  ctx.strokeStyle = this.Color;
  ctx.stroke();
  ctx.closePath();
}

function fillCircle(x, y, radius, color) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
}
