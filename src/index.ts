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
  paddle: Paddle,
  ball: Ball
) {}

function startGame(view: CanvasView) {}

// Create a new view

const view = new CanvasView("#palyField");
view.initStartButton(startGame);
