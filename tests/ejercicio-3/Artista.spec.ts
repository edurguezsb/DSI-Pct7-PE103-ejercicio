import 'mocha';
import { expect } from 'chai';
import { Artista } from '../../src/ejercicio-3/Artista';
import {Cancion} from "../../src/ejercicio-3/Cancion";
import {Disco} from "../../src/ejercicio-3/Disco";



describe('Artista', () => {

    it('debería devolver el nombre del artista', () => {
      const artista = new Artista('Quevedo', 1000000000, []);
      
      expect(artista.nombre).to.be.equal('Quevedo');
    });

    it('debería actualizar el nombre del artista', () => {
      const artista = new Artista('Quevedo', 1000000000, []);
      artista.nombre = 'Pepe Benavente';
      
      expect(artista.nombre).to.be.equal('Pepe Benavente');
    });

    it('debería devolver el número de oyentes', () => {
      const artista = new Artista('Quevedo', 1000000000, []);
      
      expect(artista.oyentes).to.be.equal(1000000000);
    });

    it('debería actualizar el número de oyentes', () => {
      const artista = new Artista('Quevedo', 1000000000, []);
      artista.oyentes = 70000000;
      
      expect(artista.oyentes).to.be.equal(70000000);
    });

    it('debería devolver la discografía del artista', () => {
      const cancion1 = new Cancion('Quedate', 220, ['Rap', 'Trap'], false, 34562345);
      const cancion2 = new Cancion('Cayo la noche', 300, ['Rap', 'Trap'], false, 453634);
      const canciones = [cancion1, cancion2];
      const disco = new Disco('Donde quiero estar', 2022, canciones);
      const discos = [disco];
      const artista = new Artista('Quevedo', 1000000000, discos);
        
      expect(artista.discografia).to.be.deep.equal(discos);
    });
  
    it('debería actualizar la discografía del artista', () => {
      const cancion1 = new Cancion('Quedate', 220, ['Rap', 'Trap'], false, 34562345);
      const cancion2 = new Cancion('Cayo la noche', 300, ['Rap', 'Trap'], false, 453634);
      const canciones = [cancion1, cancion2];
      const disco1 = new Disco('Donde quiero estar', 2022, canciones);
      const disco2 = new Disco('Playa del ingles', 2023, canciones);
      const discos = [disco1, disco2];
      const artista = new Artista('Quevedo', 1000000000, []);
      artista.discografia = discos;
        
      expect(artista.discografia).to.be.deep.equal(discos);
    });
  });