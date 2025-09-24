import Snake from "./snake.ts";
import Food from "./food.ts";
import type { Config } from "./types.ts";
export default class Game {
  private gameBoard: HTMLCanvasElement;
  private scoreText: HTMLElement;
  private dialog: HTMLDialogElement;
  private dialogScore: HTMLElement;
  private config: Config;
  private score: number;
  public grow: boolean;
  constructor() {
    this.gameBoard = document.getElementById("gameBoard") as HTMLCanvasElement;
    this.scoreText = document.getElementById("scoreText") as HTMLElement;
    this.dialog = document.getElementById("dialog") as HTMLDialogElement;
    this.dialogScore = document.getElementById("dialogScore") as HTMLElement;
    this.score = 0;
    this.config = {
      cellSize: 25,
      boardWidth: this.gameBoard.width,
      boardHeight: this.gameBoard.height,
      ctx: this.gameBoard.getContext("2d")!,
    };
    this.grow = false;
  }
  endGame(inverval: number) {
    clearInterval(inverval);
    this.dialogScore.innerText = this.score.toString();
    this.dialog.showModal();
  }
  start() {
    const food = new Food(this.config);
    const snake = new Snake(this.config);
    food.spawn(snake.body);
    snake.renderSnake();
    window.addEventListener("keydown", (e: KeyboardEvent) =>
      snake.setDirection(e)
    );
    const interval = setInterval(() => {
      if (snake.body[0].x === food.x && snake.body[0].y === food.y) {
        this.grow = true;
        food.spawn(snake.body);
        this.score++;
        this.scoreText.innerText = this.score.toString();
      }
      snake.move(this.grow);
      if (
        snake.body[0].x >= this.config.boardWidth ||
        snake.body[0].x < 0 ||
        snake.body[0].y >= this.config.boardHeight ||
        snake.body[0].y < 0 ||
        snake.checkSelfCollision()
      ) {
        this.endGame(interval);
        return;
      }
      this.grow = false;
      this.config.ctx.clearRect(
        0,
        0,
        this.config.boardWidth,
        this.config.boardHeight
      );
      food.drawFood();
      snake.renderSnake();
    }, 100);
  }
}
