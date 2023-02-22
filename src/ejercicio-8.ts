/**
 * Check if the words in an array are chained.
 * @param words - An array of text strings.
 * @returns A text string containing the letters that string the words in the array, or "Error al encadenar" if the words are not connected.
 */
function meshArray(words: string[]): string {
  let result = "";
  for (let i = 0; i < words.length - 1; i++) {
    const current = words[i];
    const next = words[i + 1];
    let commonLetters = "";
    for (let j = 0; j < current.length; j++) {
      if (next.startsWith(current.slice(j))) {
        commonLetters = current.slice(j);
        break;
      }
    }
    if (commonLetters.length === 0) {
      return "Error al encadenar";
    }
    result += commonLetters;
  }
  return result;
}

// Pruebas
console.log(meshArray(["allow", "lowering", "ringmaster", "terror"])); // Debería mostrar "lowringter"
console.log(meshArray(["kingdom", "dominator", "notorious", "usual", "allegory"])); // Debería mostrar "Error al encadenar"
console.log(meshArray(["apply", "plywood"])); // Debería mostrar "plywood"
console.log(meshArray(["apple", "each"])); // Debería mostrar "e"
console.log(meshArray(["behemoth", "mother"])); // Debería mostrar "mo"
console.log(meshArray(["apply", "playground"])); // Debería mostrar "Error al encadenar"
console.log(meshArray(["apple", "peggy"])); // Debería mostrar "Error al encadenar"
console.log(meshArray(["behemoth", "mathematics"])); // Debería mostrar "Error al encadenar"
