/**
 * Clase para trabajar con diferentes unidades de longitud del sistema métrico
 * @class MetricLength
 */
export class MetricLength {
  /**
   * Convierte una longitud en centímetros a metros
   * @param {number} cm - Longitud en centímetros
   * @returns {number} Longitud en metros
   */
  static cmToM(cm: number): number {
    return cm / 100;
  }

  /**
   * Convierte una longitud en metros a centímetros
   * @param {number} m - Longitud en metros
   * @returns {number} Longitud en centímetros
   */
  static mToCm(m: number): number {
    return m * 100;
  }

  /**
   * Convierte una longitud en metros a kilómetros
   * @param {number} m - Longitud en metros
   * @returns {number} Longitud en kilómetros
   */
  static mToKm(m: number): number {
    return m / 1000;
  }

  /**
   * Convierte una longitud en kilómetros a metros
   * @param {number} km - Longitud en kilómetros
   * @returns {number} Longitud en metros
   */
  static kmToM(km: number): number {
    return km * 1000;
  }
}
