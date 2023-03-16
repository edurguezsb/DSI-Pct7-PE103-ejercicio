import { MetricLength } from '../../src/Ejercicio-2-PE103/MetricLength'
import { MetricMass } from '../../src/Ejercicio-2-PE103/MetricMass'
/**
 * Clase adaptadora que permite convertir unidades del sistema imperial al sistema métrico
 * @class ImperialMetricAdapter
 */
export class ImperialMetricAdapter {
    /**
     * Convierte una longitud en pulgadas a centímetros
     * @param {number} in - Longitud en pulgadas
     * @returns {number} Longitud en centímetros
     */
    static inToCm(Pulgadas: number): number {
      const cmPorPulgadas = 2.54;
      return Pulgadas * cmPorPulgadas;
    }
  //ft = a pies
    /**
     * Convierte una longitud en pies a metros
     * @param {number} ft - Longitud en pies
     * @returns {number} Longitud en metros
     */
    static ftToM(ft: number): number {
      const cmPorFt = 30.48;
      const cm = ft * cmPorFt;
      return MetricLength.cmToM(cm);
    }
  
    /**
     * Convierte una longitud en millas a kilómetros
     * @param {number} mi - Longitud en millas
     * @returns {number} Longitud en kilómetros
     */
    static miToKm(mi: number): number {
      const ftPorMi = 5280;
      const ft = mi * ftPorMi;
      return MetricLength.mToKm(ImperialMetricAdapter.ftToM(ft));
    }
  
    /**
     * Convierte una masa en onzas a gramos
     * @param {number} oz - Masa en onzas
     * @returns {number} Masa en gramos
     */
    static ozToG(oz: number): number {
      const gPorOz = 28.3495;
      return oz * gPorOz;
    }
  
    /**
     * Convierte una masa en libras a kilogramos
     * @param {number} lb - Masa en libras
     * @returns {number} Masa en kilogramos
     */
    static lbToKg(lb: number): number {
      const gPorLb = 453.592;
      const g = lb * gPorLb;
      return MetricMass.gToKg(g);
    }
  
    /**
     * Convierte una masa en toneladas (sistema imperial) a toneladas (sistema métrico)
     * @param {number} t - Masa en toneladas (sistema imperial)
     * @returns {number} Masa en toneladas (sistema métrico)
     */
    static tToT(t: number): number {
      const lbPorT = 2000;
      const lb = t * lbPorT;
      return MetricMass.kgToT(ImperialMetricAdapter.lbToKg(lb));
    }
  }
  