function myCode(){
	//Somebody messed up the code and the platforms are not properly aligned
	//Change the numbers so you can reach the goal
	platform1 = createSprite(40, 100, 80, 10);
    platform2 = createSprite(160, 200, 80, 10);
    platform3 = createSprite(160, 300, 80, 10);
    platform4 = createSprite(70, 370, 80, 10);
    platform5 = createSprite(510, 400, 80, 10);
    
    //Black platforms are fragile places to try and stand on. Change the color on the platforms
	platform1.shapeColor = 'green';
	platform2.shapeColor = 'black';
	platform3.shapeColor = 'Black';
	platform4.shapeColor = 'green';
	platform5.shapeColor = 'black';
}