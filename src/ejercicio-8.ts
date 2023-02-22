/**
 * Comprueba si las palabras de un array están encadenadas y devuelve las letras en común.
 * @param words El array de palabras a comprobar.
 * @returns Un string con las letras comunes en caso de estar encadenadas, o un mensaje de error en caso contrario.
 */
function meshArray(words: string[]): string {
    let result = "";
    
    for (let i = 0; i < words.length - 1; i++) {
      const currentWord = words[i];
      const nextWord = words[i + 1];
      const intersection = getIntersection(currentWord, nextWord);
      
      if (intersection.length === 0) {
        return "Error al encadenar";
      }
      
      result += intersection;
    }
    
    return result;
  }
  
  /**
   * Devuelve las letras que dos palabras tienen en común al final y al principio.
   * @param word1 La primera palabra.
   * @param word2 La segunda palabra.
   * @returns Las letras que ambas palabras tienen en común.
   */
  function getIntersection(word1: string, word2: string): string {
    let result = "";
    
    for (let i = 1; i < Math.min(word1.length, word2.length); i++) {
      const suffix = word1.slice(word1.length - i);
      const prefix = word2.slice(0, i);
      
      if (suffix === prefix) {
        result = suffix;
      }
    }
    
    return result;
  }


console.log(meshArray(["allow", "lowering", "ringmaster", "terror"]));
console.log(meshArray(["kingdom", "dominator", "notorious", "usual", "allegory"]));
console.log(meshArray(["apple", "legion", "onion"]));
console.log(meshArray(["peach", "choose", "escape", "eager"]));
console.log(meshArray(["sun", "near", "are"]));
  