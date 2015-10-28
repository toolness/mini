function myCode(){
	//Variables. Store your values. You can reuse these value.
	platformWidth = 30;
	platformColor = "black";
	
	//We are using the platformWidth variable to give our platforms a width of 30.
	platform1 = createSprite(30, 100, platformWidth, 10);
	platform2 = createSprite(90, 200, platformWidth, 10);


	    
	//We are using the platformColor variable to give platforms 2,3 and 4, a black color.
	platform1.shapeColor = "blue";
	platform2.shapeColor = platformColor;

}