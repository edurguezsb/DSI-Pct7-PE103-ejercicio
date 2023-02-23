import 'mocha';
import {expect} from 'chai';
import {decodeResistor} from '../src/ejercicio-7';

describe('decodeResistor function', () => {
  it('should return the correct value for a two-band resistor', () => {
    const result = decodeResistor(['marrón', 'negro']);
    expect(result).to.equal(1);
  });

  it('should return the correct value for a three-band resistor', () => {
    const result = decodeResistor(['marrón', 'negro', 'rojo']);
    expect(result).to.equal(10);
  });

  it('should return the correct value for a four-band resistor', () => {
    const result = decodeResistor(['marrón', 'negro', 'negro', 'rojo']);
    expect(result).to.equal(100);
  });

  it('should return the correct value for a five-band resistor', () => {
    const result = decodeResistor(['marrón', 'negro', 'negro', 'oro', 'marrón']);
    expect(result).to.equal(1000);
  });

  it('should return the correct value for a six-band resistor', () => {
    const result = decodeResistor(['marrón', 'negro', 'negro', 'marrón', 'negro', 'plata']);
    expect(result).to.equal(100000);
  });
});
