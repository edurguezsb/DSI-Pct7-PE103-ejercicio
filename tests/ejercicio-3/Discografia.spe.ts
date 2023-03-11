import 'mocha';
import { expect } from 'chai';
import { Cancion } from '../../src/ejercicio-3/Cancion';
import { Discografia } from '../../src/ejercicio-3/Discografia'

describe("Discografia", () => {
  it("debería crear una discografía con la colección de discos especificada", () => {
    const discos = [new Disco("25", 2015, []), new Disco("21", 2011, [])];
    const discografia = new Discografia(discos);
    expect(discografia.discos).to.deep.equal(discos);
  });

  it("debería crear una discografía con la colección de discos especificada", () => {
    const discos = [new Disco("25", 2015, []), new Disco("21", 2011, [])];
    const discografia = new Discografia(discos);
    expect(discografia.discos).to.deep.equal(discos);
  });

  it("Debería crear una discografía con la colección de discos especificada", () => {
    const discos = [new Disco("25", 2015, []), new Disco("21", 2011, [])];
    const discografia = new Discografia(discos);
    expect(discografia.discos).to.deep.equal(discos);
  });
});
