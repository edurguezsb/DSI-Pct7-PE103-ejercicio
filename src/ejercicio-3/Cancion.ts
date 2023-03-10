export class Cancion {
  private _nombre: string;
  private _duracionSegundos: number;
  private _generos: string[];
  private _single: boolean;
  private _numReproducciones: number;

  constructor(nombre: string, duracionSegundos: number, generos: string[], single: boolean, numReproducciones: number) {
    this._nombre = nombre;
    this._duracionSegundos = duracionSegundos;
    this._generos = generos;
    this._single = single;
    this._numReproducciones = numReproducciones;
  }

  get nombre(): string {
    return this._nombre;
  }

  get duracionSegundos(): number {
    return this._duracionSegundos;
  }

  get generos(): string[] {
    return this._generos;
  }

  get single(): boolean {
    return this._single;
  }

  get numReproducciones(): number {
    return this._numReproducciones;
  }
}
