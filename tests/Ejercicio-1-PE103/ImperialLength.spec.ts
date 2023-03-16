import { expect } from 'chai';
import { ImperialLength } from '../../src/Ejercicio-1-PE103/ImperialLength';

describe('ImperialLength', () => {
  describe('getPulgadas', () => {
    it('debería devolver la longitud en pulgadas', () => {
      const imperialLength = new ImperialLength(36);
      expect(imperialLength.getPulgadas()).to.equal(36);
    });
  });

  describe('setPulgadas', () => {
    it('debería establecer la longitud en pulgadas', () => {
      const imperialLength = new ImperialLength(36);
      imperialLength.setPulgadas(24);
      expect(imperialLength.getPulgadas()).to.equal(24);
    });
  });

  describe('getPies', () => {
    it('debería devolver la longitud en pies', () => {
      const imperialLength = new ImperialLength(36);
      expect(imperialLength.getPies()).to.equal(3);
    });
  });

  describe('setPies', () => {
    it('debería establecer la longitud en pies', () => {
      const imperialLength = new ImperialLength(36);
      imperialLength.setPies(6);
      expect(imperialLength.getPulgadas()).to.equal(72);
    });
  });

  describe('getYardas', () => {
    it('deberíua devolver la longitud en yardas', () => {
      const imperialLength = new ImperialLength(108);
      expect(imperialLength.getYardas()).to.equal(3);
    });
  });

  describe('setYards', () => {
    it('debería establecer la longitud en yardas', () => {
      const imperialLength = new ImperialLength(36);
      imperialLength.setYardas(1);
      expect(imperialLength.getPulgadas()).to.equal(1 * 3 * 12);
    });
  });

  describe('getMillas', () => {
    it('debería devolver la longitud en millas', () => {
      const imperialLength = new ImperialLength(1760 * 3 * 12);
      expect(imperialLength.getMillas()).to.equal(1);
    });
  });

  describe('setMillas', () => {
    it('debería establecer la longitud en millas', () => {
      const imperialLength = new ImperialLength(36);
      imperialLength.setMillas(0.5);
      expect(imperialLength.getPulgadas()).to.equal(0.5 * 1760 * 3 * 12);
    });
  });
});