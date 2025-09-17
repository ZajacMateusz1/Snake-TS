import type { Config, SnakePart } from "./types.ts";
export default class Snake {
  private config: Config;
  private body: SnakePart[];
  private startY: number;
  constructor(config: Config) {
    this.config = config;
    this.startY = Math.floor(config.boardHeight / 2);
    this.body = [
      { x: config.cellSize * 2, y: this.startY },
      { x: config.cellSize, y: this.startY },
      { x: 0, y: this.startY },
    ];
  }
  renderSnake() {
    this.body.forEach((snakePart) => {
      this.config.ctx.fillStyle = "green";
      this.config.ctx.fillRect(
        snakePart.x,
        snakePart.y,
        this.config.cellSize,
        this.config.cellSize
      );
    });
  }
  move(e: KeyboardEvent) {
    const top = e.key === "ArrowUp";
    const left = e.key === "ArrowLeft";
    const bottom = e.key === "ArrowDown";
    const right = e.key === "ArrowRight";
    switch (true) {
      case top:
        this.body.unshift({
          x: this.body[0].x,
          y: this.body[0].y - this.config.cellSize,
        });
        break;
      case left:
        this.body.unshift({
          x: this.body[0].x - this.config.cellSize,
          y: this.body[0].y,
        });
        break;
      case bottom:
        this.body.unshift({
          x: this.body[0].x,
          y: this.body[0].y + this.config.cellSize,
        });
        break;
      case right:
        this.body.unshift({
          x: this.body[0].x + this.config.cellSize,
          y: this.body[0].y,
        });
        break;
      default:
        break;
    }
    this.config.ctx.clearRect(
      this.body[this.body.length - 1].x,
      this.body[this.body.length - 1].y,
      this.config.cellSize,
      this.config.cellSize
    );
    this.body.pop();
    this.renderSnake();
  }
}
