import { Artista } from "./Artista";
import { Disco, Single, Discografia } from "./Discografia";
import { Cancion } from "./Cancion"

class BibliotecaMusical {
  artistas: Artista[];

  constructor() {
    this.artistas = [];
  }

  agregarArtista(artista: Artista) {
    this.artistas.push(artista);
  }

  buscarArtista(nombre: string): Artista | undefined {
    return this.artistas.find((artista) => artista.nombre === nombre);
  }

  buscarDisco(nombreArtista: string, nombreDisco: string): Disco | Single | undefined {
    const artista = this.buscarArtista(nombreArtista);
    if (artista) {
      const discografia = artista.discografia;
      if (Array.isArray(discografia)) {
        const discoEncontrado = discografia.find((disco) => disco.nombre === nombreDisco);
        return discoEncontrado;
      } else if (discografia.nombre === nombreDisco) {
        return discografia;
      }
    }
    return undefined;
  }
  
  
  

  buscarCancion(nombreArtista: string, nombreDisco: string, nombreCancion: string): Cancion | undefined {
    const disco = this.buscarDisco(nombreArtista, nombreDisco);
    if (disco) {
      const canciones = disco.canciones;
      for (let i = 0; i < canciones.length; i++) {
        const cancion = canciones[i];
        if (cancion.nombre === nombreCancion) {
          return cancion;
        }
      }
    }
    return undefined;
  }

  obtenerNumeroDeCanciones(nombreArtista: string, nombreDisco: string): number {
    const disco = this.buscarDisco(nombreArtista, nombreDisco);
    if (disco) {
      return disco.canciones.length;
    }
    return 0;
  }

  obtenerDuracionDisco(nombreArtista: string, nombreDisco: string): number {
    const disco = this.buscarDisco(nombreArtista, nombreDisco);
    if (disco) {
      return disco.canciones.reduce((duracion, cancion) => duracion + cancion.duracion, 0);
    }
    return 0;
  }

  obtenerNumeroReproduccionesDisco(nombreArtista: string, nombreDisco: string): number {
    const disco = this.buscarDisco(nombreArtista, nombreDisco);
    if (disco) {
      return disco.canciones.reduce((reproducciones, cancion) => reproducciones + cancion.reproducciones, 0);
    }
    return 0;
  }

  mostrarTabla() {
    const data: any[] = [];
    for (let i = 0; i < this.artistas.length; i++) {
      const artista = this.artistas[i];
      const discos = artista.discografia;
      for (let j = 0; j < discos.length; j++) {
        const disco = discos[j];
        const canciones = disco.canciones;
        for (let k = 0; k < canciones.length; k++) {
          const cancion = canciones[k];
          data.push({
            Artista: artista.nombre,
            Disco: disco.nombre,
            Cancion: cancion.nombre,
            Duracion: cancion.duracion,
            Reproducciones: cancion.reproducciones,
            Generos: cancion.generos.join(", "),
            EsSingle: cancion.esSingle ? "Sí" : "No",
          });
        }
      }
    }
    console.table(data);
  }

  buscar(query: string) {
    const resultados: any[] = [];

    for (let i = 0; i < this.artistas.length; i++) {
      const artista = this.artistas[i];
      if (artista.nombre.toLowerCase().includes(query.toLowerCase())) {
        resultados.push({ Tipo: "Artista", Nombre: artista.nombre, OyentesMensuales: artista.oyentesMensuales });
      }
      const discos = artista.discografia;
      for (let j = 0; j < discos.length; j++) {
        const disco = discos[j];
        if (disco.nombre.toLowerCase().includes(query.toLowerCase())) {
          resultados.push({ Tipo: "Disco", Artista: artista.nombre, Nombre: disco.nombre, AnioPublicacion: disco.anioPublicacion });
        }
        const canciones = disco.canciones;
        for (let k = 0; k < canciones.length; k++) {
          const cancion = canciones[k];
          if (cancion.nombre.toLowerCase().includes(query.toLowerCase())) {
            resultados.push({ Tipo: "Cancion", Artista: artista.nombre, Disco: disco.nombre, Nombre: cancion.nombre });
          }
        }
      }
    }

    console.table(resultados);
  }

  mostrarDiscografia(nombreArtista: string) {
    const artista = this.buscarArtista(nombreArtista);
    if (artista) {
      const discos = artista.discografia;
      const data: any[] = [];
      for (let i = 0; i < discos.length; i++) {
        const disco = discos[i];
        const tipo = disco instanceof Single ? "Single" : "Disco";
        const duracion = disco.canciones.reduce((duracion, cancion) => duracion + cancion.duracion, 0);
        const reproducciones = disco.canciones.reduce((reproducciones, cancion) => reproducciones + cancion.reproducciones, 0);
        data.push({ Tipo: tipo, Nombre: disco.nombre, AnioPublicacion: disco.anioPublicacion, Duracion: duracion, Reproducciones: reproducciones });
      }
      console.table(data);
    }
  }
}