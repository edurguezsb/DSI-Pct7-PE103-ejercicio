/**
 * La clase ImperialMass proporciona información sobre unidades de masa en el sistema imperial.
 */
export class ImperialMass {
    private readonly onzasPorLibra = 16;
    private readonly librasPorPiedra = 14;
    private readonly piedrasPorCentenas = 4;
    private readonly centenasPorToneladas = 20;
  
    /**
     * Crea una instancia de ImperialMass.
     * @param onzas La masa en onzas.
     */
    constructor(private onzas: number) {}
  
    /**
     * Devuelve la masa en onzas.
     * @returns La masa en onzas.
     */
    public getOnzas(): number {
      return this.onzas;
    }
  
    /**
     * Establece la masa en onzas.
     * @param onzas La masa en onzas.
     */
    public setOnzas(onzas: number): void {
      this.onzas = onzas;
    }
  
    /**
     * Devuelve la masa en libras.
     * @returns La masa en libras.
     */
    public getLibras(): number {
      return this.onzas / this.onzasPorLibra;
    }
  
    /**
     * Establece la masa en libras.
     * @param libras La masa en libras.
     */
    public setLibras(libras: number): void {
      this.onzas = libras * this.onzasPorLibra;
    }
  
    /**
     * Devuelve la masa en piedras.
     * @returns La masa en piedras.
     */
    public getPiedras(): number {
      return this.getLibras() / this.librasPorPiedra;
    }
  
    /**
     * Establece la masa en piedras.
     * @param piedras La masa en piedras.
     */
    public setPiedras(piedras: number): void {
      this.onzas = piedras * this.librasPorPiedra * this.onzasPorLibra;
    }
  
    /**
     * Devuelve la masa en centenas.
     * @returns La masa en centenas.
     */
    public getCentenas(): number {
      return this.getPiedras() / this.piedrasPorCentenas;
    }
  
    /**
     * Establece la masa en centenas.
     * @param centenas La masa en centenas.
     */
    public setCentenas(centenas: number): void {
      this.onzas = centenas * this.piedrasPorCentenas * this.librasPorPiedra * this.onzasPorLibra;
    }
  
    /**
     * Devuelve la masa en toneladas.
     * @returns La masa en toneladas.
     */
    public getToneladas(): number {
      return this.getCentenas() / this.centenasPorToneladas;
    }
  
    /**
     * Establece la masa en toneladas.
     * @param toneladas La masa en toneladas.
     */
    public setTons(toneladas: number): void {
      this.onzas = toneladas * this.centenasPorToneladas * this.piedrasPorCentenas * this.librasPorPiedra * this.onzasPorLibra;
    }
  }