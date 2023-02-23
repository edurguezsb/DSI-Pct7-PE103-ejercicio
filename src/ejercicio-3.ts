/**
 * Defines which are the possible types for the cells of the chess.
 */
export type ChessCell = "-" | "N" | "B";

/**
 * Defines the data type for the chess.
 */
export type ChessBoard = [ChessCell[], ChessCell[], ChessCell[], ChessCell[], ChessCell[], ChessCell[], ChessCell[], ChessCell[]];

/**
 * Determines if two queens can attack each other on the chess.
 * @param board The chess board.
 * @returns True if both of the queens can attack each other, false if not. Undefined if the chess board is not valid because of the size or any irregularity.
 */
export function checkAtack(board: ChessBoard): boolean | undefined {
  if (board.length !== 8 || board.some(row => row.length !== 8 || row.some(cell => !["-", "N", "B"].includes(cell)))) {
    return undefined;
  }

  let blackQueen: [number, number] | undefined = undefined;
  let whiteQueen: [number, number] | undefined = undefined;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === "N") {
        blackQueen = [i, j];
      } else if (board[i][j] === "B") {
        whiteQueen = [i, j];
      }
    }
  }

  if (blackQueen === undefined || whiteQueen === undefined) {
    return undefined;
  }

  return blackQueen[0] === whiteQueen[0] || blackQueen[1] === whiteQueen[1] || Math.abs(blackQueen[0] - whiteQueen[0]) === Math.abs(blackQueen[1] - whiteQueen[1]);
}


/* 
const board1: ChessBoard = [
    ["-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "N", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "B", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-", "-"],
  ];
console.log("¿Las reinas pueden atacarse en el tablero 1?", checkAtack(board1)); // true porque están en diagonal

  const board2: ChessBoard = [
    ["-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "N", "-", "-", "-", "B"],
    ["-", "-", "-", "-", "-", "-", "-", "-"],
  ];
console.log("¿Las reinas pueden atacarse en el tablero 2?", checkAtack(board2)); // true porque estan en línea horizontal

  const board3: ChessBoard = [
    ["-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "N", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-", "B"],
    ["-", "-", "-", "-", "-", "-", "-", "-"],
  ];
console.log("¿Las reinas pueden atacarse en el tablero 3?", checkAtack(board3)); // false no hay manera directa de atacarse

  const board4: ChessBoard = [
    ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "N", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "B", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
  ];
console.log("¿Las reinas pueden atacarse en el tablero 4?", checkAtack(board4)); // undefined porque el tablero es más grande de lo permitido
*/