import { CanvasView } from "./view/canvas-view";
import { Ball } from "./sprites/ball";
import { Brick } from "./sprites/brick";
import { Paddle } from "./sprites/paddle";

//IMG
import PADDLE_IMAGE from "./images/paddle.png";
import BALL_IMAGE from "./images/ball.png";

//LVL & COLORS
import {
  PADDLE_SPEED,
  PADDLE_WIDTH,
  PADDLE_HEIGHT,
  PADDLE_START_X,
  BALL_SPEED,
  BALL_SIZE,
  BALL_START_X,
  BALL_START_Y,
} from "./setup";

//Helpers
import { createBricks } from "./helpers";

let gameOver = false;
let score = 0;

function setGameOver(view: CanvasView) {
  view.drawInfo("Game Over!");
  gameOver = false;
}

function setGameWin(view: CanvasView) {
  view.drawInfo("Game Won!!!");
  gameOver = false;
}

function gameLoop(
  view: CanvasView,
  bricks: Brick[],
  paddle: Paddle
  /*  ball: Ball */
) {
  view.clear();
  view.drawBricks(bricks);
  view.drawSprite(paddle);

  /* Check the paddle does not go beyond boundaries */
  if (
    (paddle.isMovingLeft && paddle.pos.x > 0) ||
    (paddle.isMovingRight && paddle.pos.x < view.canvas.width - paddle.width)
  ) {
    paddle.movePaddle();
  }
  requestAnimationFrame(() => gameLoop(view, bricks, paddle));
}

function startGame(view: CanvasView) {
  //Reset the displays
  score = 0;
  view.drawInfo("");
  view.drawScore(0);

  //Build bricks
  const bricks = createBricks();

  //Build Paddle
  const paddle = new Paddle(
    PADDLE_SPEED,
    PADDLE_WIDTH,
    PADDLE_HEIGHT,
    {
      x: PADDLE_START_X,
      y: view.canvas.height - PADDLE_HEIGHT - 5,
    },
    PADDLE_IMAGE
  );

  gameLoop(view, bricks, paddle);
}

// Create a new view

const view = new CanvasView("#playField");
view.initStartButton(startGame);
