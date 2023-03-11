import "mocha";
import { expect } from "chai";
import {PeliculasCollection} from "../../src/ejercicio-1/Movies";


describe("Movies", () => {
    it("searchDuration debería devolver un array de películas con la duración buscada", () => {
      const movies = [
        { nombre: "Inception", año: 2010, duracion: 152 },
        { nombre: "The Godfather", año: 1972, duracion: 175 },
        { nombre: "The Dark Knight", año: 2018, duracion: 152 },
      ];
      const moviesCollection = new PeliculasCollection(movies);
      const result = moviesCollection.searchDuration(152);
      expect(result).to.have.lengthOf(2);
      expect(result[0]).to.deep.include({
        nombre: "Inception",
        año: 2010,
        duracion: 152,
      });
      expect(result[1]).to.deep.include({
        nombre: "The Dark Knight",
        año: 2018,
        duracion: 152,
      });
    });

    it("searchYear debería devolver un array con las películas que salieron ese año", () => {
      const peliculas = [
        { nombre: "The Dark Knight", año: 2018, duracion: 152 },
        { nombre: "Inception", año: 2010, duracion: 152 },
      ];
      const peliculasCollection = new PeliculasCollection(peliculas);
      const result = peliculasCollection.searchYear(2010);
      expect(result).to.have.lengthOf(1);
      expect(result[0]).to.deep.include({
        nombre: "Inception",
        año: 2010,
        duracion: 152,
      });
    });

    it("searchName debería devolver un array con las películas que tienen ese nombre", () => {
      const peliculas = [
        { nombre: "The Dark Knight", año: 2018, duracion: 152 },
        { nombre: "Inception", año: 2010, duracion: 152 },
      ];
      const peliculasCollection = new PeliculasCollection(peliculas);
      const result = peliculasCollection.searchName("Inception");
      expect(result).to.have.lengthOf(1);
      expect(result[0]).to.deep.include({
        nombre: "Inception",
        año: 2010,
        duracion: 152,
      });
    });
  });