import Game from "./game.ts";
import Snake from "./snake.ts";
import Food from "./Food.ts";
window.addEventListener("DOMContentLoaded", () => {
  const game = new Game();
  game.start();
});
