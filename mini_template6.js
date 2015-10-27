function myCode(){
	//Variables. Store your values. You can reuse these value.
	platformWidth = 30;
	platformColor = "green";
	
	//Create a platform
	platform1 = createSprite(20, 440, platformWidth, 10);

	//Give the platform a color
	platform1.shapeColor = platformColor;
	
}

//These is the power or Function, as they're known in the ALPHA world.
//Change the force of the jump to reach the goal.
function makeJump(sprite) {
	force = 5;
    sprite.setSpeed(force, 270);
}

