import { Discografia } from "./Discografia";

export class Artista {
  private _nombre: string;
  private _oyentesMensuales: number;
  private _discografia: Discografia;

  constructor(nombre: string, oyentesMensuales: number, discografia: Discografia) {
    this._nombre = nombre;
    this._oyentesMensuales = oyentesMensuales;
    this._discografia = discografia;
  }

  get nombre(): string {
    return this._nombre;
  }

  get oyentesMensuales(): number {
    return this._oyentesMensuales;
  }

  get discografia(): Discografia {
    return this._discografia;
  }
}
