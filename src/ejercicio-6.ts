/**
 * Compresses an array of numbers into ranges.
 * @param arrai The array of numbers to compress.
 * @returns The character string representing the returned ranges.
 */
export function fromArrayToRanges(arrai: number[]): string {
    if (arrai.length === 0) {
      return "";
    }
  
    const ranges: string[] = [];
    let start = arrai[0];
    let end = arrai[0];
  
    for (let i = 1; i < arrai.length; i++) {
      if (arrai[i] === end + 1) {
        end = arrai[i];
      } else {
        ranges.push(start === end ? `${start}` : `${start}_${end}`);
        start = arrai[i];
        end = arrai[i];
      }
    }
  
    ranges.push(start === end ? `${start}` : `${start}_${end}`);
  
    return ranges.join(", ");
  }
  

/**
 * Splits a character string into an array of numbers.
 * @param ranges The character string with ranges to split.
 * @returns An array of numbers.
*/
export function fromRangesToArray(ranges: string): number[] {
  if (!ranges || ranges.trim() === '') {
    return [];
  }
  
  const result: number[] = ranges.split(/,\s*/).flatMap(range => {
    const [startStr, endStr] = range.split(/_|-/);
    const start = parseInt(startStr, 10);
    const end = parseInt(endStr, 10) || start;
    
    if (isNaN(start) || isNaN(end)) {
      return [];
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  });

  return result;
}



/*
console.log(fromArrayToRanges([5, 6, 7, 9, 12, 13, 14]));
console.log(fromArrayToRanges([-3, -2, -1, 3, 5, 6, 7]));
console.log(fromArrayToRanges([17]));
console.log(fromArrayToRanges([3, 5, 6, 7, 9, 10]));
  
console.log(fromRangesToArray("5_7, 9, 12_14"));
console.log(fromRangesToArray("-3_-1, 3, 5_7"));
console.log(fromRangesToArray("17"));
console.log(fromRangesToArray("3, 5_7, 9_10"));
*/