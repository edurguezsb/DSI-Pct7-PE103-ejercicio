/**
 * Representa una colección de series que se pueden transmitir en streaming.
 */
import { BasicStreamableCollection } from "./BasicStreamableCollection";
import { Serie } from "./Interfaces";

export class SeriesCollection extends BasicStreamableCollection<Serie> {
    constructor(collection: Serie[]) {
        super(collection);
    }

    /**
     * Busca series por nombre.
     * @param name El nombre de la serie a buscar.
     * @returns Un arreglo de objetos Serie que coinciden con el nombre especificado.
     */
    searchName(name: string): Serie[] {
        const result = [];
        for (const serie of this.collection) {
            if (serie.nombre === name) {
                result.push(serie);
            }
        }
        return result;
    }

    /**
     * Busca series por año.
     * @param year El año de la serie a buscar.
     * @returns Un arreglo de objetos Serie que coinciden con el año especificado.
     */
    searchYear(year: number): Serie[] {
        const result = [];
        for (const serie of this.collection) {
            if (serie.año === year) {
                result.push(serie);
            }
        }
        return result;
    }

    /**
     * Busca series por número de temporadas.
     * @param seasons El número de temporadas de la serie a buscar.
     * @returns Un arreglo de objetos Serie que coinciden con el número de temporadas especificado.
     */
    searchSeasons(seasons: number): Serie[] {
        const result = [];
        for (const serie of this.collection) {
            if (serie.temporadas === seasons) {
                result.push(serie);
            }
        }
        return result;
    }
}
