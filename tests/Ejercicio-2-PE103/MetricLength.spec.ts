import { expect } from "chai";
import { MetricLength } from '../../src/Ejercicio-2-PE103/MetricLength'

describe("MetricLength", () => {
  describe("cmToM", () => {
    it("debería convertir 100 cm a 1 m", () => {
      const result = MetricLength.cmToM(100);
      expect(result).to.equal(1);
    });

    it("debería convertir 50 cm a 0.5 m", () => {
      const result = MetricLength.cmToM(50);
      expect(result).to.equal(0.5);
    });
  });

  describe("mToCm", () => {
    it("debería convertir 2 m a 200 cm", () => {
      const result = MetricLength.mToCm(2);
      expect(result).to.equal(200);
    });

    it("debería convertir 0.5 m a 50 cm", () => {
      const result = MetricLength.mToCm(0.5);
      expect(result).to.equal(50);
    });
  });

  describe("mToKm", () => {
    it("debería convertir 1000 m a 1 km", () => {
      const result = MetricLength.mToKm(1000);
      expect(result).to.equal(1);
    });

    it("debería convertir 500 m a 0.5 km", () => {
      const result = MetricLength.mToKm(500);
      expect(result).to.equal(0.5);
    });
  });

  describe("kmToM", () => {
    it("debería convertir 2 km a 2000 m", () => {
      const result = MetricLength.kmToM(2);
      expect(result).to.equal(2000);
    });

    it("debería convertir 0.5 km a 500 m", () => {
      const result = MetricLength.kmToM(0.5);
      expect(result).to.equal(500);
    });
  });
});
