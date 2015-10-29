function base_setupLevel() {
  player.position.x = 20;
  player.position.y = 50;
  goal.position.x = 600;
  goal.position.y = 440;
}

function base_drawLevel() {
  if (goalReached) {
    fill('red');
    textAlign(CENTER);
    text("Goal reached. Color code unlocked!", WIDTH/2, HEIGHT/2);
  }

  if (isPlayerOnPlatform()) {
    player.velocity.y = 0;
  }
}
