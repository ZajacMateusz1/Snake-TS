import type { Config } from "./types.ts";
export default class Food {
  public x: number;
  public y: number;
  private color: string;
  private config: Config;
  constructor(config: Config) {
    this.config = config;
    this.x = this.getRandomPosition(
      this.config.boardWidth,
      this.config.cellSize
    );
    this.y = this.getRandomPosition(
      this.config.boardHeight,
      this.config.cellSize
    );
    this.color = "red";
  }
  private getRandomPosition(boardSize: number, cellSize: number) {
    const cells = boardSize / cellSize;
    const randomCell = Math.floor(Math.random() * cells);
    return randomCell * cellSize;
  }
  drawFood() {
    this.config.ctx.fillStyle = this.color;
    this.config.ctx.fillRect(
      this.x,
      this.y,
      this.config.cellSize,
      this.config.cellSize
    );
  }
  respawn() {
    this.x = this.getRandomPosition(
      this.config.boardWidth,
      this.config.cellSize
    );
    this.y = this.getRandomPosition(
      this.config.boardHeight,
      this.config.cellSize
    );
    this.drawFood();
  }
}
