/**
 * Función que recibe un elemento de la colección y retorna su versión modificada.
 * @param elemento El elemento de la colección a modificar.
 * @returns El elemento modificado.
 */
type MapCallback<T> = (elemento: T) => T;

/**
 * Modifica cada elemento de una colección en base a un callback.
 * @param collection La colección de elementos a modificar.
 * @param callback El callback que define la modificación a aplicar a cada elemento.
 * @returns La colección modificada.
 */
function myMap<T>(collection: T[], callback: MapCallback<T>): T[] {
  const result: T[] = [];

  for (let i = 0; i < collection.length; i++) {
    result.push(callback(collection[i]));
  }

  return result;
}


const collection_1 = [0, 1, 2, 3, 4];
const modCollection_1 = myMap(collection_1, (elemento) => elemento * elemento);
console.log(modCollection_1);

const collection_2 = ["e", "d", "u", "a", "r"];
const modCollection_2 = myMap(collection_2, (elemento) => `elemento ${elemento}`);
console.log(modCollection_2);
