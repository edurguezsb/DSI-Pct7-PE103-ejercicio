import 'mocha';
import { expect } from 'chai';
import { Artista } from '../../src/ejercicio-3/Artista';
import { Discografia } from "../../src/ejercicio-3/Discografia";

describe("Artista", () => {
  it("Debería crear un artista con el nombre especificado", () => {
    const nombre = "Adele";
    const oyentesMensuales = 1000000;
    const discografia = new Discografia([]);
    const artista = new Artista(nombre, oyentesMensuales, discografia);
    expect(artista.nombre).to.equal(nombre);
  });

  it("Debería crear un artista con el número de oyentes mensuales especificado", () => {
    const nombre = "Adele";
    const oyentesMensuales = 1000000;
    const discografia = new Discografia([]);
    const artista = new Artista(nombre, oyentesMensuales, discografia);
    expect(artista.oyentesMensuales).to.equal(oyentesMensuales);
  });

  it("Debería crear un artista con la discografía especificada", () => {
    const nombre = "Adele";
    const oyentesMensuales = 1000000;
    const discografia = new Discografia([]);
    const artista = new Artista(nombre, oyentesMensuales, discografia);
    expect(artista.discografia).to.equal(discografia);
  });
});
