import 'mocha';
import {expect} from 'chai';
import { fromArrayToRanges, fromRangesToArray } from '../src/ejercicio-6';

describe('fromArrayToRanges function', () => {
  it('should return an empty string if the input array is empty', () => {
    const input: number[] = [];
    const result = fromArrayToRanges(input);
    expect(result).to.equal("");
  });

  it('should return a string that represents the ranges in the input array', () => {
    const input = [1, 2, 3, 5, 6, 7, 10];
    const result = fromArrayToRanges(input);
    expect(result).to.equal("1_3, 5_7, 10");
  });
});

describe('fromRangesToArray function', () => {
  it('should return an empty array if the input string is empty', () => {
    const input = "";
    const result = fromRangesToArray(input);
    expect(result).to.deep.equal([]);
  });

  it('should return an array of numbers that corresponds to the input string', () => {
    const input = "1_3, 5_7, 10";
    const result = fromRangesToArray(input);
    expect(result).to.deep.equal([1, 2, 3, 5, 6, 7, 10]);
  });
});