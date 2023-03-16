/**
 * Clase para trabajar con diferentes unidades de masa del sistema métrico
 * @class MetricMass
 */
export class MetricMass {
  /**
   * Convierte una masa en gramos a kilogramos
   * @param {number} g - Masa en gramos
   * @returns {number} Masa en kilogramos
   */
  static gToKg(g: number): number {
    return g / 1000;
  }

  /**
   * Convierte una masa en kilogramos a gramos
   * @param {number} kg - Masa en kilogramos
   * @returns {number} Masa en gramos
   */
  static kgToG(kg: number): number {
    return kg * 1000;
  }

  /**
   * Convierte una masa en kilogramos a toneladas
   * @param {number} kg - Masa en kilogramos
   * @returns {number} Masa en toneladas
   */
  static kgToT(kg: number): number {
    return kg / 1000;
  }

  /**
   * Convierte una masa en toneladas a kilogramos
   * @param {number} t - Masa en toneladas
   * @returns {number} Masa en kilogramos
   */
  static tToKg(t: number): number {
    return t * 1000;
  }
}
