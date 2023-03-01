import 'mocha';
import { expect } from 'chai';
import { Artista } from '../../src/ejercicio-1/Artista';


describe('Artista', () => {
  let artista: Artista;

  beforeEach(() => {
    artista = new Artista('Metallica', 2000000, []);
  });

  it('debería tener un nombre', () => {
    expect(artista.nombre).to.equal('Metallica');
  });

  it('debería tener un número de oyentes mensuales', () => {
    expect(artista.oyentesMensuales).to.equal(2000000);
  });

  it('debería tener una discografía vacía inicialmente', () => {
    expect(artista.discografia).to.be.an('array').that.is.empty;
  });
});
