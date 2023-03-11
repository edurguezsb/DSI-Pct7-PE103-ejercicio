export class Discografia {
  
    private pNombre: string;
    private pAño: number;


  constructor(nombre: string, año:number){
    this.pNombre = nombre;
    this.pAño = año;
  }

  get nombre(): string {
    return this.pNombre;
  }

  set nombre(value: string) {
    this.pNombre = value;
  }


  get año(): number {
    return this.pAño;
  }

  set año(value: number) {
    this.pAño = value;
  }
}