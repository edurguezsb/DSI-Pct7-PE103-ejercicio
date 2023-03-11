import {Artista} from "./Artista";
import {Disco} from "./Disco";
import {Cancion} from "./Cancion";

export class Biblioteca {
    private pArtistas: Artista[];
  
    constructor(artistas: Artista[]) {
      this.pArtistas = artistas;
    }
  
    get artistas(): Artista[] {
      return this.pArtistas;
    }
    set artistas(value: Artista[]) {
      this.pArtistas = value;
    }
  
    searchArtist(nombre: string): void | undefined{
        this.pArtistas.forEach((item: Artista) => {
            if (item.nombre === nombre) console.table(item);
        });
        return undefined;
    }

    searchDisco(nombre: string): void | undefined{
        this.pArtistas.forEach((item: Artista) => {
            item.discografia.forEach((item2: Disco) =>{
                if (item2.nombre === nombre) console.table(item2);
            });
        });
        return undefined;
    }

    searchCancion(nombre: string): void | undefined{
        this.pArtistas.forEach((item: Artista) => {
            item.discografia.forEach((item2: Disco) =>{
                item2.canciones.forEach((item3: Cancion)=>{
                    if (item3.nombre === nombre) console.table(item3);
                });
            });
        });
        return undefined;
    }

    showBiblioteca(): void{
        console.table(this.pArtistas);
    }

    nsongs(nombre: string): number{
        let result = 0;
        this.pArtistas.forEach((item: Artista) => {
            item.discografia.forEach((item2: Disco) =>{
                if (item2.nombre === nombre) result = item2.canciones.length;
            });
        });
        return result;
    }

    duration(nombre: string): number{
        let result = 0;
        this.pArtistas.forEach((item: Artista) => {
            item.discografia.forEach((item2: Disco) =>{
                if (item2.nombre === nombre){
                    item2.canciones.forEach((item3: Cancion) =>{
                        result += item3.duracion
                    })
                }
            });
        });
        return result;
    }

    reproducciones(nombre: string): number{
        let result = 0;
        this.pArtistas.forEach((item: Artista) => {
            item.discografia.forEach((item2: Disco) =>{
                if (item2.nombre === nombre){
                    item2.canciones.forEach((item3: Cancion) =>{
                        result += item3.reproducciones
                    })
                }
            });
        });
        return result;
    }
}