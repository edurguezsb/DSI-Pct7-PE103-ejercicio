import { Board } from "../../src/ejercicio-2/Conecta4";
import { expect } from "chai";
import "mocha";

describe("Board", () => {
  describe("placePiece()", () => {
    it("debería devolver true si la ficha se pone en una columna vacía", () => {
      const board = new Board();
      const result = board.placePiece(0, "X");
      expect(result).to.be.true;
    });

    it("debería devolver false si la columna esta llena", () => {
      const board = new Board();
      board.placePiece(0, "X");
      board.placePiece(0, "@");
      board.placePiece(0, "X");
      board.placePiece(0, "@");
      board.placePiece(0, "X");
      board.placePiece(0, "@");
      const result = board.placePiece(0, "X");
      expect(result).to.be.false;
    });

    it("debería devolver false si la columna elegida no está en el rango 0-6", () => {
      const board = new Board();
      const result = board.placePiece(-1, "X");
      expect(result).to.be.false;
    });
  });
});

  describe("checkWin()", () => {
    it("debería devolver true si 4 fichas están en línea horizontal", () => {
      const board = new Board();
      board.placePiece(0, "X");
      board.placePiece(1, "X");
      board.placePiece(2, "X");
      board.placePiece(3, "X");
      const result = board.checkWin("X");
      expect(result).to.be.true;
    });

    it("debería devolver true si 4 fichas están en línea vertical", () => {
      const board = new Board();
      board.placePiece(0, "@");
      board.placePiece(0, "@");
      board.placePiece(0, "@");
      board.placePiece(0, "@");
      const result = board.checkWin("@");
      expect(result).to.be.true;
    });

    it("debería devolver true si 4 fichas están en diagonal de izquierda a derecha y de arriba a bajo", () => {
      const board = new Board();
      board.placePiece(0, "X");
      board.placePiece(1, "@");
      board.placePiece(1, "X");
      board.placePiece(2, "@");
      board.placePiece(2, "@");
      board.placePiece(2, "X");
      board.placePiece(3, "@");
      board.placePiece(3, "@");
      board.placePiece(3, "@");
      board.placePiece(3, "X");
      const result = board.checkWin("X");
      expect(result).to.be.true;
    });

    it("debería devolver true si 4 fichas están en diagonal de izquierda a derecha y de abajo a arriba)", () => {
      const board = new Board();
      board.placePiece(0, "@");
      board.placePiece(0, "@");
      board.placePiece(0, "@");
      board.placePiece(0, "X");
      board.placePiece(1, "@");
      board.placePiece(1, "@");
      board.placePiece(1, "X");
      board.placePiece(2, "@");
      board.placePiece(2, "X");
      board.placePiece(3, "X");
      const result = board.checkWin("X");
      expect(result).to.be.true;
    });

    it("debería devolver false si no hay 4 fichas conectadas de ninguna manera", () => {
      const board = new Board();
      board.placePiece(0, "@");
      board.placePiece(1, "@");
      board.placePiece(2, "@");
      board.placePiece(3, "X");
      board.placePiece(3, "@");
      board.placePiece(4, "X");
      board.placePiece(4, "X");
      board.placePiece(5, "X");
      const result = board.checkWin("@");
      expect(result).to.be.false;
    });
});
    