/**
 * Objeto que representa a un jugador del juego.
 */
export interface Player {
  id: number;
  name: string;
  color: string;
}

/**
 * Clase que representa el tablero del juego Conecta 4.
 */
export class Board {
  private grid: string[][];
  private readonly rows: number = 6;
  private readonly cols: number = 7;

  /**
   * Constructor de la clase `Board`. Inicializa el tablero con el tamaño
   * especificado y lo llena con el caracter '-'.
   */
  constructor() {
    this.grid = new Array(this.rows);
    for (let i = 0; i < this.rows; i++) {
      this.grid[i] = new Array(this.cols).fill("-");
    }
  }

  /**
   * Método que coloca una ficha en la columna especificada. Si la columna no
   * es válida, se muestra un mensaje de error y se devuelve `false`. Si la
   * columna está llena, se muestra un mensaje de error y se devuelve `false`.
   * Si la ficha se coloca con éxito, se devuelve `true`.
   *
   * @param col Columna en la que se desea colocar la ficha.
   * @param piece Ficha que se desea colocar.
   * @returns `true` si la ficha se colocó con éxito, `false` si no.
   */
  public placePiece(col: number, piece: string): boolean {
    if (col < 0 || col >= this.cols) {
      console.log("Columna no válida");
      return false;
    }

    for (let row = this.rows - 1; row >= 0; row--) {
      if (this.grid[row][col] === "-") {
        this.grid[row][col] = piece;
        return true;
      }
    }

    console.log("Columna llena");
    return false;
  }

  /**
   * Método que imprime el estado actual del tablero por consola.
   */
  public print() {
    console.log(this.grid.map((row) => row.join(" ")).join("\n"));
  }

  /**
   * Método que verifica si el jugador ha ganado el juego. Verifica todas las
   * posibles combinaciones de 4 fichas seguidas en línea, tanto horizontal
   * como verticalmente, así como en diagonal.
   *
   * @param piece Ficha del jugador actual.
   * @returns `true` si el jugador ha ganado, `false` si no.
   */
  public checkWin(piece: string): boolean {
    // Revisar líneas
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols - 3; col++) {
        if (
          this.grid[row][col] === piece &&
          this.grid[row][col + 1] === piece &&
          this.grid[row][col + 2] === piece &&
          this.grid[row][col + 3] === piece
        ) {
          return true;
        }
      }
    }

    // Revisar columnas
    for (let row = 0; row < this.rows - 3; row++) {
      for (let col = 0; col < this.cols; col++) {
        if (
          this.grid[row][col] === piece &&
          this.grid[row + 1][col] === piece &&
          this.grid[row + 2][col] === piece &&
          this.grid[row + 3][col] === piece
        ) {
          return true;
        }
      }
    }

    // Revisar diagonal de izquierda a derecha y de arriba a bajo
    for (let row = 0; row < this.rows - 3; row++) {
      for (let col = 0; col < this.cols - 3; col++) {
        if (
          this.grid[row][col] === piece &&
          this.grid[row + 1][col + 1] === piece &&
          this.grid[row + 2][col + 2] === piece &&
          this.grid[row + 3][col + 3] === piece
        ) {
          return true;
        }
      }
    }

    // Revisar diagonal de izquierda a derecha y de abajo a arriba
    for (let row = 3; row < this.rows; row++) {
      for (let col = 0; col < this.cols - 3; col++) {
        if (
          this.grid[row][col] === piece &&
          this.grid[row - 1][col + 1] === piece &&
          this.grid[row - 2][col + 2] === piece &&
          this.grid[row - 3][col + 3] === piece
        ) {
          return true;
        }
      }
    }

    return false;
  }
}