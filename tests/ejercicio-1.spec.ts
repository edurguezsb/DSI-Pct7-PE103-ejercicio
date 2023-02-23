import 'mocha';
import {expect} from 'chai';
import {getAllergens, Allergen} from '../src/ejercicio-1';

describe('getAllergens function tests', () => {
  it('should return the correct allergens for a given score', () => {
    const result = getAllergens(129);
    expect(result).to.include(Allergen.Huevo);
    expect(result).to.include(Allergen.Gato);
    expect(result).to.have.lengthOf(2);
  });

  it('should return an empty array if the score does not contain any allergens', () => {
    const result = getAllergens(256);
    expect(result).to.be.an('array').that.is.empty;
  });

  it('should return the correct allergens when the score contains multiple allergens', () => {
    const result = getAllergens(515);
    expect(result).to.include(Allergen.Huevo);
    expect(result).to.include(Allergen.Cacahuete);
    expect(result).to.have.lengthOf(2);
  });

  it('should handle scores that include allergens not in the enum', () => {
    const result = getAllergens(511);
    expect(result).to.include(Allergen.Huevo);
    expect(result).to.include(Allergen.Cacahuete);
    expect(result).to.include(Allergen.Marisco);
    expect(result).to.include(Allergen.Fresa);
    expect(result).to.include(Allergen.Tomate);
    expect(result).to.include(Allergen.Chocolate);
    expect(result).to.include(Allergen.Polen);
    expect(result).to.include(Allergen.Gato);
    expect(result).to.have.lengthOf(8);
  });

  it('should return undefined for not integer and not positive scores', () => {
    expect(getAllergens(-5)).to.be.undefined;
    expect(getAllergens(3.5)).to.be.undefined;
    expect(getAllergens(NaN)).to.be.undefined;
  });
});
