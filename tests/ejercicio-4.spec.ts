import 'mocha';
import {expect} from 'chai';
import { myMap } from '../src/ejercicio-4';

describe('myMap function', () => {
  it('should return an empty array if the input array is empty', () => {
    const input: number[] = [];
    const result = myMap(input, x => x * 2);
    expect(result).to.deep.equal([]);
  });

  it('should apply the callback function to each element in the array and return the transformed array', () => {
    const input = [1, 2, 3];
    const result = myMap(input, x => x * 2);
    expect(result).to.deep.equal([2, 4, 6]);
  });

  it('should handle arrays of non-numeric types', () => {
    const input = ['hello', 'world'];
    const result = myMap(input, x => x.toUpperCase());
    expect(result).to.deep.equal(['HELLO', 'WORLD']);
  });

  it('should not modify the original array', () => {
    const input = [1, 2, 3];
    myMap(input, x => x * 2);
    expect(input).to.deep.equal([1, 2, 3]);
  });
});
