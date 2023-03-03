import 'mocha';
import { expect } from 'chai';
import { Artista } from '../../src/ejercicio-1/Artista';
import { BibliotecaMusical } from '../../src/ejercicio-1/BibliotecaMusical';
import { Disco } from '../../src/ejercicio-1/Discografia';
import { Cancion } from '../../src/ejercicio-1/Cancion';


describe('BibliotecaMusical', () => {
  let biblioteca: BibliotecaMusical;

  beforeEach(() => {
    biblioteca = new BibliotecaMusical();
  });

  describe('agregarArtista', () => {
    it('debería poder agregar un artista', () => {
      const artista = new Artista('Juanes', 20000000, []);
      biblioteca.agregarArtista(artista);
      expect(biblioteca.getArtistas()).to.deep.equal([artista]);
    });
  });

  describe('buscarArtistas', () => {
    it('debería poder buscar artistas cuyo nombre contenga la cadena especificada', () => {
      const artista1 = new Artista('Juanes', 20000000, []);
      const artista2 = new Artista('Juan Luis Guerra', 15000000, []);
      biblioteca.agregarArtista(artista1);
      biblioteca.agregarArtista(artista2);
      const resultado = biblioteca.buscarArtistas('Juan');
      expect(resultado).to.deep.equal([artista1, artista2]);
    });

    it('debería devolver un array vacío si no encuentra artistas', () => {
      const resultado = biblioteca.buscarArtistas('Shakira');
      expect(resultado).to.deep.equal([]);
    });
  });

  describe('buscarDiscografias', () => {
    it('debería poder buscar discografías cuyo nombre contenga la cadena especificada', () => {
      const cancion1 = new Cancion('La camisa negra', 230, ['Rock', 'Pop'], true, 10000000);
      const cancion2 = new Cancion('A Dios le pido', 320, ['Pop', 'Rock'], true, 15000000);
      const disco1 = new Disco('Mi sangre', 2004, [cancion1]);
      const disco2 = new Disco('Un Día Normal', 2002, [cancion2]);
      const artista = new Artista('Juanes', 20000000, [disco1, disco2]);
      biblioteca.agregarArtista(artista);
      const resultado = biblioteca.buscarDiscografias('normal');
      expect(resultado).to.deep.equal([disco2]);
    });

    it('debería devolver un array vacío si no encuentra discografías', () => {
      const resultado = biblioteca.buscarDiscografias('X');
      expect(resultado).to.deep.equal([]);
    });
  });

  describe('buscarCanciones', () => {
    it('debería poder buscar canciones cuyo nombre contenga la cadena especificada', () => {
      const cancion1 = new Cancion('La camisa negra', 230, ['Rock', 'Pop'], true, 10000000);
      const cancion2 = new Cancion('A Dios le pido', 320, ['Pop', 'Rock'], true, 15000000);
      const disco1 = new Disco('Mi sangre', 2004, [cancion1]);
      const disco2 = new Disco('Un Día Normal', 2002, [cancion2]);
      const artista = new Artista('Juanes', 2000000, [disco1, disco2]);
      biblioteca.agregarArtista(artista);
      const cancionesEncontradas = biblioteca.buscarCanciones('Cam');
      expect(cancionesEncontradas).to.have.lengthOf(1);
      expect(cancionesEncontradas[0].nombre).to.equal('La camisa negra');
    });

    it('debería devolver un array vacío si no se encuentran canciones', () => {
        const cancion1 = new Cancion('La camisa negra', 230, ['Rock', 'Pop'], true, 10000000);
        const cancion2 = new Cancion('A Dios le pido', 320, ['Pop', 'Rock'], true, 15000000);
        const disco1 = new Disco('Mi sangre', 2004, [cancion1]);
        const disco2 = new Disco('Un Día Normal', 2002, [cancion2]);
        const artista = new Artista('Juanes', 2000000, [disco1, disco2]);
        biblioteca.agregarArtista(artista);
        const cancionesEncontradas = biblioteca.buscarCanciones('No existo');
        expect(cancionesEncontradas).to.have.lengthOf(0);
      });
  });

  describe('numCancionesDisco', () => {
    it('debería poder calcular el número de canciones de un disco', () => {
      const cancion1 = new Cancion('Diamonds', 227, ['Pop'], true, 1000000000);
      const cancion2 = new Cancion('Umbrella', 280, ['Pop'], false, 500000000);
      const discografia = new Disco('Good Girl Gone Bad', 2007, [cancion1, cancion2]);
      const artista = new Artista('Rihanna', 100000000, [discografia]);
      biblioteca.agregarArtista(artista);
      const numCanciones = biblioteca.numCancionesDisco('Good Girl Gone Bad');
      expect(numCanciones).to.equal(2);
    });

    it('debería devolver 0 si no se encuentra el disco', () => {
      const cancion1 = new Cancion('Diamonds', 227, ['Pop'], true, 1000000000);
      const cancion2 = new Cancion('Umbrella', 280, ['Pop'], false, 500000000);
      const discografia = new Disco('Good Girl Gone Bad', 2007, [cancion1, cancion2]);
      const artista = new Artista('Rihanna', 100000000, [discografia]);
      biblioteca.agregarArtista(artista);
      const numCanciones = biblioteca.numCancionesDisco('Inventado');
      expect(numCanciones).to.equal(0);
      });
    });
    
  });
