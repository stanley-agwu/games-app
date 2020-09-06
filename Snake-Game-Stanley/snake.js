const canvas = document.getElementById("gameBoard")
const context = canvas.getContext("2d")

// create the unit
const unit = 20;

// create the snake body
let snakeBody = [];
snakeBody[0] = {
    x : 10 * unit,
    y : 10 * unit
};

// create the food location
let food = {
    x : Math.floor(Math.random()*23 +1) * unit,
    y : Math.floor(Math.random()*23 +1) * unit
}

// create the score var
let score = 0;

//The snake control
let dir;
document.addEventListener("keydown", direction);

function direction(event){
  if(event.keyCode == 37 && dir != "RIGHT"){
      dir = "LEFT";
  }else if(event.keyCode == 38 && dir != "DOWN"){
      dir = "UP";
  }else if(event.keyCode == 39 && dir != "LEFT"){
      dir = "RIGHT";
  }else if(event.keyCode == 40 && dir != "UP"){
      dir = "DOWN";
  }
}

// check collision function
function collision(head, array){
  for(let i = 0; i < array.length; i++){
      if(head.x == array[i].x && head.y == array[i].y){
        return true;
      }
  }
  return false;
}

function draw(){
  for(let i = 0; i < snakeBody.length ; i++){
    context.fillStyle = ( i == 0 ) ? "green" : "#274690";
    context.fillRect(snakeBody[i].x, snakeBody[i].y, unit, unit);

    context.strokeStyle = "#171D1C";
    context.strokeRect(snakeBody[i].x, snakeBody[i].y, unit, unit);

    context.fillStyle = "#FF206E";
    context.fillRect(food.x, food.y, unit, unit);

    context.strokeStyle = "#171D1C";
    context.strokeRect(food.x, food.y, unit, unit);
  }

  // old head position
  let snakeBodyX = snakeBody[0].x;
  let snakeBodyY = snakeBody[0].y;

  // snake direction
  if(dir == "LEFT") {snakeBodyX -= unit;}
  if(dir == "UP") {snakeBodyY -= unit;}
  if(dir == "RIGHT") {snakeBodyX += unit;}
  if(dir == "DOWN") {snakeBodyY += unit;}

  // if the snake eats the food
  if(snakeBodyX == food.x && snakeBodyY == food.y){
    score++;
    food = {
        x : Math.floor(Math.random()*23 +1) * unit,
        y : Math.floor(Math.random()*23 +1) * unit
      }
      // we don't remove the tail
  }else{
    // remove the tail
    snakeBody.pop();
  }

  // add new Head
  let newHead = {
      x : snakeBodyX,
      y : snakeBodyY
  }
  
  // check game over
  if(snakeBodyX < unit || snakeBodyX > 23*unit || snakeBodyY < unit || 
    snakeBodyY > 23*unit || collision(newHead, snakeBody)){
      clearInterval(game);
  }

  snakeBody.unshift(newHead);

  /*context.fillStyle = "white";
  context.font = "25px Verdana";
  context.fillText("Score : "+ score, 2*box, 1.6*box);*/


}

 // call draw function every 500 ms
let game=setInterval(draw, 500);

draw();



















