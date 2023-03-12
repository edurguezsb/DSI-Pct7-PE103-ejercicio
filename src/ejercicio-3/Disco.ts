/**
 * Clase que representa un Disco.
 * @extends Discografia
 */
import { Cancion } from "./Cancion";
import { Discografia } from "./Discografia";

export class Disco extends Discografia {

  /**
   * Lista de canciones del disco.
   * @private
   */
  private pCanciones: Cancion[];

  /**
   * Crea una instancia de Disco.
   * @param nombre - El nombre del disco.
   * @param año - El año de publicación del disco.
   * @param canciones - La lista de canciones del disco.
   */
  constructor(nombre: string, año:number, canciones: Cancion[]) {
    super(nombre, año);
    this.pCanciones = canciones;
  }

  /**
   * Obtiene la lista de canciones del disco.
   * @returns La lista de canciones del disco.
   */
  get canciones(): Cancion[] {
    return this.pCanciones;
  }

  /**
   * Establece la lista de canciones del disco.
   * @param value - La nueva lista de canciones del disco.
   */
  set canciones(value: Cancion[]) {
    this.pCanciones = value;
  }
}
