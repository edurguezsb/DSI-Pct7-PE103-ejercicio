import { Cancion } from './Cancion';

export class Disco {
  nombre: string;
  anioPublicacion: number;
  canciones: Cancion[];
  /**
 * Constructor de la clase Discografia
 * @param nombre Nombre de la discografía
 * @param anioPublicacion Año de publicación de la discografía
 * @param canciones Lista de canciones de la discografía
 */
  constructor(nombre: string, anioPublicacion: number, canciones: Cancion[]) {
    this.nombre = nombre;
    this.anioPublicacion = anioPublicacion;
    this.canciones = canciones;
  }

/**
 * Calcula el número total de reproducciones de todas las canciones de la discografía
 * @returns Número total de reproducciones de la discografía
 */
  numReproduccionesTotal(): number {
    return this.canciones.reduce((acumulador, cancion) => acumulador + cancion.numReproducciones, 0);
  }

/**
 * Agrega una canción
 * @param cancion 
 */
  agregarCancion(cancion: Cancion) {
    this.canciones.push(cancion);
  }

/**
 * Calcula el número de canciones de la discografía
 * @returns Número de canciones de la discografía
 */
  numCanciones(): number {
    return this.canciones.length;
  }

/**
 * Calcula la duración total de todas las canciones de la discografía
 * @returns Duración total de la discografía en segundos
 */
  duracionTotal(): number {
    return this.canciones.reduce((acumulador, cancion) => acumulador + cancion.duracionSegundos, 0);
  }
}