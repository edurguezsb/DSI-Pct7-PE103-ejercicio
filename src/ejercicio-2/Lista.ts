/**
 * Una clase genérica que modela una lista de elementos de cualquier tipo.
 */
export class Lista<T> {
  private elementos: T[];

  /**
   * Crea una nueva lista con los elementos especificados.
   * @param elementos Los elementos para incluir en la lista.
   */
  constructor(...elementos: T[]) {
    this.elementos = elementos;
  }

  /**
   * Añade los elementos de una lista al final de esta lista.
   * @param lista La lista de elementos a añadir.
   */
  append(lista: Lista<T>): void {
    this.elementos.push(...lista.toArray());
  }

  /**
   * Combina varias listas en una sola lista que contiene todos sus elementos.
   * @param listas Las listas para combinar.
   * @returns La lista resultante de la combinación.
   */
  concatenate(...listas: Lista<T>[]): Lista<T> {
    const nuevaLista = new Lista<T>(...this.elementos);
    for (const lista of listas) {
      nuevaLista.append(lista);
    }
    return nuevaLista;
  }

  /**
   * Filtra los elementos de la lista según un predicado lógico.
   * @param predicado La función que determina si un elemento debe ser incluido en la lista filtrada.
   * @returns La lista resultante de la filtración.
   */
  filter(predicado: (elemento: T) => boolean): Lista<T> {
    const nuevaLista = new Lista<T>();
    for (const elemento of this.elementos) {
      if (predicado(elemento)) {
        nuevaLista.append(new Lista(elemento));
      }
    }
    return nuevaLista;
  }

  /**
   * Devuelve el número de elementos en la lista.
   * @returns El número de elementos en la lista.
   */
  length(): number {
    return this.elementos.length;
  }

  /**
   * Aplica una función a cada elemento de la lista y devuelve la lista resultante.
   * @param transformador La función que transforma los elementos de la lista.
   * @returns La lista resultante de la transformación.
   */
  map<U>(transformador: (elemento: T) => U): Lista<U> {
    const nuevaLista = new Lista<U>();
    for (const elemento of this.elementos) {
      nuevaLista.append(new Lista(transformador(elemento)));
    }
    return nuevaLista;
  }

  /**
   * Reduce los elementos de la lista a un valor acumulado utilizando una función acumuladora.
   * @param fn La función que acumula los elementos de la lista.
   * @param acumulador El valor inicial del acumulador.
   * @returns El valor resultante de la reducción.
   */
  reduce<U>(fn: (acumulador: U, elemento: T) => U, acumulador: U): U {
    let resultado: U = acumulador;
    for (const elemento of this.elementos) {
      resultado = fn(resultado, elemento);
    }
    return resultado;
  }

  /**
   * Devuelve una lista con los elementos de esta lista en orden inverso.
   * @returns La lista con los elementos en orden inverso.
   */
  reverse(): Lista<T> {
    const nuevaLista = new Lista<T>();
    for (let i = this.elementos.length - 1; i >= 0; i--) {
      nuevaLista.append(new Lista(this.elementos[i]));
    }
    return nuevaLista;
  }
  /**
   * Itera sobre los elementos de la lista y aplica una función a cada uno.
   * @param funcion La función que se aplicará a cada elemento.
   */
  forEach(funcion: (elemento: T) => void): void {
    for (const elemento of this.elementos) {
      funcion(elemento);
    }
  }
  /**
   * Devuelve un array con los elementos de la lista.
   * @returns Un array con los elementos de la lista.
   */
  toArray(): T[] {
    return this.elementos;
  }
}
