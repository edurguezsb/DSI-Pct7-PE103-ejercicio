export interface ICancion {
  nombre: string;
  duracion: number;
  generos: string[];
  esSingle: boolean;
  reproducciones: number;
}

export class Cancion implements ICancion {
  nombre: string;
  duracion: number;
  generos: string[];
  esSingle: boolean;
  reproducciones: number;

  constructor(nombre: string, duracion: number, generos: string[], esSingle: boolean, reproducciones: number) {
    this.nombre = nombre;
    this.duracion = duracion;
    this.generos = generos;
    this.esSingle = esSingle;
    this.reproducciones = reproducciones;
  }
}
