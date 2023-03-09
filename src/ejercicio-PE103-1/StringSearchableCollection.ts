import { SearchableCollection } from './SearchableCollection';

/**
 * Clase que representa una colección de cadenas de caracteres que puede ser buscada.
 */
export class StringSearchableCollection extends SearchableCollection<string> {
  /** Array de cadenas de caracteres que contiene los elementos de la colección. */
  private collection: string[] = [];

  /**
   * Crea una instancia de StringSearchableCollection.
   */
  constructor() {
    super(); // Llamada al constructor de la clase base.
  }

  /**
   * Agrega un elemento a la colección.
   * @param item El elemento a agregar.
   */
  addItem(item: string): void {
    this.collection.push(item);
  }

  /**
   * Obtiene un elemento de la colección según su índice.
   * @param index El índice del elemento a obtener.
   * @returns La cadena de caracteres correspondiente al índice especificado, o undefined si el índice está fuera de rango.
   */
  getItem(index: number): string | undefined {
    return this.collection[index];
  }

  /**
   * Elimina un elemento de la colección según su índice y devuelve el elemento eliminado.
   * @param index El índice del elemento a eliminar.
   * @returns La cadena de caracteres correspondiente al índice especificado, o undefined si el índice está fuera de rango.
   */
  removeItem(index: number): string {
    return this.collection.splice(index, 1)[0];
  }

  /**
   * Devuelve el número de elementos en la colección.
   * @returns El número de elementos en la colección.
   */
  getNumberOfItems(): number {
    return this.collection.length;
  }

  /**
   * Busca elementos en la colección que contienen un término de búsqueda dado y devuelve un array de coincidencias.
   * @param term El término de búsqueda.
   * @returns Un array de cadenas de caracteres que contienen el término de búsqueda especificado.
   */
  search(term: string): string[] {
    return this.collection.filter((item) => item.includes(term));
  }
}