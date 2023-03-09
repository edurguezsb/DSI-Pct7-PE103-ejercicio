/**
 * Interfaz genérica para objetos que son capaces de realizar una búsqueda.
 * @typeparam T El tipo de objeto que se buscará.
 */
export interface Searchable<T> {
    /**
     * Busca los objetos que coincidan con el término de búsqueda especificado.
     * @param term El término de búsqueda a buscar.
     * @returns Un array de objetos que coinciden con el término de búsqueda.
     */
    search(term: T): T[];
  }
  