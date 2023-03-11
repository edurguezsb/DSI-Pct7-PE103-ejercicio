export class Cancion {

  constructor(
    private pNombre: string,
    private pDuracion: number,
    private pGenero: string[],
    private pSingle: boolean,
    private pReproducciones: number
  ) {}


  get nombre(): string {
    return this.pNombre;
  }

  set nombre(value: string) {
    this.pNombre = value;
  }


  get duracion(): number {
    return this.pDuracion;
  }

  set duracion(value: number) {
    this.pDuracion = value;
  }


  get generos(): string[] {
    return this.pGenero;
  }

  set generos(value: string[]) {
    this.pGenero = value;
  }


  get single(): boolean {
    return this.pSingle;
  }

  set single(value: boolean) {
    this.pSingle = value;
  }


  get reproducciones(): number {
    return this.pReproducciones;
  }

  set reproducciones(value: number) {
    this.pReproducciones = value;
  }
}
