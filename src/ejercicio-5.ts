/**
 * Generates a square matrix with integers arranged in a spiral.
 * @param n The size of the square matrix.
 * @returns The array with the integers arranged in a spiral.
 */
export function getSpiralMatrix(n: number): number[][] {
    const matrix: number[][] = [];
  
    for (let i = 0; i < n; i++) {
      matrix.push(new Array(n));
    }
  
    let top = 0, bottom = n - 1, left = 0, right = n - 1;
    let value = 1;
  
    while (top <= bottom && left <= right) {
      for (let i = left; i <= right; i++) {
        matrix[top][i] = value++;
      }
      top++;
  
      for (let i = top; i <= bottom; i++) {
        matrix[i][right] = value++;
      }
      right--;
  
      if (top <= bottom) {
        for (let i = right; i >= left; i--) {
          matrix[bottom][i] = value++;
        }
        bottom--;
      }
  
      if (left <= right) {
        for (let i = bottom; i >= top; i--) {
          matrix[i][left] = value++;
        }
        left++;
      }
    }
    return matrix;
}

/*
console.log(getSpiralMatrix(3));
console.log(getSpiralMatrix(4));
console.log(getSpiralMatrix(5));
console.log(getSpiralMatrix(6));
*/
