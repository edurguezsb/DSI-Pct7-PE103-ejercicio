import { BasicStreamableCollection } from "./BasicStreamableCollection";
import { Documentarie } from "./Interfaces";

export class DocumentalesCollection extends BasicStreamableCollection<Documentarie> {
    searchName(name: string): Documentarie[] {
        return this.collection.filter((documentales) => documentales.nombre === name);
    }

    searchYear(year: number): Documentarie[] {
        return this.collection.filter((documentales) => documentales.año === year);
    }

    searchDuration(duration: number): Documentarie[] {
        return this.collection.filter((documentales) => documentales.duracion === duration);
    }

    searchTopic(topic: string): Documentarie[] {
        return this.collection.filter((documentales) => documentales.topico === topic);
    }
}


