import { Board } from "./Conecta4";
import { Player } from "./Conecta4";
import * as readline from "readline";

/**
 * Objeto que representa al primer jugador, cuya ficha será X.
 */
const player1: Player = {
  id: 1,
  name: "Jugador 1",
  color: "X",
};

/**
 * Objeto que representa al segundo jugador, cuya ficha será @.
 */
const player2: Player = {
  id: 2,
  name: "Jugador 2",
  color: "@",
};

/**
 * Objeto que representa al tablero del conecta 4.
 */
const board: Board = new Board();

/**
 * Esta función se encarga de solicitar al jugador actual que seleccione una columna
 * en la que colocar su ficha. Una vez que se ha seleccionado una columna válida,
 * la función llama a la función `placePiece()` de la clase `Board` para colocar la
 * ficha en el tablero. Si el jugador gana el juego, se muestra un mensaje de
 * felicitación y se sale de la función. Si el jugador no gana, se llama a la función
 * `promptPlayer()` para solicitar la entrada del siguiente jugador.
 *
 * @param board Tablero actual del juego.
 * @param player Jugador actual.
 */
function promptPlayer(board: Board, player: Player) {
  console.log(`Es el turno del ${player.name}. Introduce el número de columna en la que quieres poner ficha (0-6):`);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on("line", (colStr: string) => {
    rl.close();

    const col = parseInt(colStr);
    if (isNaN(col)) {
      console.log("Entrada no válida");
      promptPlayer(board, player);
    } else if (board.placePiece(col, player.color)) {
      board.print();

      if (board.checkWin(player.color)) {
        console.log(`¡${player.name} ha ganado!`);
        return;
      }

      if (player === player1) {
        promptPlayer(board, player2);
      } else {
        promptPlayer(board, player1);
      }
    } else {
      console.log("Columna llena");
      promptPlayer(board, player);
    }
  });
}

promptPlayer(board, player1);