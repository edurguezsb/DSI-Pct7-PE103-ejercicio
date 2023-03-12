/**  
 * Clase que representa un Single
*/
import { Cancion } from "./Cancion";
import { Discografia } from "./Discografia";

/**
 * Esta clase representa un sencillo musical y extiende la clase Discografia
 * @extends Discografia
 */
export class Single extends Discografia{

  /** Atributo privado que almacena la canción del sencillo */
  private pCancion: Cancion;

  /**
   * Crea una instancia de Single.
   * @param nombre El nombre del sencillo.
   * @param año El año de lanzamiento del sencillo.
   * @param cancion La canción del sencillo.
   */
  constructor(nombre: string, año:number, cancion: Cancion){
    super(nombre, año);
    this.pCancion = cancion
  }

  /**
   * Devuelve la canción del sencillo.
   * @returns La canción del sencillo.
   */
  get cancion(): Cancion {
    return this.pCancion;
  }

  /**
   * Establece la canción del sencillo.
   * @param value La nueva canción del sencillo.
   */
  set cancion(value: Cancion) {
    this.pCancion = value;
  }
}