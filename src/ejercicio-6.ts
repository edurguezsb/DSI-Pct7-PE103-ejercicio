/**
 * Comprime un array de números en rangos.
 * @param arr El array de números a comprimir.
 * @returns La cadena de caracteres que representa los rangos obtenidos.
 */
function fromArrayToRanges(arr: number[]): string {
    if (arr.length === 0) {
      return "";
    }
  
    const ranges: string[] = [];
    let start = arr[0];
    let end = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === end + 1) {
        end = arr[i];
      } else {
        ranges.push(start === end ? `${start}` : `${start}_${end}`);
        start = arr[i];
        end = arr[i];
      }
    }
  
    ranges.push(start === end ? `${start}` : `${start}_${end}`);
  
    return ranges.join(", ");
  }
  
  /**
   * Descomprime una cadena de caracteres en un array de números.
   * @param str La cadena de caracteres que representa los rangos.
   * @returns El array de números correspondiente a los rangos.
   */
  function fromRangesToArray(str: string): number[] {
    const ranges = str.split(", ");
    const result: number[] = [];
  
    for (let i = 0; i < ranges.length; i++) {
      const range = ranges[i].split("_");
  
      if (range.length === 1) {
        result.push(parseInt(range[0]));
      } else {
        const start = parseInt(range[0]);
        const end = parseInt(range[1]);
        for (let j = start; j <= end; j++) {
          result.push(j);
        }
      }
    }
  
    return result;
  }

  
console.log(fromArrayToRanges([5, 6, 7, 9, 12, 13, 14])); // "5_7, 9, 12_14"
console.log(fromArrayToRanges([-3, -2, -1, 3, 5, 6, 7])); // "-3_-1, 3, 5_7"
console.log(fromArrayToRanges([17])); // "17"
console.log(fromArrayToRanges([3, 5, 6, 7, 9, 10])); // "3, 5_7, 9_10"
  
console.log(fromRangesToArray("5_7, 9, 12_14")); // [5, 6, 7, 9, 12, 13, 14]
console.log(fromRangesToArray("-3_-1, 3, 5_7"));
console.log(fromRangesToArray("17"));
console.log(fromRangesToArray("3, 5_7, 9_10"));
  