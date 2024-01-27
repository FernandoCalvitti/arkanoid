import { Vector } from "../types";

export class Brick {
  private brickImage: HTMLImageElement = new Image();

  constructor(
    private brickWidht: number,
    private brickHeight: number,
    private position: Vector,
    private brickEnergy: number,
    image: string
  ) {
    this.brickWidht = brickWidht;
    this.brickHeight = brickHeight;
    this.position = position;
    this.brickEnergy = brickEnergy;
    this.brickImage.src = image;
  }

  //Getters
  get widht(): number {
    return this.brickWidht;
  }

  get height(): number {
    return this.brickHeight;
  }

  get pos(): Vector {
    return this.position;
  }

  get image(): HTMLImageElement {
    return this.image;
  }

  get energy(): number {
    return this.brickEnergy;
  }

  //Setters

  set energy(energy: number) {
    this.brickEnergy = energy;
  }
}
