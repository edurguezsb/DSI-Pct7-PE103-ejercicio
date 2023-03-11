import {Discografia} from "./Discografia";

export class Artista {
  
    constructor(
      private pNombre: string,
      private pOyentes: number,
      private pDiscografia: Discografia[]
    ) {}
  
    get nombre(): string {
      return this.pNombre;
    }

    set nombre(value: string) {
      this.pNombre = value;
    }
  
    get oyentes(): number {
      return this.pOyentes;
    }

    set oyentes(value: number) {
      this.pOyentes = value;
    }
  
    get discografia(): Discografia[] {
      return this.pDiscografia;
    }

    set discografia(value: Discografia[]) {
      this.pDiscografia = value;
    }
  }