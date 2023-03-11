import { Artista } from "./Artista";
import { Cancion } from "./Cancion"


export interface IDisco {
  nombre: string;
  anioPublicacion: number;
  canciones: Cancion[];
}

export interface ISingle extends IDisco {
  esSingle: boolean;
}

export class Disco implements IDisco {
  nombre: string;
  anioPublicacion: number;
  canciones: Cancion[];

  constructor(nombre: string, anioPublicacion: number, canciones: Cancion[]) {
    this.nombre = nombre;
    this.anioPublicacion = anioPublicacion;
    this.canciones = canciones;
  }
}

export class Single implements ISingle {
  nombre: string;
  anioPublicacion: number;
  canciones: Cancion[];
  esSingle: boolean;

  constructor(nombre: string, anioPublicacion: number, canciones: Cancion[]) {
    this.nombre = nombre;
    this.anioPublicacion = anioPublicacion;
    this.canciones = canciones;
    this.esSingle = true;
  }
}

export class Discografia<T extends IDisco> {
  artist: Artista;
  discos: T[];

  constructor(artist: Artista, discos: T[]) {
    this.artist = artist;
    this.discos = discos;
  }
}
