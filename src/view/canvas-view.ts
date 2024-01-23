import { Brick } from "../sprites/brick";
import { Paddle } from "../sprites/paddle";
import { Ball } from "../sprites/ball";

export class CanvasView {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D | null;
  private scoreDisplay: HTMLObjectElement | null;
  private start: HTMLObjectElement | null;
  private info: HTMLObjectElement | null;

  constructor(canvasName: string) {
    this.canvas = document.querySelector(canvasName) as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d");
    this.scoreDisplay = document.querySelector("#score");
    this.start = document.querySelector("#start");
    this.info = document.querySelector("#info");
  }

  clear(): void {
    if (!this.context) {
      return;
    }

    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  initStartButton(startFunction: (view: CanvasView) => void): void {
    if (!this.start) {
      return;
    }

    this.start.addEventListener("click", () => startFunction(this));
  }

  drawScore(score: number): void {
    if (this.scoreDisplay) {
      this.scoreDisplay.innerHTML = score.toString();
    }
  }

  drawInfo(text: string): void {
    if (this.info) {
      this.info.innerHTML = text;
    }
  }

  drawSprite(brick: Brick | Paddle | Ball): void {
    if (!brick || !this.context) {
      return;
    }

    this.context.drawImage(
      brick.image,
      brick.pos.x,
      brick.pos.y,
      brick.witdh,
      brick.height
    );
  }

  drawBricks(bricks: Brick[]): void {
    if (!bricks) {
      return;
    }

    bricks.forEach((brick) => {
      this.drawSprite(brick);
    });
  }
}
