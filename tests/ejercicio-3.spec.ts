import 'mocha';
import {expect} from 'chai';
import { ChessCell, ChessBoard, checkAtack } from '../src/ejercicio-3';

describe('chessboard operations', () => {
    it('should return true if two queens can attack each other horizontally', () => {
      const board: ChessBoard = [      ["-", "-", "-", "-", "-", "-", "-", "-"],
        ["-", "-", "-", "-", "-", "-", "-", "-"],
        ["-", "-", "-", "-", "-", "-", "-", "-"],
        ["-", "-", "-", "-", "N", "-", "-", "-"],
        ["-", "-", "-", "-", "-", "-", "-", "-"],
        ["-", "-", "-", "-", "-", "-", "-", "-"],
        ["-", "-", "-", "-", "B", "-", "-", "-"],
        ["-", "-", "-", "-", "-", "-", "-", "-"]
      ];
      const result = checkAtack(board);
      expect(result).to.be.true;
    });
  
    it('should return true if two queens can attack each other vertically', () => {
      const board: ChessBoard = [      ["-", "-", "-", "-", "-", "-", "-", "-"],
        ["-", "-", "-", "-", "-", "-", "-", "-"],
        ["-", "-", "-", "-", "B", "-", "-", "-"],
        ["-", "-", "-", "-", "-", "-", "-", "-"],
        ["-", "-", "-", "-", "-", "-", "-", "-"],
        ["-", "-", "-", "-", "N", "-", "-", "-"],
        ["-", "-", "-", "-", "-", "-", "-", "-"],
        ["-", "-", "-", "-", "-", "-", "-", "-"]
      ];
      const result = checkAtack(board);
      expect(result).to.be.true;
    });
  
    it('should return true if two queens can attack each other diagonally', () => {
      const board: ChessBoard = [      ["-", "-", "-", "-", "-", "-", "-", "-"],
        ["-", "-", "-", "-", "-", "-", "-", "-"],
        ["-", "-", "-", "-", "-", "-", "-", "-"],
        ["-", "-", "-", "N", "-", "-", "-", "-"],
        ["-", "-", "-", "-", "-", "-", "-", "-"],
        ["-", "-", "-", "-", "-", "-", "-", "-"],
        ["-", "-", "-", "-", "-", "-", "B", "-"],
        ["-", "-", "-", "-", "-", "-", "-", "-"]
      ];
      const result = checkAtack(board);
      expect(result).to.be.true;
    });
  
    it('should return false if two queens cannot attack each other', () => {
      const board: ChessBoard = [      ["-", "-", "-", "-", "-", "-", "-", "-"],
        ["-", "-", "-", "-", "-", "-", "-", "-"],
        ["-", "-", "-", "-", "-", "-", "-", "-"],
        ["-", "-", "-", "N", "-", "-", "-", "-"],
        ["-", "-", "-", "-", "-", "-", "-", "-"],
        ["-", "-", "-", "-", "-", "-", "-", "-"],
        ["-", "-", "-", "-", "-", "-", "-", "B"],
        ["-", "-", "-", "-", "-", "-", "-", "-"]
      ];
      const result = checkAtack(board);
      expect(result).to.be.false;
    });
  });