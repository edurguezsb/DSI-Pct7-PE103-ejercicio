import 'mocha';
import {expect} from 'chai';
import {decodeResistor} from '../src/ejercicio-7';

describe('decodeResistor function', () => {
  it('should return the correct value for a two-band resistor', () => {
    const result = decodeResistor(['Marrón', 'Negro']);
    expect(result).to.equal(10);
  });

  it('should return the correct value for a two-band resistor', () => {
    const result = decodeResistor(['Naranja', 'Amarillo']);
    expect(result).to.equal(34);
  });

  it('should return the correct value for a two-band resistor', () => {
    const result = decodeResistor(['Marrón', 'Verde']);
    expect(result).to.equal(15);
  });

  it('should return the correct value for a three-band resistor ignoring the third color', () => {
    const result = decodeResistor(['Marrón', 'Negro', 'Rojo']);
    expect(result).to.equal(10);
  });

  it('should return the correct value for a four-band resistor ignoring the third and fourth color', () => {
    const result = decodeResistor(['Marrón', 'Negro', 'Negro', 'Rojo']);
    expect(result).to.equal(10);
  });
});
