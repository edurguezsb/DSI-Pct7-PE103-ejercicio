import "mocha";
import { expect } from "chai";
import {SeriesCollection} from "../../src/ejercicio-1/Series";
import {DocumentalesCollection} from "../../src/ejercicio-1/Documentaries";
import {PeliculasCollection} from "../../src/ejercicio-1/Movies";

describe("Streamable", () => {
    it("searchYear debería devolver un array con las series del año buscado", () => {
      const series = [
        { nombre: "You", año: 2018, temporadas: 4 },
        { nombre: "Dragon ball", año: 1985, temporadas: 20 },
      ];
      const seriesCollection = new SeriesCollection(series);
      const result = seriesCollection.searchYear(1985);
      expect(result).to.have.lengthOf(1);
      expect(result[0]).to.deep.include({
        nombre: "Dragon ball",
        año: 1985,
        temporadas: 20,
      });
    });

    it("searchName debería devolver un array con los documentales que tengan ese nombre", () => {
      const documentaries = [
        { nombre: "Cosmos", año: 2014, duracion: 500, topico: "Espacial" },
        { nombre: "No confíes en nadie", año: 2022, duracion: 100, topico: "Criptomonedas" },
      ];
      const documentariesCollection = new DocumentalesCollection(documentaries);
      const result = documentariesCollection.searchName("No confíes en nadie");
      expect(result).to.have.lengthOf(1);
      expect(result[0]).to.deep.include({
        nombre: "No confíes en nadie",
        año: 2022,
        duracion: 100,
        topico: "Criptomonedas",
      });
    });
  });

describe("Series", () => {
    it("searchSeasons debería devolver un array de series que tengan ese número de temporadas", () => {
      const series = [
        { nombre: "You", año: 2018, temporadas: 4 },
        { nombre: "Dragon ball", año: 1985, temporadas: 20 },
        { nombre: "Friends", año: 1994, temporadas: 10 },
      ];
      const seriesCollection = new SeriesCollection(series);
      const result = seriesCollection.searchSeasons(20);
      expect(result).to.have.lengthOf(1);
      expect(result[0]).to.deep.include({
        nombre: "Dragon ball",
        año: 1985,
        temporadas: 20,
      });
    });

    it("searchName debería devolver un array de series que tengan el nombre buscado", () => {
      const series = [
        { nombre: "You", año: 2018, temporadas: 4 },
        { nombre: "Dragon ball", año: 1985, temporadas: 20 },
        { nombre: "Friends", año: 1994, temporadas: 10 },
      ];
      const seriesCollection = new SeriesCollection(series);
      const result = seriesCollection.searchName("Friends");
      expect(result).to.have.lengthOf(1);
      expect(result[0]).to.deep.include({
        nombre: "Friends",
        año: 1994,
        temporadas: 10,
      });
    });
  });

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

describe("Documentaries", () => {
    it("searchTopic debería devolver un array de documentales de ese tipo", () => {
      const documentaries = [
        { nombre: "Cosmos", año: 2014, duracion: 500, topico: "Espacial" },
        { nombre: "No confíes en nadie", año: 2022, duracion: 100, topico: "Criptomonedas" },
        { nombre: "Osa Polar", año: 2020, duracion: 200, topico: "Animales" },
      ];
      const documentariesCollection = new DocumentalesCollection(documentaries);
      const result = documentariesCollection.searchTopic("Criptomonedas");
      expect(result).to.have.lengthOf(1);
      expect(result[0]).to.deep.include({
        nombre: "No confíes en nadie",
        año: 2022,
        duracion: 100,
        topico: "Criptomonedas",
      });
  });

    it("searchDuration debería devolver un array de documentales la duración buscada", () => {
      const documentaries = [
        { nombre: "Cosmos", año: 2014, duracion: 500, topico: "Espacial" },
        { nombre: "No confíes en nadie", año: 2022, duracion: 100, topico: "Criptomonedas" },
        { nombre: "Osa Polar", año: 2020, duracion: 200, topico: "Animales" },
      ];
      const documentariesCollection = new DocumentalesCollection(documentaries);
      const result = documentariesCollection.searchDuration(100);
      expect(result).to.have.lengthOf(1);
      expect(result[0]).to.deep.include({
        nombre: "No confíes en nadie",
        año: 2022,
        duracion: 100,
        topico: "Criptomonedas",
      });
    });

    it("searchYear debería devolver un array de documentales que salieron en ese año", () => {
      const documentaries = [
        { nombre: "Cosmos", año: 2014, duracion: 500, topico: "Espacial" },
        { nombre: "No confíes en nadie", año: 2022, duracion: 100, topico: "Criptomonedas" },
        { nombre: "Osa Polar", año: 2020, duracion: 200, topico: "Animales" },
      ];
      const documentariesCollection = new DocumentalesCollection(documentaries);
      const result = documentariesCollection.searchYear(2022);
      expect(result).to.have.lengthOf(1);
      expect(result[0]).to.deep.include({
        nombre: "No confíes en nadie",
        año: 2022,
        duracion: 100,
        topico: "Criptomonedas",
      });
    });
  });



