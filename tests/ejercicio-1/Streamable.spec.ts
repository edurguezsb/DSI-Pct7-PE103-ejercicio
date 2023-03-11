import "mocha";
import { expect } from "chai";
import {SeriesCollection} from "../../src/ejercicio-1/Series";
import {DocumentalesCollection} from "../../src/ejercicio-1/Documentaries";


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