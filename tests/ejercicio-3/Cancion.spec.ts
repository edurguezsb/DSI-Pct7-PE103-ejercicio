import 'mocha';
import { expect } from 'chai';
import { Cancion } from '../../src/ejercicio-3/Cancion';

describe('Cancion', () => {
    it('debería crear una instancia de Cancion con los valores pasados', () => {
      const cancion = new Cancion('Bebesita', 300, ['Trap'], true, 100);
      expect(cancion.nombre).to.equal('Bebesita');
      expect(cancion.duracionSegundos).to.equal(300);
      expect(cancion.generos).to.deep.equal(['Trap']);
      expect(cancion.esSingle).to.equal(true);
      expect(cancion.numReproducciones).to.equal(100);
    });

    it('debería lanzar un error si se intenta crear una instancia de Cancion con una duración negativa', () => {
      expect(() => {
        new Cancion('Bebesita', -300, ['trap'], true, 100);
      }).to.throw(Error);
    });

    it('debería lanzar un error si se intenta crear una instancia de Cancion con un número de reproducciones negativo', () => {
      expect(() => {
        new Cancion('Bebesita', 300, ['Rock'], true, -100);
      }).to.throw(Error);
    });
  });
