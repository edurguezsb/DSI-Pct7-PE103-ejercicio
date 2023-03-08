import { BasicStreamableCollection } from "./BasicStreamableCollection";
import { Serie } from "./Interfaces";

export class SeriesCollection extends BasicStreamableCollection<Serie> {
    constructor(collection: Serie[]) {
        super(collection);
    }

    searchName(name: string): Serie[] {
        const result = [];
        for (const serie of this.collection) {
            if (serie.nombre === name) {
                result.push(serie);
            }
        }
        return result;
    }

    searchYear(year: number): Serie[] {
        const result = [];
        for (const serie of this.collection) {
            if (serie.año === year) {
                result.push(serie);
            }
        }
        return result;
    }

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