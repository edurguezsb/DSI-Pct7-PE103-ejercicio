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
   * Decompresses a string of characters into an array of numbers.
   * @param str The character string representing the ranges.
   * @returns The array of numbers corresponding to the ranges.
   */
export function fromRangesToArray(str: string): number[] {
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