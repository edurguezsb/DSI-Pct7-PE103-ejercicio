/**
 * Esta clase Biblioteca almacena una colección de artistas y proporciona métodos para buscar y obtener información sobre ellos.
 */
import { Artista } from "./Artista";
import { Disco } from "./Disco";
import { Cancion } from "./Cancion";

export class Biblioteca {
    /**
     * Un array de objetos Artista
     * @private
     */
    private pArtistas: Artista[];
  
    /**
     * Crea un objeto Biblioteca
     * @param {Artista[]} artistas - Un array de objetos Artista
     */
    constructor(artistas: Artista[]) {
      this.pArtistas = artistas;
    }
  
    /**
     * Obtiene el array de objetos Artista almacenado en la Biblioteca
     * @returns {Artista[]} Un array de objetos Artista
     */
    get artistas(): Artista[] {
      return this.pArtistas;
    }
  
    /**
     * Establece el array de objetos Artista almacenado en la Biblioteca
     * @param {Artista[]} value - Un array de objetos Artista
     */
    set artistas(value: Artista[]) {
      this.pArtistas = value;
    }
  
    /**
     * Busca y muestra información sobre un Artista en particular
     * @param {string} nombre - El nombre del Artista a buscar
     * @returns {void} Nada
     */
    searchArtist(nombre: string): void | undefined{
        this.pArtistas.forEach((item: Artista) => {
            if (item.nombre === nombre) console.table(item);
        });
        return undefined;
    }

    /**
     * Busca y muestra información sobre un Disco en particular
     * @param {string} nombre - El nombre del Disco a buscar
     * @returns {void} Nada
     */
    searchDisco(nombre: string): void | undefined{
        this.pArtistas.forEach((item: Artista) => {
            item.discografia.forEach((item2: Disco) =>{
                if (item2.nombre === nombre) console.table(item2);
            });
        });
        return undefined;
    }

    /**
     * Busca y muestra información sobre una Canción en particular
     * @param {string} nombre - El nombre de la Canción a buscar
     * @returns {void} Nada
     */
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

    /**
     * Muestra una tabla con todos los artistas almacenados en la Biblioteca
     * @returns {void} Nada
     */
    showBiblioteca(): void{
        console.table(this.pArtistas);
    }

    /**
     * Calcula el número de canciones en un disco específico
     * @param {string} nombre - El nombre del disco para contar las canciones
     * @returns {number} El número de canciones en el disco especificado
     */
    songsNumber(nombre: string): number{
        let result = 0;
        this.pArtistas.forEach((item: Artista) => {
            item.discografia.forEach((item2: Disco) =>{
                if (item2.nombre === nombre) result = item2.canciones.length;
            });
       

        });
        return result;
    }
    
    /**
     * Calcula la duración total de todas las canciones en un disco específico
     * @param {string} nombre - El nombre del disco para calcular la duración total
     * @returns {number} La duración total de todas las canciones en el disco especificado
     */
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
    
    /**
     * Calcula el número total de reproducciones de todas las canciones en un disco específico
     * @param {string} nombre - El nombre del disco para calcular el número total de reproducciones
     * @returns {number} El número total de reproducciones de todas las canciones en el disco especificado
     */
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