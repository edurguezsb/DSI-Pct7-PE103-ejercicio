import { Cancion } from "./Cancion";
import { Discografia } from "./Discografia";


export class Disco extends Discografia{
  private pCanciones: Cancion[]

  constructor(nombre: string, año:number, canciones: Cancion[]){
    super(nombre, año);
    this.pCanciones = canciones
  }


  get canciones(): Cancion[] {
    return this.pCanciones;
  }

  set canciones(value: Cancion[]) {
    this.pCanciones = value;
  }
}