/**
 * La clase Discografia representa una discografía musical.
 */
export class Discografia {
  
  /** 
   * El nombre de la discografía 
   */
  private pNombre: string;

  /** 
   * El año de lanzamiento de la discografía 
   */
  private pAño: number;


  /**
   * Crea una nueva instancia de la clase Discografia.
   * @param nombre El nombre de la discografía.
   * @param año El año de lanzamiento de la discografía.
   */
  constructor(nombre: string, año:number){
      this.pNombre = nombre;
      this.pAño = año;
  }

  /** 
   * Obtiene el nombre de la discografía 
   */
  get nombre(): string {
      return this.pNombre;
  }

  /** 
   * Establece el nombre de la discografía 
  */
  set nombre(value: string) {
      this.pNombre = value;
  }

  /** 
   * Obtiene el año de lanzamiento de la discografía 
   */
  get año(): number {
      return this.pAño;
  }

  /** 
   * Establece el año de lanzamiento de la discografía 
   */
  set año(value: number) {
      this.pAño = value;
  }
}
