function base_setupLevel() {
  var platform1 = createPlatform(WIDTH/2, 460, 640, 10);
  platform1.shapeColor = 'green';
  goal.position.x = 600;
  goal.position.y = 440;
  goal.shapeColor = 'yellow';
}

function base_drawLevel() {
  if (goalReached) {
    fill('red');
    textAlign(CENTER);
    text("Javascript unlocked!", WIDTH/2, HEIGHT/2);
  }

  if (isPlayerOnPlatform()) {
    player.velocity.y = 0;
  }
}
