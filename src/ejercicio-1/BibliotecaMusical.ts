import { Artista } from './Artista';
import { Discografia } from './Discografia';
import { Cancion } from './Cancion';

/**
 * Clase que representa una biblioteca musical
 */
export class BibliotecaMusical {
  private artistas: Artista[];
  public getArtistas(): Artista[] {
    return this.artistas;
  }
  constructor() {
    this.artistas = [];
  }
  
  /**
   * Agrega un artista a la biblioteca
   * @param artista Objeto Artista que se agregará a la biblioteca
   */
  agregarArtista(artista: Artista) {
    this.artistas.push(artista);
  }

  /**
   * Busca artistas cuyo nombre contenga la cadena especificada
   * @param nombre Cadena a buscar en el nombre del artista
   * @returns Array de objetos Artista que coinciden con la búsqueda
   */
  buscarArtistas(nombre: string): Artista[] {
    return this.artistas.filter((artista) => artista.nombre.toLowerCase().includes(nombre.toLowerCase()));
  }

  /**
   * Busca discografías cuyo nombre contenga la cadena especificada
   * @param nombre Cadena a buscar en el nombre de la discografía
   * @returns Array de objetos Discografia que coinciden con la búsqueda
   */
  buscarDiscografias(nombre: string): Discografia[] {
    let discografias: Discografia[] = [];

    this.artistas.forEach((artista) => {
      discografias = discografias.concat(artista.discografia.filter((disco) => disco.nombre.toLowerCase().includes(nombre.toLowerCase())));
    });

    return discografias;
  }

  /**
   * Busca canciones cuyo nombre contenga la cadena especificada
   * @param nombre Cadena a buscar en el nombre de la canción
   * @returns Array de objetos Cancion que coinciden con la búsqueda
   */
  buscarCanciones(nombre: string): Cancion[] {
    let canciones: Cancion[] = [];

    this.artistas.forEach((artista) => {
      artista.discografia.forEach((disco) => {
        canciones = canciones.concat(disco.canciones.filter((cancion) => cancion.nombre.toLowerCase().includes(nombre.toLowerCase())));
      });
    });

    return canciones;
  }

  /**
   * Calcula el número de canciones de un disco
   * @param nombreDisco Nombre del disco para el que se quiere calcular el número de canciones
   * @returns Número de canciones del disco
   */
  numCancionesDisco(nombreDisco: string): number {
    let numCanciones = 0;

    this.artistas.forEach((artista) => {
      artista.discografia.forEach((disco) => {
        if (disco.nombre.toLowerCase() === nombreDisco.toLowerCase()) {
          numCanciones = disco.numCanciones();
        }
      });
    });

    return numCanciones;
  }

  /**
   * Calcula la duración de un disco en segundos
   * @param nombreDisco Nombre del disco para el que se quiere calcular la duración
   * @returns Duración en segundos del disco
   */
  duracionDisco(nombreDisco: string): number {
    let duracion = 0;

    this.artistas.forEach((artista) => {
      artista.discografia.forEach((disco) => {
        if (disco.nombre.toLowerCase() === nombreDisco.toLowerCase()) {
          duracion = disco.duracionTotal();
        }
      });
    });

    return duracion;
  }
}