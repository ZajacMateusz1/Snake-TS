import Snake from "./snake.ts";
import Food from "./food.ts";
import type { Config } from "./types.ts";
export default class Game {
  private gameBoard: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private config: Config;
  constructor() {
    this.gameBoard = document.getElementById("gameBoard") as HTMLCanvasElement;
    this.ctx = this.gameBoard.getContext("2d")!;
    this.config = {
      cellSize: 25,
      boardWidth: this.gameBoard.width,
      boardHeight: this.gameBoard.height,
    };
  }
  start() {
    console.log("Game started!");
    const food = new Food(this.config);
    food.drawFood(this.ctx);
  }
}
