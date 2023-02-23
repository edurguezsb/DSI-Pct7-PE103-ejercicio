"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const ejercicio_1_1 = require("../src/ejercicio-1");
describe('getAllergens function tests', () => {
    it('should return the correct allergens for a given score', () => {
        const result = (0, ejercicio_1_1.getAllergens)(129);
        (0, chai_1.expect)(result).to.include(ejercicio_1_1.Allergen.Huevo);
        (0, chai_1.expect)(result).to.include(ejercicio_1_1.Allergen.Gato);
        (0, chai_1.expect)(result).to.have.lengthOf(2);
    });
    it('should return an empty array if the score does not contain any allergens', () => {
        const result = (0, ejercicio_1_1.getAllergens)(256);
        (0, chai_1.expect)(result).to.be.an('array').that.is.empty;
    });
    it('should return the correct allergens when the score contains multiple allergens', () => {
        const result = (0, ejercicio_1_1.getAllergens)(515);
        (0, chai_1.expect)(result).to.include(ejercicio_1_1.Allergen.Huevo);
        (0, chai_1.expect)(result).to.include(ejercicio_1_1.Allergen.Cacahuete);
        (0, chai_1.expect)(result).to.have.lengthOf(2);
    });
    it('should handle scores that include allergens not in the enum', () => {
        const result = (0, ejercicio_1_1.getAllergens)(511);
        (0, chai_1.expect)(result).to.include(ejercicio_1_1.Allergen.Huevo);
        (0, chai_1.expect)(result).to.include(ejercicio_1_1.Allergen.Cacahuete);
        (0, chai_1.expect)(result).to.include(ejercicio_1_1.Allergen.Marisco);
        (0, chai_1.expect)(result).to.include(ejercicio_1_1.Allergen.Fresa);
        (0, chai_1.expect)(result).to.include(ejercicio_1_1.Allergen.Tomate);
        (0, chai_1.expect)(result).to.include(ejercicio_1_1.Allergen.Chocolate);
        (0, chai_1.expect)(result).to.include(ejercicio_1_1.Allergen.Polen);
        (0, chai_1.expect)(result).to.include(ejercicio_1_1.Allergen.Gato);
        (0, chai_1.expect)(result).to.have.lengthOf(8);
    });
    it('should return undefined for not integer and not positive scores', () => {
        (0, chai_1.expect)((0, ejercicio_1_1.getAllergens)(-5)).to.be.undefined;
        (0, chai_1.expect)((0, ejercicio_1_1.getAllergens)(3.5)).to.be.undefined;
        (0, chai_1.expect)((0, ejercicio_1_1.getAllergens)(NaN)).to.be.undefined;
    });
});
