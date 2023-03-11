import "mocha";
import { expect } from "chai";
import {SeriesCollection} from "../../src/ejercicio-1/Series";


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