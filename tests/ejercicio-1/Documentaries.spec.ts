import "mocha";
import { expect } from "chai";
import {DocumentalesCollection} from "../../src/ejercicio-1/Documentaries";


describe("Documentaries", () => {
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
  });