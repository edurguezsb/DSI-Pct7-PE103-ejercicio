import 'mocha';
import {expect} from 'chai';
import {meshArray} from '../src/ejercicio-8';

describe('meshArray function', () => {
  it('should return an empty string when an empty array is passed', () => {
    const input: string[] = [];
    const result = meshArray(input);
    expect(result).to.equal('');
  });

  it('should return the common letters when the words are chained together', () => {
    const input = ['beach', 'achieve', 'evening'];
    const result = meshArray(input);
    expect(result).to.equal('che');
  });

  it('should return an error message when the words are not chained together', () => {
    const input = ['one', 'two', 'three'];
    const result = meshArray(input);
    expect(result).to.equal('Error al encadenar');
  });

  it('should handle an array with one word', () => {
    const input = ['hello'];
    const result = meshArray(input);
    expect(result).to.equal('');
  });

  it('should handle an array with two identical words', () => {
    const input = ['hello', 'hello'];
    const result = meshArray(input);
    expect(result).to.equal('hello');
  });
});
