import { SearchableCollection } from './SearchableCollection';

/**
 * Clase que representa una colección de números que se puede buscar.
 * Extiende la clase abstracta SearchableCollection y proporciona una implementación del método search.
 */
export class NumericSearchableCollection extends SearchableCollection<number> {
  /** 
   * Array que contiene los números en la colección.
   */
  private collection: number[] = [];

  constructor() {
    super();
  }

  /**
   * Agrega un número a la colección.
   * @param item El número a agregar.
   */
  addItem(item: number): void {
    this.collection.push(item);
  }

  /**
   * Obtiene un número de la colección.
   * @param index El índice del número a obtener.
   * @returns El número en el índice especificado o undefined si el índice está fuera de los límites.
   */
  getItem(index: number): number | undefined {
    return this.collection[index];
  }

  /**
   * Elimina un número de la colección.
   * @param index El índice del número a eliminar.
   * @returns El número eliminado.
   */
  removeItem(index: number): number {
    return this.collection.splice(index, 1)[0];
  }

  /**
   * Obtiene el número de elementos en la colección.
   * @returns El número de elementos en la colección.
   */
  getNumberOfItems(): number {
    return this.collection.length;
  }

  /**
   * Busca un número en la colección.
   * @param term El número a buscar.
   * @returns Un array de números que coinciden con el término de búsqueda.
   */
  search(term: number): number[] {
    return this.collection.filter((item) => item === term);
  }
}
