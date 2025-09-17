export type Config = {
  cellSize: number;
  boardWidth: number;
  boardHeight: number;
  ctx: CanvasRenderingContext2D;
};

export type SnakePart = {
  x: number;
  y: number;
};

export type Direction = "ArrowUp" | "ArrowDown" | "ArrowLeft" | "ArrowRight";
