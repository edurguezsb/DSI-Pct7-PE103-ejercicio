/**
 * Una interfaz que define los métodos necesarios para buscar elementos de un stream.
 */
export interface Streamable {
  /**
   * Busca todos los elementos de un año específico.
   * @param year El año que se va a buscar.
   * @returns Un arreglo de elementos encontrados.
   */
  searchYear(year: number): any[];

  /**
   * Busca todos los elementos con un nombre específico.
   * @param name El nombre que se va a buscar.
   * @returns Un arreglo de elementos encontrados.
   */
  searchName(name: string): any[];
}
