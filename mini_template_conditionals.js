function myCode(){
	//Jumping around in this treacherous place can be a tricky thing.
	//Why don't you lend your hero a hand and stop him from going off screen when he gets to the edge?
	
	//Take a look at the following code. Read the comments to see what's happening
	
	
	//Turn the grid on to see what's happening
	drawGrid();
	
	
	//IF the player is in the lower half of the game screen (remember the y axis is upside down )
	if( player.position.y > 240 ){
		console.log("A");
		//THEN change player's color to red
		player.shapeColor = "red";
	}
	
	
	//Not bad, now the player know there's a higher risk of her falling off. Give the player a different color when she's in the upper half of the game screen.
	
}