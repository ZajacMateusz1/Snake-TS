import Snake from "./snake.ts";
import Food from "./food.ts";
import type { Config } from "./types.ts";
export default class Game {
  private gameBoard: HTMLCanvasElement;
  private config: Config;
  grow: boolean;
  constructor() {
    this.gameBoard = document.getElementById("gameBoard") as HTMLCanvasElement;
    this.config = {
      cellSize: 25,
      boardWidth: this.gameBoard.width,
      boardHeight: this.gameBoard.height,
      ctx: this.gameBoard.getContext("2d")!,
    };
    this.grow = false;
  }
  start() {
    console.log("Game started!");
    const food = new Food(this.config);
    const snake = new Snake(this.config);
    food.drawFood();
    snake.renderSnake();
    window.addEventListener("keydown", (e: KeyboardEvent) =>
      snake.setDirection(e)
    );
    setInterval(() => {
      if (snake.body[0].x === food.x && snake.body[0].y === food.y) {
        this.grow = true;
        food.respawn();
      }
      snake.move(this.grow);
      this.grow = false;
    }, 100);
  }
}
