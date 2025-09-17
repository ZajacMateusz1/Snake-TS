import Snake from "./snake.ts";
import Food from "./food.ts";
import type { Config } from "./types.ts";
export default class Game {
  private gameBoard: HTMLCanvasElement;
  private config: Config;
  constructor() {
    this.gameBoard = document.getElementById("gameBoard") as HTMLCanvasElement;
    this.config = {
      cellSize: 25,
      boardWidth: this.gameBoard.width,
      boardHeight: this.gameBoard.height,
      ctx: this.gameBoard.getContext("2d")!,
    };
  }
  start() {
    console.log("Game started!");
    const food = new Food(this.config);
    const snake = new Snake(this.config);
    food.drawFood();
    window.addEventListener("keydown", (e: KeyboardEvent) => snake.move(e));
    snake.renderSnake();
  }
}
