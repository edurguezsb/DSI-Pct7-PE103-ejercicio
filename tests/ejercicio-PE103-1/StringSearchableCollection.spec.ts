import 'mocha';
import { expect } from 'chai';
import { StringSearchableCollection } from '../../src/ejercicio-PE103-1/StringSearchableCollection';


describe("StringSearchableCollection", () => {
  let collection: StringSearchableCollection;

  beforeEach(() => {
    collection = new StringSearchableCollection();
    collection.addItem("hello");
    collection.addItem("world");
    collection.addItem("foo");
    collection.addItem("bar");
  });

  it("debería devolver un array de strings que contengan el término buscado", () => {
    expect(collection.search("o")).to.eql(["hello", "world", "foo"]);
  });

  it("debería devolver un array vacío si no hay ningún string que contenga el término de búsqueda", () => {
    expect(collection.search("z")).to.eql([]);
  });
});

describe('StringSearchableCollection', () => {
    let collection: StringSearchableCollection;
  
    beforeEach(() => {
      collection = new StringSearchableCollection();
    });
  
    it('debería agregar elementos a la colección', () => {
      collection.addItem('hola');
      collection.addItem('adiós');
      expect(collection.getNumberOfItems()).to.equal(2);
    });
  
    it('debería obtener elementos de la colección', () => {
      collection.addItem('hola');
      collection.addItem('adiós');
      expect(collection.getItem(0)).to.equal('hola');
      expect(collection.getItem(1)).to.equal('adiós');
      expect(collection.getItem(2)).to.be.undefined;
    });
  
    it('debería eliminar elementos de la colección', () => {
      collection.addItem('hola');
      collection.addItem('adiós');
      collection.removeItem(0);
      expect(collection.getNumberOfItems()).to.equal(1);
      expect(collection.getItem(0)).to.equal('adiós');
    });
  
    it('debería devolver un array vacío si la colección está vacía', () => {
      expect(collection.search('hola')).to.deep.equal([]);
    });
  });
