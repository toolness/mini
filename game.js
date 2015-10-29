var WIDTH = 640;
var HEIGHT = 480;

var PLAYER_START_X = 20;
var PLAYER_START_Y = 300;

var player, particles, platforms, goalReached;

function setup() {
    var myCanvas = createCanvas(WIDTH, HEIGHT);
    myCanvas.parent('p5_canvas');

    setupDialogue();

    goalReached = false;
    goal = createSprite(600, 40, 30, 30);
    goal.shapeColor = 'yellow';

    particles = new ParticleSystem(createVector(width / 2, 50));
    platforms = new Group();

    player = createSprite(PLAYER_START_X, PLAYER_START_Y, 20, 20);
    player.shapeColor = 'Aqua';

    base_setupLevel();
    setupLevel();
}

function draw() {
    clear();

    drawGrid();

    fill("red");
    textSize(24);
    textFont("Georgia");
    text("My Game", 50, 50);

    playerInput();

    if (goalReached) {
        showNextLevelButton();
        particles.addParticle();
        particles.run();
    }

    if (player.overlap(goal)) {
        goalReached = true;
    }

    gravity(player);

    // Draw player
    player.shapeColor = 'Aqua';
    player.display();

    drawSprites();

    resetOnGameOver();

    drawDialogue();

    base_drawLevel();
    drawLevel();
}

function isPlayerOnPlatform() {
    for (var i = 0; i < platforms.length; i++) {
        if (player.overlap(platforms[i]) & player.velocity.y > 0) {
            return true;
        }
    }
    return false;
}

function createPlatform(x, y, width, height, color) {
    var platform = createSprite(x, y, width, height);
    platform.shapeColor = color || 'green';
    platforms.add(platform);
    return platform;
}

function resetOnGameOver() {
    if (player.position.y > HEIGHT) {
        player.position.x = PLAYER_START_X;
        player.position.y = PLAYER_START_Y;
    }
}

function gravity(sprite) {
    sprite.addSpeed(-0.2, 270);
}

function playerInput() {
    if (keyIsDown(LEFT_ARROW)) {
        player.position.x = player.position.x - 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        player.position.x = player.position.x + 5;
    }
}

function mouseClicked() {
    mouseClickedDialogue();
}
