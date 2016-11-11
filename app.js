function init() {

}

var bgColor = 'rgba(0, 0, 0, 0.9)';
function draw(dt) {
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  ctx.save();

  ctx.translate((WIDTH / 2) - (75), (HEIGHT / 2));
  //fillHeart();

  const heartCount = 20;
  for(let i = 0; i < heartCount; i++) {
    //ctx.scale(0.95 + Math.cos(totalSeconds) * 0.01, 0.95  + Math.cos(totalSeconds) * 0.05);
    ctx.scale(0.95, 0.95);
    let offset = (360 / heartCount) * i;

    ctx.translate(Math.cos(totalSeconds * 1 * i) * 10, 5 + Math.sin(10 + totalSeconds * 2) * 10);
    fillHeart(HSLA(0, offset * Math.cos(totalSeconds * 0.4) * 5));
  }


  ctx.restore();
}
