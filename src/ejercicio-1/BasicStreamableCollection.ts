/**
 * La clase BasicStreamableCollection es una clase abstracta que implementa la interfaz Streamable y tiene
 * implementados dos métodos: searchName y searchYear.
 * @template T El tipo de elementos que hay en la colección.
 */
import { Streamable } from "./Streamable";

export abstract class BasicStreamableCollection<T> implements Streamable {
  /**
   * Crea una nueva instancia de la clase BasicStreamableCollection.
   * @param collection El array de elementos que se almacenará en la colección.
   */
  constructor(protected collection: T[]) {}

  /**
   * Busca elementos en la colección que coincidan con el nombre especificado.
   * @param name El nombre a buscar.
   * @returns Un array de elementos que coinciden con el nombre especificado.
   */
  abstract searchName(name: string): T[];

  /**
   * Busca elementos en la colección que fueron lanzados en el año especificado.
   * @param year El año a buscar.
   * @returns Un array de elementos que fueron lanzados en el año especificado.
   */
  abstract searchYear(year: number): T[];
}
