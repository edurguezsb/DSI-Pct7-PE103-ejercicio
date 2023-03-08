/**
 * Clase que representa una colección de películas que se pueden transmitir.
 * Extiende la clase BasicStreamableCollection y utiliza la interfaz Movie.
 */
import { BasicStreamableCollection } from "./BasicStreamableCollection";
import { Movie } from "./Interfaces";

export class PeliculasCollection extends BasicStreamableCollection<Movie> {
    /**
     * Método que devuelve las películas que coinciden con el nombre especificado.
     * @param name El nombre de la película que se busca.
     * @returns Un arreglo de películas que coinciden con el nombre especificado.
     */
    searchName = (name: string) => this.collection.filter((movie) => movie.nombre === name);

    /**
     * Método que devuelve las películas que coinciden con el año especificado.
     * @param year El año de la película que se busca.
     * @returns Un arreglo de películas que coinciden con el año especificado.
     */
    searchYear = (year: number) => this.collection.filter((movie) => movie.año === year);

    /**
     * Método que devuelve las películas que coinciden con la duración especificada.
     * @param duration La duración de la película que se busca.
     * @returns Un arreglo de películas que coinciden con la duración especificada.
     */
    searchDuration = (duration: number) => this.collection.filter((movie) => movie.duracion === duration);
}
