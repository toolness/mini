WIDTH = 640;
HEIGHT = 480;



player_start_x = 20;
player_start_y = 300;


function setup() {
    myCanvas = createCanvas(WIDTH, HEIGHT);
    myCanvas.parent('p5_canvas');



    setupDialogue();
    





    goalReached = false;
    goal = createSprite(600, 40, 30, 30);
    goal.shapeColor = 'yellow';

    system = new ParticleSystem(createVector(width / 2, 50));

    // ****************** YOUR CODE STARTS HERE **************

    // ------------------ START: Variables
    // Player
    player = createSprite(player_start_x, player_start_y, 20, 20);
    player.shapeColor = 'Aqua';

    // Platforms

    myCode();



    // ------------------ END: Variables

}

function draw() {
    // ------------------ START: Draw function body
    clear();

    
        

    drawGrid();

    fill("red");
    textSize(24);
    textFont("Georgia");
    text("My Game", 50, 50);

    playerInput();

    if (goalReached) {
        system.addParticle();
        system.run();
    }

    if (player.overlap(goal)) {
        goalReached = true;
    }


    gravity(player);

    //Draw player
    player.shapeColor = 'Aqua';
    player.display();


    drawSprites();



    for (var i = 0; i < platforms.length; i++) {
        if (player.overlap(platforms[i]) & player.velocity.y > 0) {
            makeJump(player);
        }
    };

    resetOnGameOver();

    drawDialogue();
    // ------------------ END: Draw function body
}
// ****************** YOUR CODE ENDS HERE ******************

function resetOnGameOver() {
    if (player.position.y > HEIGHT) {
        player.position.x = player_start_x;
        player.position.y = player_start_y;
    }
}

function drawGrid() {
    textSize(12);
    fill('black');
    for (var i = 40; i < WIDTH; i += 40) {
        line(0, i, 20, i);
        line(i, 0, i, 20);
    };

    for (var i = 40; i < WIDTH; i += 80) {
        text(i, 20, i);
        text(i, i, 30);
    };
}

function gravity(sprite) {
    sprite.addSpeed(-0.2, 270);
    // if(sprite.velocity.y > 2){
    //  sprite.velocity.y = 2;
    // }
}

function makeJump(sprite) {
    sprite.setSpeed(5.5, 270);
}

//Move player
//Make the controls so the player can move left and right using the arrow keys
function playerInput() {
    if (keyIsDown(LEFT_ARROW)) {
        player.position.x = player.position.x - 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        player.position.x = player.position.x + 5;
    }
}

function mouseClicked(){
    mouseClickedDialogue();
}

//Particle system. Modified from the source code in http://p5js.org/examples/examples/Simulate_Particle_System.php
// A simple Particle class
var Particle = function(position) {
    this.acceleration = createVector(0, 0.05);
    this.velocity = createVector(random(-3, 3), random(-1, 0));
    this.position = position.copy();
    this.lifespan = 255.0;
};

Particle.prototype.run = function() {
    this.update();
    this.display();
};

// Method to update position
Particle.prototype.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
};

// Method to display
Particle.prototype.display = function() {
    c = color(0, 0, random(200, 255), this.lifespan);
    fill(c);

    ellipse(this.position.x, this.position.y, 12, 12);
};

// Is the particle still useful?
Particle.prototype.isDead = function() {
    if (this.lifespan < 0) {
        return true;
    } else {
        return false;
    }
};

var ParticleSystem = function(position) {
    this.origin = position.copy();
    this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
    this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
    for (var i = this.particles.length - 1; i >= 0; i--) {
        var p = this.particles[i];
        p.run();
        if (p.isDead()) {
            this.particles.splice(i, 1);
        }
    }
};
