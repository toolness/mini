function setupLevel1() {
  var platform1 = createPlatform(WIDTH/2, 460, 640, 10);
  platform1.shapeColor = 'green';
}

function drawLevel1() {
  if (goalReached) {
    fill('red');
    textAlign(CENTER);
    text("Javascript unlocked!", WIDTH/2, HEIGHT/2);
  }
}
