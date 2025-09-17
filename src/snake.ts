import type { Config, SnakePart, Direction } from "./types.ts";
export default class Snake {
  private config: Config;
  public body: SnakePart[];
  private startY: number;
  private direction: Direction;
  constructor(config: Config) {
    this.config = config;
    this.startY = Math.floor(config.boardHeight / 2);
    this.body = [
      { x: config.cellSize * 2, y: this.startY },
      { x: config.cellSize, y: this.startY },
      { x: 0, y: this.startY },
    ];
    this.direction = "ArrowRight";
  }
  renderSnake() {
    this.config.ctx.fillStyle = "green";
    this.body.forEach((snakePart) => {
      this.config.ctx.fillRect(
        snakePart.x,
        snakePart.y,
        this.config.cellSize,
        this.config.cellSize
      );
    });
  }
  setDirection(e: KeyboardEvent) {
    if (e.key === "ArrowUp" && this.direction !== "ArrowDown")
      this.direction = "ArrowUp";
    if (e.key === "ArrowLeft" && this.direction !== "ArrowRight")
      this.direction = "ArrowLeft";
    if (e.key === "ArrowDown" && this.direction !== "ArrowUp")
      this.direction = "ArrowDown";
    if (e.key === "ArrowRight" && this.direction !== "ArrowLeft")
      this.direction = "ArrowRight";
  }
  move(grow: boolean) {
    switch (this.direction) {
      case "ArrowUp":
        this.body.unshift({
          x: this.body[0].x,
          y: this.body[0].y - this.config.cellSize,
        });
        break;
      case "ArrowLeft":
        this.body.unshift({
          x: this.body[0].x - this.config.cellSize,
          y: this.body[0].y,
        });
        break;
      case "ArrowDown":
        this.body.unshift({
          x: this.body[0].x,
          y: this.body[0].y + this.config.cellSize,
        });
        break;
      case "ArrowRight":
        this.body.unshift({
          x: this.body[0].x + this.config.cellSize,
          y: this.body[0].y,
        });
        break;
      default:
        break;
    }
    if (!grow) {
      this.config.ctx.clearRect(
        this.body[this.body.length - 1].x,
        this.body[this.body.length - 1].y,
        this.config.cellSize,
        this.config.cellSize
      );
      this.body.pop();
    }
    this.renderSnake();
  }
}
