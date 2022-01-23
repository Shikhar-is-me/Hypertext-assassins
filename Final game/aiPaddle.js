let playerPaddle;
let aiPaddle;

function setup() {
  createCanvas(624, 351);
  playerPaddle = new Paddle(26);
  aiPaddle = new Paddle(width - 48);
}

function draw() {
  background(0);
  playerPaddle.display();
  aiPaddle.display();
}

function draw() {
    background(0);
      
    playerPaddle.display();
    aiPaddle.display();
      
    playerPaddle.update(); // add this
    aiPaddle.update();     // and this
      
    processAI();   // andddd thiss
      
    ball.update(); 
    ball.display(); 
      
  }
  
  function processAI() {
    let middleOfPaddle = aiPaddle.y + aiPaddle.height / 2;
      
    if (middleOfPaddle > ball.y) {
      aiPaddle.isUp = true;
      aiPaddle.isDown = false;
    } else {
      aiPaddle.isDown = true;
      aiPaddle.isUp = false;
  
    }
  }