/**
 * Function that receives an element from the collection and returns its modified version.
 * @param elemento The element of the collection to modify.
 * @returns The modified item.
 */
export type MapCallback<T> = (elemento: T) => T;

/**
 * Modifies each element of a collection based on a callback.
 * @param collection The collection of elements to modify.
 * @param callback The callback that defines the modification to apply to each element.
 * @returns The modified collection.
 */
export function myMap<T>(collection: T[], callback: MapCallback<T>): T[] {
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
