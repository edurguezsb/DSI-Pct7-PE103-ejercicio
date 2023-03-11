import 'mocha';
import { expect } from 'chai';
import { SearchableCollection } from '../../src/ejercicio-PE103-1/SearchableCollection';


class Persona {
  constructor(public nombre: string, public edad: number) {}
}

class ColeccionPersonas extends SearchableCollection<Persona> {
  search(term: string): Persona[] {
    return this.items.filter((p) => p.nombre.includes(term));
  }
}

describe('SearchableCollection', () => {
  let coleccion: ColeccionPersonas;

  beforeEach(() => {
    coleccion = new ColeccionPersonas();
    coleccion.addItem(new Persona('Ana', 23));
    coleccion.addItem(new Persona('Juan', 31));
    coleccion.addItem(new Persona('María', 42));
  });

  it('debería permitir agregar elementos a la colección', () => {
    expect(coleccion.getNumberOfItems()).to.equal(3);
    coleccion.addItem(new Persona('Pedro', 29));
    expect(coleccion.getNumberOfItems()).to.equal(4);
  });

  it('debería permitir obtener un elemento de la colección', () => {
    expect(coleccion.getItem(1)?.nombre).to.equal('Juan');
    expect(coleccion.getItem(3)?.nombre).to.be.undefined;
  });

  it('debería permitir eliminar un elemento de la colección', () => {
    expect(coleccion.removeItem(1)?.nombre).to.equal('Juan');
    expect(coleccion.getNumberOfItems()).to.equal(2);
    expect(coleccion.removeItem(3)).to.be.undefined;
    expect(coleccion.getNumberOfItems()).to.equal(2);
  });

  it('debería permitir realizar una búsqueda en la colección', () => {
    const resultados = coleccion.search('Mar');
    expect(resultados.length).to.equal(1);
    expect(resultados[0].nombre).to.equal('María');
  });
});