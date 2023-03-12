/**
 * Clase que representa un artista musical.
 */
import {Discografia} from "./Discografia";

export class Artista {
  
  /**
   * Crea una instancia de la clase Artista.
   * @param pNombre El nombre del artista.
   * @param pOyentes El número de oyentes del artista.
   * @param pDiscografia La discografía del artista.
   */
  constructor(
    private pNombre: string,
    private pOyentes: number,
    private pDiscografia: Discografia[]
  ) {}

  /**
   * Obtiene el nombre del artista.
   * @returns El nombre del artista.
   */
  get nombre(): string {
    return this.pNombre;
  }

  /**
   * Establece el nombre del artista.
   * @param value El nuevo nombre del artista.
   */
  set nombre(value: string) {
    this.pNombre = value;
  }

  /**
   * Obtiene el número de oyentes del artista.
   * @returns El número de oyentes del artista.
   */
  get oyentes(): number {
    return this.pOyentes;
  }

  /**
   * Establece el número de oyentes del artista.
   * @param value El nuevo número de oyentes del artista.
   */
  set oyentes(value: number) {
    this.pOyentes = value;
  }

  /**
   * Obtiene la discografía del artista.
   * @returns La discografía del artista.
   */
  get discografia(): Discografia[] {
    return this.pDiscografia;
  }

  /**
   * Establece la discografía del artista.
   * @param value La nueva discografía del artista.
   */
  set discografia(value: Discografia[]) {
    this.pDiscografia = value;
  }
}
