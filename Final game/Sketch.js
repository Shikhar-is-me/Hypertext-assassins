let playerPaddle;

function setup() {
  createCanvas(624, 351);
  playerPaddle = new Paddle(26);
}

function draw() {
  background(0);
  playerPaddle.display();
}

function draw() {
  background(0);
  playerPaddle.display();
  aiPaddle.display();
  
 
  playerPaddle.up();
}

function keyPressed() {
	if (keyCode == UP_ARROW) {
		playerPaddle.isUp = true;
	} else if (keyCode == DOWN_ARROW) {
		playerPaddle.isDown = true;
	}
}

function keyReleased() {
	if (keyCode == UP_ARROW) {
		playerPaddle.isUp = false;
	} else if (keyCode == DOWN_ARROW) {
		playerPaddle.isDown = false;
	}
}

function draw() {
  background(0);
	
  playerPaddle.display();
  aiPaddle.display();

 
  if (playerPaddle.isUp) {
    playerPaddle.up();
  } else if (playerPaddle.isDown) {
    playerPaddle.down();
  }
	
}

let playerPaddle;
let aiPaddle;
let ball; 

function setup() {
    createCanvas(624, 351);
	playerPaddle = new Paddle(26);
	aiPaddle = new Paddle(width - 48);
	ball = new Ball(); 
}

function draw() {
  background(0);
	
	playerPaddle.display();
	aiPaddle.display();
	

	
	ball.update(); 
	ball.display(); 
	
}




function draw() {
  background(0);
	
  playerPaddle.display();
  aiPaddle.display();
	
  playerPaddle.update(); 
  aiPaddle.update();     
  processAI();
	
  ball.update(); 
  ball.display(); 
	
  ball.hasHitPlayer(playerPaddle); 
  ball.hasHitAi(aiPaddle); 
	
  stroke(255); 
  line(width/2, 0, width/2, height); 
	
}

