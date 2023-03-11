import { Disco, Discografia, Single } from "./Discografia";

export interface IArtista {
  nombre: string;
  oyentesMensuales: number;
}

export class Artista implements IArtista {
  nombre: string;
  oyentesMensuales: number;
  discografia: Discografia<Disco> | Discografia<Single>; // Especificar el tipo de elemento

  constructor(nombre: string, oyentesMensuales: number) {
    this.nombre = nombre;
    this.oyentesMensuales = oyentesMensuales;
    this.discografia = new Discografia<Disco | Single>(this, []); // Crear una nueva instancia de Discografia
  }
}
