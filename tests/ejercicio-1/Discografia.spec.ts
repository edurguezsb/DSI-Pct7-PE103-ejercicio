import 'mocha';
import { expect } from 'chai';
import { Discografia } from '../../src/ejercicio-1/Discografia';
import { Cancion } from '../../src/ejercicio-1/Cancion';


describe('Discografia', () => {
    let disco: Discografia;
    let canciones: Cancion[];
  
    beforeEach(() => {
      canciones = [
        new Cancion('Enter Sandman', 330, ['Rock'], true, 100),
        new Cancion('Master of Puppets', 515, ['Metal'], false, 80),
        new Cancion('Nothing Else Matters', 390, ['Rock', 'Ballad'], true, 90),
      ];
  
      disco = new Discografia('Metallica', 1991, canciones);
    });
  
    it('debería tener un nombre', () => {
      expect(disco.nombre).to.equal('Metallica');
    });
  
    it('debería tener un año de publicación', () => {
      expect(disco.anioPublicacion).to.equal(1991);
    });
  
    it('debería tener una lista de canciones', () => {
      expect(disco.canciones).to.equal(canciones);
    });
  
      it('debería agregar una canción a su lista de canciones', () => {
        const cancion1 = new Cancion('Cancion 1', 180, ['Rock'], true, 100);
        const cancion2 = new Cancion('Cancion 2', 200, ['Pop'], false, 50);
        const discografia = new Discografia('Mi discografia', 2022, [cancion1]);
        discografia.agregarCancion(cancion2);
        expect(discografia.canciones).to.deep.equal([cancion1, cancion2]);
      });
    
  
    it('debería poder calcular el número total de reproducciones', () => {
      expect(disco.numReproduccionesTotal()).to.equal(270);
    });
  
    it('debería poder calcular el número de canciones', () => {
      expect(disco.numCanciones()).to.equal(3);
    });
  
    it('debería poder calcular la duración total en segundos', () => {
      expect(disco.duracionTotal()).to.equal(1235);
    });
  });