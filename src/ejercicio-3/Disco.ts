import { Cancion } from "./Cancion";

export class Disco {
  private _nombre: string;
  private _anoPublicacion: number;
  private _canciones: Cancion[];

  constructor(nombre: string, anoPublicacion: number, canciones: Cancion[]) {
    this._nombre = nombre;
    this._anoPublicacion = anoPublicacion;
    this._canciones = canciones;
  }

  get nombre(): string {
    return this._nombre;
  }

  get anoPublicacion(): number {
    return this._anoPublicacion;
  }

  get canciones(): Cancion[] {
    return this._canciones;
  }
}

export class Single {
  private _nombre: string;
  private _anoPublicacion: number;
  private _cancion: Cancion;

  constructor(nombre: string, anoPublicacion: number, cancion: Cancion) {
    this._nombre = nombre;
    this._anoPublicacion = anoPublicacion;
    this._cancion = cancion;
  }

  get nombre(): string {
    return this._nombre;
  }

  get anoPublicacion(): number {
    return this._anoPublicacion;
  }

  get cancion(): Cancion {
    return this._cancion;
  }
}
