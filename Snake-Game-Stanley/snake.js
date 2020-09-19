
const canvas = document.getElementById("gameBoard")
const context = canvas.getContext("2d")

// Initializing the grid(cell) unit and canvas size
const unit = 25;
const canvasSize= 24;

// create the snake body
let snakeBody = [];
snakeBody[0] = {
    x : 10 * unit,
    y : 10 * unit
};

// Creating the random food location
let food = {
    x : Math.floor((Math.random() * (canvasSize-1)) + 1) * unit,
    y : Math.floor((Math.random() * (canvasSize - 3)) + 3) * unit
}

// Creating the score variable
let score = 0;

// Initialize speed in ms
let speed = 400;

//Setting the snake direction and control
let dir;

const direction=(event)=>{
  if(event.keyCode == 37 && dir !== "RIGHT"){
      dir = "LEFT";
  }else if(event.keyCode == 38 && dir !== "DOWN"){
      dir = "UP";
  }else if(event.keyCode == 39 && dir !== "LEFT"){
      dir = "RIGHT";
  }else if(event.keyCode == 40 && dir !== "UP"){
      dir = "DOWN";
  }
}
document.addEventListener("keydown", direction);

// Creating Collision Function
const collision = (snakeHead, someArray)=>{
  for(let i = 0; i < someArray.length; i++){
      if((snakeHead.x == someArray[i].x) && (snakeHead.y == someArray[i].y)){
        return true;
      } 
  }
  return false
}


const draw=()=>{
  //Drawing the html canvas
  context.fillStyle = '#F0EDEE';
  context.fillRect(0, 2 * unit, (canvasSize * unit), ((canvasSize-2) * unit));

  for(let i = 0; i < snakeBody.length ; i++){
    context.fillStyle = ( i == 0 ) ? "#14591D" : "#58BC82";

    context.fillRect(snakeBody[i].x, snakeBody[i].y, unit, unit);

    context.strokeStyle = "#171D1C";
    context.strokeRect(snakeBody[i].x, snakeBody[i].y, unit, unit);
  }

  //Creating the food
  context.fillStyle = "#FF206E";
  context.fillRect(food.x, food.y, unit, unit);

  context.strokeStyle = "#171D1C";
  context.strokeRect(food.x, food.y, unit, unit);

  // This is the old head position
  let snakeBodyX = snakeBody[0].x;
  let snakeBodyY = snakeBody[0].y;

  // Setting snake movement with snake direction
  if(dir == "LEFT") {snakeBodyX -= unit}
  if(dir == "UP") {snakeBodyY -= unit}
  if(dir == "RIGHT") {snakeBodyX += unit}
  if(dir == "DOWN") {snakeBodyY += unit}

  // Checking if the snake eats the food
  if (snakeBodyX == food.x && snakeBodyY == food.y)
    {
      score+=10;
      food = {
          x : Math.floor(Math.random()* (canvasSize-2) + 1) * unit,
          y : Math.floor((Math.random()*(canvasSize - 3)) + 3) * unit
              }
      // The tail is left unremoved
  }
  else {
    snakeBody.pop();
    //The tail is unremoved
  }
  

  // Creating a new head
  let newHead = {
      x : snakeBodyX,
      y : snakeBodyY
  }

  //Controlling speed of the game
  if (score < 100){ speed = 400 } 
    else if (score >= 100 && score < 200){ speed = 300 } 
      else if (score >= 200 && score < 300){ speed = 200 } 
      else {
    speed=100
    }

  
  // Checking if Game is Over
  if(snakeBodyX < 0 || snakeBodyX > (canvasSize-1) * unit || snakeBodyY < (2 * unit) || 
    snakeBodyY > (canvasSize-1) * unit || collision(newHead, snakeBody)){
    clearInterval(game);
    context.fillStyle = "#595959";
    context.font = "5em Verdana";
    context.fontStyle = "Italic";
    context.fillText("Game Over", 3 * unit, 13 * unit);
  }

  snakeBody.unshift(newHead);

  //Adding the Score
  context.fillStyle = "#F0EDEE";
  context.font = "1.5em Verdana";
  context.clearRect(0, 0, (Math.floor(canvasSize/2) * unit), (2 * unit));
  context.fillText("Score : "+ score, 0, unit);

  //Add Name to Game Board
  context.fillStyle = "#D496A7";
  context.font = "1.4em Verdana";
  context.fillText("5 Stack Snake Game", 14 * unit, unit);

}


let game=setInterval(draw, speed);




















