function myCode(){

	
	// This is the code to make your game's hero. 
	// Player
    player = createSprite(player_start_x, player_start_y, 20, 20);
    player.shapeColor = 'Aqua';
    
    
    //Time to give your game some personality	
	//To customize your player you have to load an image into the game and then use it as the image for the player.
	//First, lets load the image (take a look at the available images inside the images folder)
    playerImage = loadImage("https://gide.myglife.org/file/yvonne-OrionContent/mini/images/art/pxl_hero_A.png");
    
    //Now that you have stored the image into the playerImg variable, let's add it to your hero
    player.addImage(playerImage);
	
	
	
	//Now try adding an image to some of your platforms. Remember you can reuse anything you've stored inside a variable, including images.
	platformImage = loadImage("images/art/pxl_enemy_B2.png");
	
	
	
	
	//Change the platforms size and position
	//Change the numbers so you can reach the platform
	platform1 = createSprite(40, 470, 80, 10);
    platform2 = createSprite(200, 400, 110, 10);
    platform3 = createSprite(350, 470, 80, 10);
    platform4 = createSprite(470, 300, 50, 10);
    platform5 = createSprite(470, 400, 80, 10);
    platform6 = createSprite(350, 250, 80, 10);
    platform7 = createSprite(350, 190, 80, 10);
    platform8 = createSprite(470, 120, 80, 10);
	
	platform1.addImage(platformImage);
	
	//Change the platforms color
    platform1.shapeColor = 'green';
	platform2.shapeColor = 'green';
	platform3.shapeColor = 'green';
	platform4.shapeColor = 'green';
	platform5.shapeColor = 'green';
	platform6.shapeColor = 'green';
	platform7.shapeColor = 'green';
	platform8.shapeColor = 'green';
	
	//Store platforms in platforms group
	platforms = new Group();
    platforms.add(platform1);
    platforms.add(platform2);
    platforms.add(platform3);
    platforms.add(platform4);
    platforms.add(platform5);
    platforms.add(platform6);
    platforms.add(platform7);
    platforms.add(platform8);
}