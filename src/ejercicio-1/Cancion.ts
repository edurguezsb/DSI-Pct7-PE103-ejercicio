/**
 * Clase que representa una canción
 */
export class Cancion {
    nombre: string;
    duracionSegundos: number;
    generos: string[];
    esSingle: boolean;
    numReproducciones: number;

 /**
* Crea una instancia de Cancion con los valores que le ponemos.
* Constructor de la clase Cancion
* @param nombre El nombre de la canción.
* @param duracionSegundos La duración de la canción en segundos.
* @param generos Los géneros musicales de la canción.
* @param esSingle Indica si la canción es un single o no.
* @param numReproducciones El número de reproducciones de la canción.
* @throws Error si la duración o el número de reproducciones son negativos.
*/
    constructor(nombre: string, duracionSegundos: number, generos: string[], esSingle: boolean, numReproducciones: number) {
      if (duracionSegundos < 0) {
        throw new Error('La duración de la canción no puede ser negativa');
      }
  
      if (numReproducciones < 0) {
        throw new Error('El número de reproducciones de la canción no puede ser negativo');
      }
      this.nombre = nombre;
      this.duracionSegundos = duracionSegundos;
      this.generos = generos;
      this.esSingle = esSingle;
      this.numReproducciones = numReproducciones;
    }
  }
  