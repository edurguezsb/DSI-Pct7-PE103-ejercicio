import 'mocha';
import { expect } from 'chai';
import { Cancion } from '../../src/ejercicio-1/Cancion';

describe('Cancion', () => {
    it('debería crear una instancia de Cancion con los valores pasados', () => {
      const cancion = new Cancion('Cancion 1', 180, ['Rock'], true, 100);
      expect(cancion.nombre).to.equal('Cancion 1');
      expect(cancion.duracionSegundos).to.equal(180);
      expect(cancion.generos).to.deep.equal(['Rock']);
      expect(cancion.esSingle).to.equal(true);
      expect(cancion.numReproducciones).to.equal(100);
    });

    it('debería lanzar un error si se intenta crear una instancia de Cancion con una duración negativa', () => {
      expect(() => {
        new Cancion('Cancion 1', -180, ['Rock'], true, 100);
      }).to.throw(Error);
    });

    it('debería lanzar un error si se intenta crear una instancia de Cancion con un número de reproducciones negativo', () => {
      expect(() => {
        new Cancion('Cancion 1', 180, ['Rock'], true, -100);
      }).to.throw(Error);
    });
  });

