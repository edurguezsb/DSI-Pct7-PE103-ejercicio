import 'mocha';
import { expect } from 'chai';
import {Cancion} from "../../src/ejercicio-3/Cancion";
import {Disco} from "../../src/ejercicio-3/Disco";



describe('Disco', () => {
    let cancion1: Cancion;
    let cancion2: Cancion;
    let canciones: Cancion[];
    let disco: Disco;
  
    beforeEach(() => {
      cancion1 = new Cancion('Dracukeo', 200, ['Rap', 'Trap'], false, 86787456);
      cancion2 = new Cancion('Trap Life', 150, ['Rap', 'Trap'], false, 235467567);
      canciones = [cancion1, cancion2];
      disco = new Disco('KeoLand', 2018, canciones);
    });
  
    it('debería devolver el nombre del disco', () => {
      expect(disco.nombre).to.equal('KeoLand');
    });
  
    it('debería actualizar el nombre del disco', () => {
      disco.nombre = 'Keo Gang';
      expect(disco.nombre).to.equal('Keo Gang');
    });
  
    it('debería devolver el año de lanzamiento del disco', () => {
      expect(disco.año).to.equal(2018);
    });
  
    it('debería actualizar el año de lanzamiento del disco', () => {
      disco.año = 2020;
      expect(disco.año).to.equal(2020);
    });
  
    it('debería devolver las canciones del disco', () => {
      expect(disco.canciones).to.deep.equal(canciones);
    });

    it('debería actualizar el array de canciones', () => {
        const nuevaCancion = new Cancion('Superstars', 320, ['Rap', 'Trap'], false, 2135464);
        const nuevasCanciones = [cancion1, nuevaCancion];
        disco.canciones = nuevasCanciones;
        expect(disco.canciones).to.deep.equal(nuevasCanciones);
      });
  });