import 'mocha';
import { expect } from 'chai';
import { Cancion } from '../../src/ejercicio-3/Cancion';



describe("Cancion", () => {
  it("Debería crear una canción con el nombre especificado", () => {
    const nombre = "Hello";
    const duracion = 300;
    const generos = ["Pop", "Soul"];
    const single = true;
    const reproducciones = 1000000;
    const cancion = new Cancion(
      nombre,
      duracion,
      generos,
      single,
      reproducciones
    );
    expect(cancion.nombre).to.equal(nombre);
  });

  it("Debería crear una canción con la duración especificada", () => {
    const nombre = "Hello";
    const duracionSegundos = 300;
    const generos = ["Pop", "Soul"];
    const single = true;
    const reproducciones = 1000000;
    const cancion = new Cancion(
      nombre,
      duracionSegundos,
      generos,
      single,
      reproducciones
    );
    expect(cancion.duracionSegundos).to.equal(duracionSegundos);
  });



  it("Debería crear una canción con los géneros especificados", () => {
    const nombre = "Hello";
    const duracion = 300;
    const generos = ["Pop", "Soul"];
    const single = true;
    const reproducciones = 1000000;
    const cancion = new Cancion(
      nombre,
      duracion,
      generos,
      single,
      reproducciones
    );
    expect(cancion.generos).to.deep.equal(generos);
  });

  it("Debería crear una canción con el estado de single especificado", () => {
    const nombre = "Hello";
    const duracion = 300;
    const generos = ["Pop", "Soul"];
    const single = true;
    const reproducciones = 1000000;
    const cancion = new Cancion(
      nombre,
      duracion,
      generos,
      single,
      reproducciones
    );
    expect(cancion.single).to.equal(single);
  });

  it("Debería crear una canción con el número de reproducciones especificado", () => {
    const nombre = "Hello";
    const duracionSegundos = 300;
    const generos = ["Pop", "Soul"];
    const single = true;
    const numReproducciones = 1000000;
    const cancion = new Cancion(
      nombre,
      duracionSegundos,
      generos,
      single,
      numReproducciones
    );
    expect(cancion.numReproducciones).to.equal(numReproducciones);
  });
});