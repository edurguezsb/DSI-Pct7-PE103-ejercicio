import 'mocha';
import { expect } from 'chai';
import { NumericSearchableCollection } from '../../src/ejercicio-PE103-1/NumericSearchableCollection';


describe("NumericSearchableCollection", () => {
    let collection: NumericSearchableCollection;
  
    beforeEach(() => {
      collection = new NumericSearchableCollection();
      collection.addItem(1);
      collection.addItem(2);
      collection.addItem(3);
      collection.addItem(2);
    });
  
    it("la búsqueda debería devolver un array de numeros que coincidan con las búsqueda", () => {
      expect(collection.search(2)).to.eql([2, 2]);
    });
  
    it("la búsqueda debería devolver un array vacío si no hay numeros que coincidan con la búsqueda", () => {
      expect(collection.search(4)).to.eql([]);
    });
  });


  describe('NumericSearchableCollection', () => {
    let collection: NumericSearchableCollection;
  
    beforeEach(() => {
      collection = new NumericSearchableCollection();
    });

  describe('addItem', () => {
    it('debe agregar un número a la colección', () => {
      collection.addItem(1);
      expect(collection.getNumberOfItems()).to.equal(1);
    });
  });

  describe('getItem', () => {
    it('debe devolver el número en el índice especificado', () => {
      collection.addItem(1);
      expect(collection.getItem(0)).to.equal(1);
    });

    it('debería devolver indefinido si el índice está fuera de los límites', () => {
      expect(collection.getItem(0)).to.be.undefined;
    });
  });

  describe('removeItem', () => {
    it('debe eliminar el número en el índice especificado', () => {
      collection.addItem(1);
      collection.removeItem(0);
      expect(collection.getNumberOfItems()).to.equal(0);
    });

    it('debe devolver el número eliminado', () => {
      collection.addItem(1);
      expect(collection.removeItem(0)).to.equal(1);
    });
  });

  describe('getNumberOfItems', () => {
    it('debe devolver el número de artículos en la colección', () => {
      collection.addItem(1);
      collection.addItem(2);
      expect(collection.getNumberOfItems()).to.equal(2);
    });
  });

  describe('search', () => {
    it('debe devolver una serie de números que coincidan con el término de búsqueda', () => {
      collection.addItem(1);
      collection.addItem(2);
      collection.addItem(3);
      collection.addItem(2);
      expect(collection.search(2)).to.deep.equal([2, 2]);
    });

    it('debería devolver una matriz vacía si ningún número coincide con el término de búsqueda', () => {
      collection.addItem(1);
      collection.addItem(2);
      collection.addItem(3);
      expect(collection.search(4)).to.be.an('array').that.is.empty;
    });
  });
});