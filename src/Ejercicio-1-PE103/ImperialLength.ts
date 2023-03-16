/**
 * La clase ImperialLength proporciona información sobre unidades de longitud en el sistema imperial.
 */
export class ImperialLength {
    private readonly pulgadasPorPies = 12;
    private readonly piesPorYardas = 3;
    private readonly yardasPorMillas = 1760;
  
    /**
     * Crea una instancia de ImperialLength.
     * @param pulgadas La longitud en pulgadas.
     */
    constructor(private pulgadas: number) {}
  
    /**
     * Devuelve la longitud en pulgadas.
     * @returns La longitud en pulgadas.
     */
    public getPulgadas(): number {
      return this.pulgadas;
    }
  
    /**
     * Establece la longitud en pulgadas.
     * @param pulgadas La longitud en pulgadas.
     */
    public setPulgadas(pulgadas: number): void {
      this.pulgadas = pulgadas;
    }
  
    /**
     * Devuelve la longitud en pies.
     * @returns La longitud en pies.
     */
    public getPies(): number {
      return this.pulgadas / this.pulgadasPorPies;
    }
  
    /**
     * Establece la longitud en pies.
     * @param pies La longitud en pies.
     */
    public setPies(pies: number): void {
      this.pulgadas = pies * this.pulgadasPorPies;
    }
  
    /**
     * Devuelve la longitud en yardas.
     * @returns La longitud en yardas.
     */
    public getYardas(): number {
      return this.getPies() / this.piesPorYardas;
    }
  
    /**
     * Establece la longitud en yardas.
     * @param yardas La longitud en yardas.
     */
    public setYardas(yardas: number): void {
      this.pulgadas = yardas * this.piesPorYardas * this.pulgadasPorPies;
    }
  
    /**
     * Devuelve la longitud en millas.
     * @returns La longitud en millas.
     */
    public getMillas(): number {
      return this.getYardas() / this.yardasPorMillas;
    }
  
    /**
     * Establece la longitud en millas.
     * @param millas La longitud en millas.
     */
    public setMillas(millas: number): void {
      this.pulgadas = millas * this.yardasPorMillas * this.piesPorYardas * this.pulgadasPorPies;
    }
  }