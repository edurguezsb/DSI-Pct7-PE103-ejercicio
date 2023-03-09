/**
 * Interfaz genérica para una colección de elementos que se pueden agregar, obtener y eliminar.
 * @typeparam T El tipo de elemento que se almacena en la colección.
 */
export interface Collectable<T> {
    /**
     * Agrega un elemento a la colección.
     * @param item El elemento que se agregará a la colección.
     */
    addItem(item: T): void;
  
    /**
     * Devuelve el elemento en el índice especificado.
     * @param index El índice del elemento que se va a devolver.
     */
    getItem(index: number): T | undefined;
  
    /**
     * Elimina el elemento en el índice especificado de la colección.
     * @param index El índice del elemento que se eliminará.
     */
    removeItem(index: number): void;
  
    /**
     * Devuelve el número de elementos en la colección.
     */
    getNumberOfItems(): number;
  }
  
  