import { Artista } from "./Artista";
import { Cancion } from "./Cancion";
import { Disco, Single } from "./Disco";

export class BibliotecaMusical {
  private _artistas: Artista[];

  constructor(artistas: Artista[]) {
    this._artistas = artistas;
  }

  get artistas(): Artista[] {
    return this._artistas;
  }

  mostrarInformacion(): void {
    console.table(this.artistas);
  }

  buscarArtista(nombre: string): Artista[] {
    return this.artistas.filter((artista) => artista.nombre.includes(nombre));
  }

  agregarArtista(artista: Artista) {
    this.artistas.push(artista);
  }

  getArtistas(): Artista[] {
    return this.artistas;
  }

  buscarDisco(nombre: string): Array<Disco | Single> {
    const discos: Array<Disco | Single> = [];
    this.artistas.forEach((artista) => {
      artista.discografia.discos.forEach((disco) => {
        if (disco.nombre.includes(nombre)) {
          discos.push(disco);
        }
      });
    });
    return discos;
  }

  buscarCancion(nombre: string): Cancion[] {
    const canciones: Cancion[] = [];
    this.artistas.forEach((artista) => {
      artista.discografia.discos.forEach((disco) => {
        if (disco instanceof Disco) {
          disco.canciones.forEach((cancion) => {
            if (cancion.nombre.includes(nombre)) {
              canciones.push(cancion);
            }
          });
        } else {
          const single = disco as Single;
          if (single.cancion.nombre.includes(nombre)) {
            canciones.push(single.cancion);
          }
        }
      });
    });
    return canciones;
  }
}
