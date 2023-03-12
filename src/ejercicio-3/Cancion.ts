/**
 * Clase que representa una canción.
 */
export class Cancion {

  /**
   * Constructor de la clase Cancion.
   * @param pNombre - El nombre de la canción.
   * @param pDuracion - La duración de la canción en segundos.
   * @param pGenero - Un array con los géneros de la canción.
   * @param pSingle - Un valor booleano que indica si la canción es un sencillo o no.
   * @param pReproducciones - El número de veces que se ha reproducido la canción.
   */
  constructor(
    private pNombre: string,
    private pDuracion: number,
    private pGenero: string[],
    private pSingle: boolean,
    private pReproducciones: number
  ) {}

  /**
   * Devuelve el nombre de la canción.
   * @returns El nombre de la canción.
   */
  get nombre(): string {
    return this.pNombre;
  }

  /**
   * Establece el nombre de la canción.
   * @param value - El nuevo nombre de la canción.
   */
  set nombre(value: string) {
    this.pNombre = value;
  }

  /**
   * Devuelve la duración de la canción en segundos.
   * @returns La duración de la canción en segundos.
   */
  get duracion(): number {
    return this.pDuracion;
  }

  /**
   * Establece la duración de la canción en segundos.
   * @param value - La nueva duración de la canción en segundos.
   */
  set duracion(value: number) {
    this.pDuracion = value;
  }

  /**
   * Devuelve un array con los géneros de la canción.
   * @returns Un array con los géneros de la canción.
   */
  get generos(): string[] {
    return this.pGenero;
  }

  /**
   * Establece los géneros de la canción.
   * @param value - Un array con los nuevos géneros de la canción.
   */
  set generos(value: string[]) {
    this.pGenero = value;
  }

  /**
   * Devuelve un valor booleano que indica si la canción es un sencillo o no.
   * @returns Un valor booleano que indica si la canción es un sencillo o no.
   */
  get single(): boolean {
    return this.pSingle;
  }

  /**
   * Establece si la canción es un sencillo o no.
   * @param value - Un valor booleano que indica si la canción es un sencillo o no.
   */
  set single(value: boolean) {
    this.pSingle = value;
  }

  /**
   * Devuelve el número de veces que se ha reproducido la canción.
   * @returns El número de veces que se ha reproducido la canción.
   */
  get reproducciones(): number {
    return this.pReproducciones;
  }

  /**
   * Establece el número de veces que se ha reproducido la canción.
   * @param value - El nuevo número de veces que se ha reproducido la canción.
   */
  set reproducciones(value: number) {
    this.pReproducciones = value;
  }
}
