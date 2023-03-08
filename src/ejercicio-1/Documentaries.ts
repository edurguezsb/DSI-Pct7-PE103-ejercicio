/**
 * Clase que representa una colección de documentales, extiende BasicStreamableCollection.
 * @typeparam Documentarie Tipo de elemento que almacena la colección.
 */
import { BasicStreamableCollection } from "./BasicStreamableCollection";
import { Documentarie } from "./Interfaces";

export class DocumentalesCollection extends BasicStreamableCollection<Documentarie> {
    /**
     * Método que busca documentales por nombre.
     * @param name Nombre del documental a buscar.
     * @returns Array de documentales cuyo nombre coincide con el parámetro de entrada.
     */
    searchName(name: string): Documentarie[] {
        return this.collection.filter((documentales) => documentales.nombre === name);
    }

    /**
     * Método que busca documentales por año de lanzamiento.
     * @param year Año de lanzamiento del documental a buscar.
     * @returns Array de documentales cuyo año de lanzamiento coincide con el parámetro de entrada.
     */
    searchYear(year: number): Documentarie[] {
        return this.collection.filter((documentales) => documentales.año === year);
    }

    /**
     * Método que busca documentales por duración.
     * @param duration Duración del documental a buscar.
     * @returns Array de documentales cuya duración coincide con el parámetro de entrada.
     */
    searchDuration(duration: number): Documentarie[] {
        return this.collection.filter((documentales) => documentales.duracion === duration);
    }

    /**
     * Método que busca documentales por tópico.
     * @param topic Tópico del documental a buscar.
     * @returns Array de documentales cuyo tópico coincide con el parámetro de entrada.
     */
    searchTopic(topic: string): Documentarie[] {
        return this.collection.filter((documentales) => documentales.topico === topic);
    }
}