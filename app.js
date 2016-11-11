function init() {

}

var bgColor = 'rgba(0, 0, 0, 0.05)';
var x = 20;
function draw(dt) {
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  x += dt * 20;
  fillCircle(x, 20, 10, 'white');
}
