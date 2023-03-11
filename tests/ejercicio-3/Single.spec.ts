import 'mocha';
import { expect } from 'chai';
import {Cancion} from "../../src/ejercicio-3/Cancion";
import {Single} from "../../src/ejercicio-3/Single";


describe('Single', () => {
    describe('creación', () => {
      it('debería crear un nuevo single con los valores proporcionados', () => {
        const cancion1 = new Cancion('Amorfoda', 350, ['Rap', 'Romantiqueo'], false, 45673456);
        const disco = new Single('Amorfoda', 2016, cancion1);
  
        expect(disco.nombre).to.equal('Amorfoda');
        expect(disco.año).to.equal(2016);
        expect(disco.cancion).to.equal(cancion1);
      });
    });
  
    describe('actualización', () => {
      let disco: Single;
      let cancion1: Cancion;
      let cancion2: Cancion;
  
      beforeEach(() => {
        cancion1 = new Cancion('Amorfoda', 350, ['Rap', 'Romantiqueo'], false, 45673456);
        cancion2 = new Cancion('Bebesita', 189, ['Rap', 'Romantiqueo'], false, 110034);
        disco = new Single('Amorfoda', 2016, cancion1);
      });
  
      it('debería actualizar el nombre del single', () => {
        disco.nombre = 'Bebesita';
        expect(disco.nombre).to.equal('Bebesita');
      });
  
      it('debería actualizar el año del single', () => {
        disco.año = 2018;
        expect(disco.año).to.equal(2018);
      });
  
      it('debería actualizar la canción del single', () => {
        disco.cancion = cancion2;
        expect(disco.cancion).to.equal(cancion2);
      });
    });
  });