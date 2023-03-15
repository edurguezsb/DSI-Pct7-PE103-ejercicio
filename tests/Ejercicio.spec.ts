import { expect } from "chai";
import { suma } from "../src/Ejercicio";

describe("Función suma", () => {
    it("debería sumar dos números correctamente", () => {
        const resultado = suma(3, 4);
        expect(resultado).to.equal(7);
    });

    it("debería devolver 0 si ambos números son 0", () => {
        const resultado = suma(0, 0);
        expect(resultado).to.equal(0);
    });

    it("debería sumar números negativos correctamente", () => {
        const resultado = suma(-3, -4);
        expect(resultado).to.equal(-7);
    });

    it("debería sumar números mixtos (positivos y negativos) correctamente", () => {
        const resultado = suma(5, -2);
        expect(resultado).to.equal(3);
    });
});
