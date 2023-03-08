import { BasicStreamableCollection } from "./BasicStreamableCollection";
import { Movie } from "./Interfaces";

export class PeliculasCollection extends BasicStreamableCollection<Movie> {
    searchName = (name: string) => this.collection.filter((movie) => movie.nombre === name);

    searchYear = (year: number) => this.collection.filter((movie) => movie.año === year);

    searchDuration = (duration: number) => this.collection.filter((movie) => movie.duracion === duration);
}