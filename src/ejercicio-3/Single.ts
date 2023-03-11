import { Cancion } from "./Cancion";
import { Discografia } from "./Discografia";


export class Single extends Discografia{
  private pCancion: Cancion

  constructor(nombre: string, año:number, cancion: Cancion){
    super(nombre, año);
    this.pCancion = cancion
  }


  get cancion(): Cancion {
    return this.pCancion;
  }

  set cancion(value: Cancion) {
    this.pCancion = value;
  }
}