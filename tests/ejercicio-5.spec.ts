import 'mocha';
import {expect} from 'chai';
import { getSpiralMatrix } from '../src/ejercicio-5';

describe('getSpiralMatrix function', () => {
  it('should return an empty array if the input is 0', () => {
    const result = getSpiralMatrix(0);
    expect(result).to.deep.equal([]);
  });

  it('should return a 1x1 array if the input is 1', () => {
    const result = getSpiralMatrix(1);
    expect(result).to.deep.equal([[1]]);
  });

  it('should generate a 2x2 matrix with values in a spiral', () => {
    const result = getSpiralMatrix(2);
    expect(result).to.deep.equal([[1, 2], [4, 3]]);
  });

  it('should generate a 3x3 matrix with values in a spiral', () => {
    const result = getSpiralMatrix(3);
    expect(result).to.deep.equal([[1, 2, 3], [8, 9, 4], [7, 6, 5]]);
  });

  it('should generate a 5x5 matrix with values in a spiral', () => {
    const result = getSpiralMatrix(5);
    expect(result).to.deep.equal([
      [1, 2, 3, 4, 5],
      [16, 17, 18, 19, 6],
      [15, 24, 25, 20, 7],
      [14, 23, 22, 21, 8],
      [13, 12, 11, 10, 9],
    ]);
  });
});