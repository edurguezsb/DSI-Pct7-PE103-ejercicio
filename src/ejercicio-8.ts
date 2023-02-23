/**
 * Check if the words in an array are chained.
 * @param words - An array of text strings.
 * @returns A text string containing the letters that string the words in the array, or "Error al encadenar" if the words are not connected.
 */
export function meshArray(words: string[]): string {
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


console.log(meshArray(["eduardo", "oluis", "srodriguez", "zsan", "nblas"]));
console.log(meshArray(["allow", "lowering", "ringmaster", "terror"]));
console.log(meshArray(["kingdom", "dominator", "notorious", "usual", "allegory"]));
console.log(meshArray(["apply", "plywood"]));
console.log(meshArray(["apple", "each"]));
console.log(meshArray(["behemoth", "mother"]));
console.log(meshArray(["apply", "playground"]));
console.log(meshArray(["apple", "peggy"]));
console.log(meshArray(["behemoth", "mathematics"]));