/**
 * Define el tipo de datos para una celda del tablero de ajedrez.
 */
type ChessCell = "-" | "N" | "B";

/**
 * Define el tipo de datos para el tablero de ajedrez.
 */
type ChessBoard = [ChessCell[], ChessCell[], ChessCell[], ChessCell[], ChessCell[], ChessCell[], ChessCell[], ChessCell[]];

/**
 * Determina si dos reinas pueden atacarse en un tablero de ajedrez.
 * @param board El tablero de ajedrez.
 * @returns True si las dos reinas pueden atacarse, false en caso contrario. Undefined si el tablero no es válido.
 */
function checkAtack(board: ChessBoard): boolean | undefined {
  // Verifica que el tablero sea válido.
  if (board.length !== 8 || board.some(row => row.length !== 8 || row.some(cell => !["-", "N", "B"].includes(cell)))) {
    return undefined;
  }

  // Busca la posición de las reinas.
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

  // Verifica si las reinas pueden atacarse.
  if (blackQueen === undefined || whiteQueen === undefined) {
    return undefined;
  }

  return blackQueen[0] === whiteQueen[0] || blackQueen[1] === whiteQueen[1] || Math.abs(blackQueen[0] - whiteQueen[0]) === Math.abs(blackQueen[1] - whiteQueen[1]);
}


// Tablero válido
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
console.log("¿Las reinas pueden atacarse en el tablero 1?", checkAtack(board1)); // true
  
  // Tablero válido
  const board2: ChessBoard = [
    ["-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "N", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-", "B"],
    ["-", "-", "-", "-", "-", "-", "-", "-"],
  ];
console.log("¿Las reinas pueden atacarse en el tablero 2?", checkAtack(board2)); // true
  
  // Tablero válido
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
console.log("¿Las reinas pueden atacarse en el tablero 3?", checkAtack(board3)); // false
  
  // Tablero no válido
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
console.log("¿Las reinas pueden atacarse en el tablero 4?", checkAtack(board4)); // undefined
  