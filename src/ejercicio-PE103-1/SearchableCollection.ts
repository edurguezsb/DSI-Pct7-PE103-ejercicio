import { Collectable } from './Collectable';
import { Searchable } from './Searchable';

/**
 * Esta es una clase abstracta que implementa la interfaz Collectable y define el método abstracto search.
 * Las clases que extiendan SearchableCollection deben implementar el método search obligatoriamente.
 * @template T El tipo de elemento que se almacena en la colección.
 */
export abstract class SearchableCollection<T> implements Collectable<T>, Searchable<T> {
  protected items: T[] = [];

  /**
   * Debe realizar una búsqueda en la colección y devolver los elementos que coincidan con el término de búsqueda.
   * @param term El término de búsqueda cuyo tipo no se conoce a priori.
   * @returns Un array de elementos que coinciden con el término de búsqueda.
   */
  abstract search(term: unknown): T[];

  /**
   * Agrega un elemento a la colección.
   * @param item El elemento que se agregará a la colección.
   */
  addItem(item: T): void {
    this.items.push(item);
  }

  /**
   * Obtiene el elemento en un índice específico de la colección.
   * @param index El índice del elemento que se desea obtener.
   * @returns El elemento en el índice especificado o undefined si el índice está fuera de los límites de la colección.
   */
  getItem(index: number): T | undefined {
    return this.items[index];
  }

  /**
   * Elimina un elemento de la colección en un índice específico.
   * @param index El índice del elemento que se desea eliminar.
   * @returns El elemento que se eliminó o undefined si el índice está fuera de los límites de la colección.
   */
  removeItem(index: number): T | undefined {
    if (index < 0 || index >= this.items.length) {
      return undefined;
    }
    return this.items.splice(index, 1)[0];
  }

  /**
   * Obtiene el número de elementos en la colección.
   * @returns El número de elementos en la colección.
   */
  getNumberOfItems(): number {
    return this.items.length;
  }
}
