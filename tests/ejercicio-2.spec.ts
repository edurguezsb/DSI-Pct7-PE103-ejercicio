import 'mocha';
import { expect } from 'chai';
import { ComplexNumber, add, sub, mult, div, prod, conj, abs } from '../src/ejercicio-2';

describe('complex number operations', () => {
  const a1: ComplexNumber = [3, 4];
  const a2: ComplexNumber = [1, -2];
  const scalar = 2;

  it('should add two complex numbers', () => {
    const result = add(a1, a2);
    expect(result).to.eql([4, 2]);
  });

  it('should subtract two complex numbers', () => {
    const result = sub(a1, a2);
    expect(result).to.eql([2, 6]);
  });

  it('should multiply two complex numbers', () => {
    const result = mult(a1, a2);
    expect(result).to.eql([11, -2]);
  });

  it('should divide two complex numbers', () => {
    const result = div(a1, a2);
    expect(result).to.eql([0.6, 2.2]);
  });

  it('should scale a complex number', () => {
    const result = prod(a1, scalar);
    expect(result).to.eql([6, 8]);
  });

  it('should calculate the conjugate of a complex number', () => {
    const result = conj(a1);
    expect(result).to.eql([3, -4]);
  });

  it('should calculate the absolute value of a complex number', () => {
    const result = abs(a1);
    expect(result).to.eql(5);
  });
});