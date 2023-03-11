import 'mocha';
import { expect } from 'chai';
import {Cancion} from "../../src/ejercicio-3/Cancion";



describe('Cancion', () => {
it('debería crear una nueva canción con los valores correctos', () => {
  const generos = ["Rap", "HipHop"];
  const reproducciones = 345234;
  const cancion = new Cancion("René", 620, generos, false, reproducciones);

  cancion.nombre = "René";
  cancion.duracion = 620;
  cancion.generos = generos;
  cancion.single = false;
  cancion.reproducciones = reproducciones;

  expect(cancion.nombre).to.be.equal("René");
  expect(cancion.duracion).to.be.equal(620);
  expect(cancion.generos).to.be.deep.equal(generos);
  expect(cancion.single).to.be.equal(false);
  expect(cancion.reproducciones).to.be.equal(reproducciones);
});

it('debería actualizar el nombre de la canción', () => {
  const cancion = new Cancion("René", 620, ["Rap", "HipHop"], false, 345234);
  cancion.nombre = "Muerte en Hawaii";
  expect(cancion.nombre).to.be.equal("Muerte en Hawaii");
});

it('debería actualizar la duración de la canción', () => {
  const cancion = new Cancion("René", 620, ["Rap", "HipHop"], false, 345234);
  cancion.duracion = 500;
  expect(cancion.duracion).to.be.equal(500);
});

it('debería actualizar los géneros de la canción', () => {
  const cancion = new Cancion("René", 620, ["Rap", "HipHop"], false, 345234);
  cancion.generos = ["Pop", "Trap"];
  expect(cancion.generos).to.be.deep.equal(["Pop", "Trap"]);
});

it('debería actualizar el valor de single de la canción', () => {
  const cancion = new Cancion("René", 620, ["Rap", "HipHop"], false, 345234);
  cancion.single = true;
  expect(cancion.single).to.be.equal(true);
});

it('debería actualizar el número de reproducciones de la canción', () => {
  const cancion = new Cancion("René", 620, ["Rap", "HipHop"], false, 345234);
  cancion.reproducciones = 6000000;
  expect(cancion.reproducciones).to.be.equal(6000000);
});
});






