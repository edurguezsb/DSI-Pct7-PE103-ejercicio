import { expect } from "chai";
import { MetricMass } from '../../src/Ejercicio-2-PE103/MetricMass'


describe("MetricMass", () => {
  describe("gToKg", () => {
    it("debería convertir 1000 g a 1 kg", () => {
      const result = MetricMass.gToKg(1000);
      expect(result).to.equal(1);
    });

    it("debería convertir 500 g a 0.5 kg", () => {
      const result = MetricMass.gToKg(500);
      expect(result).to.equal(0.5);
    });
  });

  describe("kgToG", () => {
    it("debería convertir 2 kg a 2000 g", () => {
      const result = MetricMass.kgToG(2);
      expect(result).to.equal(2000);
    });

    it("debería convertir 0.5 kg a 500 g", () => {
      const result = MetricMass.kgToG(0.5);
      expect(result).to.equal(500);
    });
  });

  describe("kgToT", () => {
    it("debería convertir 1000 kg a 1 t", () => {
      const result = MetricMass.kgToT(1000);
      expect(result).to.equal(1);
    });

    it("debería convertir 500 kg a 0.5 t", () => {
      const result = MetricMass.kgToT(500);
      expect(result).to.equal(0.5);
    });
  });

  describe("tToKg", () => {
    it("debería convertir 2 t a 2000 kg", () => {
      const result = MetricMass.tToKg(2);
      expect(result).to.equal(2000);
    });

    it("debería convertir 0.5 t a 500 kg", () => {
      const result = MetricMass.tToKg(0.5);
      expect(result).to.equal(500);
    });
  });
});
