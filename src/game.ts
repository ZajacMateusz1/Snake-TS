export default class Game {
  private gameBoard: HTMLElement;
  constructor() {
    this.gameBoard = document.getElementById("gameBoard")!;
  }
  start() {
    console.log("Game started!");
  }
}
